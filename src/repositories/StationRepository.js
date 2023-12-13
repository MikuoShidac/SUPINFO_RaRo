import { StationModel } from "../models/StationModel.js";

class StationRepository {
    async getStations({ name }) {
      const query = {};
  
      if (name) {
        query.name = { $elemMatch: { $eq: name } };
      }
      return await StationModel.find(query);
    }
  
    async createStation(payload) {
      const Station = await StationModel.create(payload);
  
      return Station;
    }
  
    async getStationById(id) {
      return await StationModel.findById(id);
    }
  
    async updateStation(id, payload) {
      const newStation = await StationModel.findOneAndUpdate(
        {
          _id: id,
        },
        payload
      );
  
      return newStation;
    }
  
    async deleteStation(id) {
      await StationModel.deleteOne({ _id: id });
    }
  }
  
  export default new StationRepository();