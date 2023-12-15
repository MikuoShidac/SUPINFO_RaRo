import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true },
  TrainName: { type: String, required: true },
  DepartureHours: { type: String, required: true },
  DepartureStation: { type: Object, required: true },
  ArrivalStation: { type: Object, required: true },
});

export const TicketModel = mongoose.model("Ticket", TicketSchema);

export default TicketModel;