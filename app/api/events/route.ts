import { createEvent } from "@/lib/actions/event.actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();
    const createdEvent = await createEvent(event);
    return NextResponse.json({ createdEvent });
  } catch (error) {
    console.error("Internal Error:", error);
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
