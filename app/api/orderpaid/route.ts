import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { stat } from "fs";

export async function POST(req: NextRequest) {
  try {
    const { orderID, status } = await req.json();

    if (!orderID || !status) {
      return NextResponse.json(
        { success: false, message: "Missing parameters" },
        { status: 400 }
      );
    }

    // Step 1: Fetch the order's _id from Sanity using orderNumber
    const query = `*[_type == "order" && orderId == $id]`;
    const order = await client.fetch(query, { id: orderID });

    if (!order || !order._id) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    // Step 2: Update the order's orderStatus field
    await client
      .patch(order._id) // Use the actual _id from Sanity
      .set({ paymentStatus: status })
      .commit();

    return NextResponse.json({
      success: true,
      message: "Order status updated",
    });
  } catch (error) {
    console.error("Sanity update error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
