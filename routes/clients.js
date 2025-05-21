import express from "express";
import ClientsController from "../controllers/clients.js";

const route = express.Router();

route.post("/client_register", ClientsController.registerCtr);
route.put("/:id", ClientsController.updateCtr);
route.get("/clients", ClientsController.getAllCtr);
route.get("/:id", ClientsController.getOneCtr);

export default route;
