import { TrainModel } from "../models/TrainModel.js";
import StationRepository from "./StationRepository.js";
import { UserModel } from "../models/UserModel.js";
import Station from "../models/StationModel.js";
import { TicketModel } from "../models/TicketModel.js";


class TicketRepository {
    async getTicket({ name }) {
      const query = {};
  
      if (name) {
        query.name = { $elemMatch: { $eq: name } };
      }
      return await TicketModel.find(query);
    }
  
    async createTicket(payload) {
      const ticket = await TicketModel.create(payload);
  
      return ticket;
    }
  
    async getTrainById(id) {
      return await TicketModel.findById(id);
    }
  
    //je ne sais pas s'il y a vraiment besoin de l'option update ticket, c'est souvent pas possible irl pour un usager
    async updateTicket(id, payload) {
      const newTicket = await TicketModel.findOneAndUpdate(
        {
          _id: id,
        },
        payload
      );
  
      return newTicket;
    }
  
    async deleteTicket(id) {
      await TicketModel.deleteOne({ _id: id });
    }
  }
  
  export default new TicketRepository();