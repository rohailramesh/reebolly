import {
  createEvent,
  getAllEvents,
  getEventById,
} from "@/lib/actions/event.actions";
import { revalidatePath } from "next/cache";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();
    const createdEvent = await createEvent(event);
    revalidatePath("/");
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    if (id) {
      const event = await getEventById(id);
      if (!event) {
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
      }
      return NextResponse.json(event);
    } else {
      const events = await getAllEvents();
      return NextResponse.json(events);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     const events = await getAllEvents();
//     return NextResponse.json(events);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { error: `Internal Server Error: ${error}` },
//       { status: 500 }
//     );
//   }
// }
