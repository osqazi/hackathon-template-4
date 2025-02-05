import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: NextRequest) {
  try {
    const { orderID, status } = await req.json();

    if (!orderID || !status) {
      return NextResponse.json(
        { success: false, message: "Missing parameters" },
        { status: 400 }
      );
    }

    console.log("[Debug] Input parameters:", { orderID, status });

    // First, let's verify the schema structure
    const schemaQuery = `*[_type == "order"][0] {
      "allFields": *,
      "schemaType": _type
    }`;
    const schemaCheck = await client.fetch(schemaQuery);
    console.log("[Debug] Schema structure:", schemaCheck);

    // Fetch order with all fields for debugging
    const query = `*[_type == "order" && orderId == $id]{
      _id,
      orderId,
      paymentStatus,
      _type,
      _rev
    }`;
    const orders = await client.fetch(query, { id: orderID });
    console.log("[Debug] Found order:", JSON.stringify(orders, null, 2));

    if (!orders || orders.length === 0) {
      return NextResponse.json(
        { success: false, message: "Order not found", debug: orders },
        { status: 404 }
      );
    }

    const order = orders[0];
    console.log("[Debug] Attempting to update document with _id:", order._id);

    try {
      const updateResponse = await client
        .patch(order._id)
        .set({
          paymentStatus: status,
          _type: "order" // Explicitly setting the type
        })
        .commit({
          // Add autoGenerateArrayKeys in case there are array fields
          autoGenerateArrayKeys: true
        });

      console.log("[Debug] Update response:", JSON.stringify(updateResponse, null, 2));

      // Verify the update
      const verifyQuery = `*[_type == "order" && _id == $id][0]`;
      const updatedOrder = await client.fetch(verifyQuery, { id: order._id });
      console.log("[Debug] Verification - Updated order:", JSON.stringify(updatedOrder, null, 2));

      return NextResponse.json({
        success: true,
        message: "Order status updated",
        debug: {
          original: order,
          updated: updatedOrder
        }
      });
    } catch (patchError: any) {
      console.error("[Debug] Patch operation failed:", patchError);
      throw new Error(`Sanity update failed: ${patchError.message}`);
    }

  } catch (error: any) {
    console.error("[Debug] Full error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal Server Error", 
        details: error.message,
        stack: error.stack 
      },
      { status: 500 }
    );
  }
}