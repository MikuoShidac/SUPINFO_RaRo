import mongoose from "mongoose";
import { string } from "zod";

const StationSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  OpeningHour: { type: String, required: true },
  ClosingHour: { type: String, required: true },
  Picture: { type: String, required: true },
});

export const StationModel = mongoose.model("Station", StationSchema);

export default StationModel;
