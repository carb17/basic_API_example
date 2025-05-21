import mongoose from "mongoose";
import Client from "../schemas/clients.js";

class ClientsModel {
  async createMdl(client) {
    return await Client.create(client);
  }

  async getOneMdl(filter) {
    return await Client.findOne(filter);
  }

  async getAllMdl() {
    return await Client.find();
  }

  async updateMdl(id, client) {
    return await Client.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      client,
      { new: true }
    );
  }
}

export default new ClientsModel();
