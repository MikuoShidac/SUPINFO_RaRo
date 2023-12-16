import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true },
  TravelTrain: { type: Object, required: true },
});

export const TicketModel = mongoose.model("Ticket", TicketSchema);

export default TicketModel;