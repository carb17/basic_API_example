import express from "express";
import UsersController from "../controllers/users.js";
import { verifyToken } from "../helpers/authentication.js";

const route = express.Router();

route.get("/register", UsersController.registerCtr);
route.post("/login", UsersController.loginCtr);
route.put("/:id", verifyToken, UsersController.updateCtr);

export default route;
