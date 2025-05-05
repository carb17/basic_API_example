import mongoose from "mongoose";
import User from "../schemas/users.js";

class UsersModel {
  async createMdl(user) {
    return await User.create(user);
  }

  async getOneMdl(filter) {
    return await User.findOne(filter);
  }

  async getAllMdl() {
    return await User.find();
  }

  async updateMdl(id, user) {
    return await User.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      user,
      { new: true }
    );
  }
}

export default new UsersModel();
