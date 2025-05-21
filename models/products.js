import mongoose from "mongoose";
import Product from "../schemas/products.js";

class ProductsModel {
  async createMdl(product) {
    return await Product.create(product);
  }

  async getOneMdl(filter) {
    return await Product.findOne(filter);
  }

  async getAllMdl() {
    return await Product.find();
  }

  async updateMdl(id, product) {
    return await Product.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      product,
      { new: true }
    );
  }
}

export default new ProductsModel();
