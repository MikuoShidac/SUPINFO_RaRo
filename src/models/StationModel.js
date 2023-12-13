import mongoose from "mongoose";

const StationSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  OpeningHours: { type: [String], required: true },
  ClosingHours: { type: Number, required: true },
  Picture: { type: Number, required: true },
});

export const StationModel = mongoose.model("Station", StationSchema);

export default StationModel;
