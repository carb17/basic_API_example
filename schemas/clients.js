import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    dni: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    birth: {
      type: Date,
    },
    address: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("clients", clientSchema);
