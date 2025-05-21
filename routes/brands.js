import express from "express";
import BrandsController from "../controllers/brands.js";

const route = express.Router();

route.post("/brand_register", BrandsController.registerCtr);
route.put("/:id", BrandsController.updateCtr);
route.get("/brands", BrandsController.getAllCtr);
route.get("/:id", BrandsController.getOneCtr);

export default route;
