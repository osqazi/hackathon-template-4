import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { orderId, paymentStatus } = req.body;

    if (!orderId || !paymentStatus) {
      return res.status(400).json({ success: false, message: "Missing parameters" });
    }

    // Step 1: Fetch the order's _id from Sanity using orderNumber
    const query = `*[_type == "orders" && orderId == "${orderId}"][0]{ _id }`;
    const order = await client.fetch(query);

    if (!order || !order._id) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    // Step 2: Update the order's orderStatus field
    await client
      .patch(order._id) // Use the actual _id from Sanity
      .set({ paymentStatus: paymentStatus })
      .commit();

    return res.status(200).json({ success: true, message: "Order status updated" });
  } catch (error) {
    console.error("Sanity update error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
