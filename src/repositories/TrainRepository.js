import { TrainModel } from "../models/TrainModel.js";

class TrainRepository {
    async getTrain({ name }) {
      const query = {};
  
      if (name) {
        query.name = { $elemMatch: { $eq: name } };
      }
      return await TrainModel.find(query);
    }
  
    async createTrain(payload) {
      const chuchu = await TrainModel.create(payload);
  
      return chuchu;
    }
  
    async getTrainById(id) {
      return await TrainModel.findById(id);
    }
  
    async updateTrain(id, payload) {
      const newTrain = await TrainModel.findOneAndUpdate(
        {
          _id: id,
        },
        payload
      );
  
      return newTrain;
    }
  
    async deleteTrain(id) {
      await TrainModel.deleteOne({ _id: id });
    }
  }
  
  export default new TrainRepository();
  