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

    console.log("Received orderID:", orderID, "Status:", status);

    // Fetch order _id using orderId
    const query = `*[_type == "order" && orderId == $id]{_id, orderId, paymentStatus}`;
    const orders = await client.fetch(query, { id: orderID });

    console.log("Fetched orders:", orders);

    if (!orders || orders.length === 0) {
      return NextResponse.json(
        { success: false, message: "Order not found", debug: orders },
        { status: 404 }
      );
    }

    const order = orders[0];

    console.log("Updating order with _id:", order._id, "New Status:", status);

    // Update order's paymentStatus
    await client.patch(order._id)
      .set({ paymentStatus: status })
      .commit()
      .then((res) => console.log("Sanity update response:", res))
      .catch((err) => {
        console.error("Sanity update error:", err);
        throw new Error("Sanity update failed");
      });

    return NextResponse.json({
      success: true,
      message: "Order status updated",
    });
  } catch (error:any) {
    console.error("Sanity update error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
