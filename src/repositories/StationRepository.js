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
      return await StationModel.create(payload);
    }
  
    async getStationById(id) {
      return await StationModel.findById(id);
    }
  
    async updateStation(id, payload) {
      const station = await StationModel.findByIdAndUpdate(
        {
          _id: id,
        },
        payload
      );
  
      return station;
    }
  
    async deleteStation(id) {
      await StationModel.deleteOne({ _id: id });
    }
  }
  
  export default new StationRepository();