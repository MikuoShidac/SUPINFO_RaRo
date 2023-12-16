import express from "express";
import TicketRepository from "../repositories/TicketRepository.js";
import TrainRepository from "../repositories/TrainRepository.js";
import StationRepository from "../repositories/StationRepository.js";

const router = express.Router();

router.get("/", async (req, res)=>{
    const { name }= req.query;
    const query = name ? { name } : {};
    const tickets = await TicketRepository.getTicket({});
    res.json(tickets);
})

router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const ticket = await TicketRepository.getTicketById(id);
  
      if (!ticket) {
        return res.status(404).send("Ticket not found");
      }
  
      res.json(ticket);
    } catch (e) {
      console.log(e);
      return res.status(500).send("Internal server error");
    }
});

router.post("/", async (req, res) => {
    const idTrain = await req.body.TravelTrain
    const payload = {
      nom : req.body.nom, 
      email : req.user?.email,
      TravelTrain : await TrainRepository.getTrainById(idTrain)
    }; 
    const ticket = await TicketRepository.createTicket(payload);

    res.status(201).json(ticket);
});

router.delete("/:id", async (req, res) => {
    await TicketRepository.deleteTicket(req.params.id);
  
    res.status(204).send();
});


export default router;