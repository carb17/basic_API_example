import ClientsModel from "../models/clients.js";

class ClientsController {
  constructor() {}

  async registerCtr(req, res) {
    try {
      const { dni, name, surname, birth, address, phone_number, email } =
        req.body;
      const clientExist = await ClientsModel.getOneMdl({ dni });
      if (clientExist) {
        return res.status(400).json({ error: "El cliente ya existe." });
      }

      const data = await ClientsModel.createMdl({
        dni,
        name,
        surname,
        birth,
        address,
        phone_number,
        email,
      });

      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error al registrar el cliente." });
    }
  }

  async updateCtr(req, res) {
    try {
      const { id } = req.params;
      let updatedData = { ...req.body };

      const data = await ClientsModel.updateMdl(id, updatedData);
      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  async getOneCtr(req, res) {
    try {
      const { id } = req.params;
      const data = await ClientsModel.getOneMdl({ _id: id });
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getAllCtr(req, res) {
    try {
      const { dni } = req.params;
      const data = await ClientsModel.getAllMdl(dni);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: "Error al obtener los clientes." });
    }
  }
}

export default new ClientsController();
