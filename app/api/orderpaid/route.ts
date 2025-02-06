import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: NextRequest) {
  try {
    const { id, paymentStatus } = await req.json();

    if (!id || !paymentStatus) {
      return NextResponse.json(
        { success: false, message: "Missing parameters" },
        { status: 400 }
      );
    }

    console.log("Received ID:", id, "New Status:", paymentStatus);

    // Fetch order by `id`
    const query = `*[_type == "order" && _id == $id][0]{_id, paymentStatus}`;
    const orders = await client.fetch(query, { id });

    if (!orders || orders.length === 0) {
      return NextResponse.json(
        { success: false, message: "Order not found", debug: orders },
        { status: 404 }
      );
    }

    console.log("Updating order:", orders._id, "with Status:", paymentStatus);

    // Update order status
    await client
      .patch(orders._id)
      .set({ paymentStatus })
      .commit();

    return NextResponse.json({
      success: true,
      message: "Order status updated successfully",
    });
  } catch (error: any) {
    console.error("Sanity update error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
