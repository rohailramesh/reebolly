import { Document, Schema, model, models } from "mongoose";

export interface Event extends Document {
  _id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  location: string;
  startDateTime: Date;
  endDateTime: Date;
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String, required: true },
  location: { type: String, required: true },
  startDateTime: { type: Date, required: true, default: Date.now },
  endDateTime: { type: Date, required: true, default: Date.now },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
