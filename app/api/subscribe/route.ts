import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse request body

    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const subscriber = await client.create({
      _type: "subscribers",
      email: body.email,
      isSubscribed: true,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(subscriber, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe", details: error }, { status: 500 });
  }
}
