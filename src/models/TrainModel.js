import mongoose from "mongoose";

const TrainSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  Departure: { type: [String], required: true },
  Arrival: { type: String, required: true },
  DepartureHours: { type: Number, required: true },
  difficulte: { type: Number, required: true },
});

export const TrainModel = mongoose.model("Train", TrainSchema);

export default TrainModel;