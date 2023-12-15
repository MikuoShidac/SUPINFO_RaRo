import express from "express";
import StationRepository from "../repositories/StationRepository.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const { muscle } = req.query;
  
    const query = muscle ? { muscle } : {};
    const stations = await StationRepository.getStations({});
  
    res.json(stations);
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const station = await StationRepository.getStationById(id);
  
      if (!station) {
        return res.status(404).send("Station not found");
      }
  
      res.json(station);
    } catch (e) {
      console.log(e);
      return res.status(500).send("Internal server error");
    }
  });
  
  router.post("/", async (req, res) => {
    const station = await StationRepository.createStation(req.body);
  
    res.status(201).json(station);
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const station = await StationRepository.updateStation(id, req.body);
      res.json(req.body);
    } catch (e) {
      console.log(e);
      return res.status(500).send("Internal server error");
    }
  });
  
  router.delete("/:id", async (req, res) => {
    await StationRepository.deleteStation(req.params.id);
  
    res.status(204).send();
  });



export default router;