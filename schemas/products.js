import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brands",
      required: true,
    },
    model: {
      type: String,
    },
    price: {
      type: Number,
      min: 0,
    },
    state: {
      type: String,
      enum: ["available", "not available", "discontinued"],
      default: "available",
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);
