import mongoose from "mongoose"
import { AccommodationInterface } from "../users/types"
const { Schema, model } = mongoose

const accommodationSchema = new Schema<AccommodationInterface>(
  {
    host: { type: Schema.Types.ObjectId, ref: "Users" },
    name: { type: String, required: true },
    maxGuests: { type: Number, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true }
  },
  {
    timestamps: true
  }
)
export default model("Accommodation", accommodationSchema)
