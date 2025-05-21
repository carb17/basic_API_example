import mongoose from "mongoose";
import Brand from "../schemas/brands.js";

class BrandsModel {
  async createMdl(brand) {
    return await Brand.create(brand);
  }

  async getOneMdl(filter) {
    return await Brand.findOne(filter);
  }

  async getAllMdl() {
    return await Brand.find();
  }

  async updateMdl(id, brand) {
    return await Brand.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      brand,
      { new: true }
    );
  }
}

export default new BrandsModel();
