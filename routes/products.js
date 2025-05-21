import express from "express";
import ProductsController from "../controllers/products.js";

const route = express.Router();

route.post("/product_register", ProductsController.registerCtr);
route.put("/:id", ProductsController.updateCtr);
route.get("/products", ProductsController.getAllCtr);
route.get("/:id", ProductsController.getOneCtr);

export default route;
