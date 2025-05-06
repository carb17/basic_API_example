import UsersModel from "../models/users.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../helpers/authentication.js";

class UsersController {
  constructor() {}

  async registerCtr(req, res) {
    try {
      const { email, password, role } = req.body;
      const userExist = await UsersModel.getOneMdl({ email });
      if (userExist) {
        return res.status(400).json({ error: "El usuario ya existe." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const data = await UsersModel.createMdl({
        email,
        password: hashedPassword,
        role,
      });

      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error al registrar el usuario." });
    }
  }

  async loginCtr(req, res) {
    const { email, password } = req.body;

    const userExist = await UsersModel.getOneMdl({ email });
    if (!userExist) {
      return res.status(400).json({ error: "El usuario no existe." });
    }

    const validKey = await bcrypt.compare(password, userExist.password);
    if (!validKey) {
      return res.status(400).json({ error: "La constraseña no es correcta." });
    }

    const token = generateToken(email);

    res.status(200).json({ msg: "Usuario autenticado.", token });
  }

  async updateCtr(req, res) {
    try {
      const { id } = req.params;
      let updatedData = { ...req.body };

      if (updatedData.password) {
        updatedData.password = await bcrypt.hash(updatedData.password, 10);
      }
      const data = await UsersModel.updateMdl(id, req.body);
      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  async getOneCtr(req, res) {
    try {
      const { email } = req.params;
      const data = await UsersModel.getOneMdl(email);
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getAllCtr(req, res) {
    try {
      const { email } = req.params;
      const data = await UsersModel.getAllMdl(email);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: "Error al obtener los usuarios." });
    }
  }
}

export default new UsersController();
