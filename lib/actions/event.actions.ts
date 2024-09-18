"use server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongodb";
import Event from "../mongodb/models/event.model";
import { handleError } from "../utils";
import { CreateEvent } from "@/types";

const deafult_path = "/";
//create an event
export async function createEvent(event: CreateEvent) {
  try {
    await connectToDatabase();
    console.log("Connected to database");
    const newEvent = await Event.create({ ...event });
    revalidatePath(event.path || deafult_path);
    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
}

//get all events
export async function getAllEvents() {
  try {
    await connectToDatabase();
    const events = await Event.find();
    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    handleError(error);
  }
}
