import mongoose from "mongoose";

const TrainSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  DepartureStation: { type: [String], required: true },
  ArrivalStation: { type: String, required: true },
  DepartureHours: { type: String, required: true },
});

export const TrainModel = mongoose.model("Train", TrainSchema);

export default TrainModel;