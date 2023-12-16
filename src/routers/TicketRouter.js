import express from "express";
import TicketRepository from "../repositories/TicketRepository.js";
import UserRepository from "../repositories/UserRepository.js";
import TrainRepository from "../repositories/TrainRepository.js";
import StationRepository from "../repositories/StationRepository.js";

const router = express.Router();

router.get("/", async (req, res)=>{
    const { name }= req.query;
    const query = name ? { name } : {};
    const tickets = await TicketRepository.getTrain({});
    res.json(tickets);
})

router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const ticket = await TicketRepository.getTrainById(id);
  
      if (!ticket) {
        return res.status(404).send("Train not found");
      }
  
      res.json(ticket);
    } catch (e) {
      console.log(e);
      return res.status(500).send("Internal server error");
    }
});

/*router.post("/", async (req, res) => {
    const idStart = await req.body.DepartureStation;
    const idArrival = await req.body.ArrivalStation;
    const payload = {
      nom : req.body.nom, 
      DepartureHours: req.body.DepartureHours,
      DepartureStation: await StationRepository.getStationById(idStart),
      ArrivalStation: await StationRepository.getStationById(idArrival)
    }; 
    const train = await TrainRepository.createTrain(payload);

    res.status(201).json(train);
});

router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const idStart = await req.body.DepartureStation;
      const idArrival = await req.body.ArrivalStation;
      const payload = {
      nom : req.body.nom, 
      DepartureHours: req.body.DepartureHours,
      DepartureStation: await StationRepository.getStationById(idStart),
      ArrivalStation: await StationRepository.getStationById(idArrival)
      }; 
      const train = await TrainRepository.updateTrain(id, payload);
      res.json(payload);
    } catch (e) {
      console.log(e);
      return res.status(500).send("Internal server error");
    }
});*/

router.delete("/:id", async (req, res) => {
    await TicketRepository.deleteTicket(req.params.id);
  
    res.status(204).send();
});


export default router;