import BrandsModel from "../models/brands.js";

class BrandsController {
  constructor() {}

  async registerCtr(req, res) {
    try {
      const { name } = req.body;
      const brandExist = await BrandsModel.getOneMdl({ name });
      if (brandExist) {
        return res.status(400).json({ error: "Esta marca ya existe." });
      }

      const data = await BrandsModel.createMdl({
        name,
      });

      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error al registrar la marca." });
    }
  }

  async updateCtr(req, res) {
    try {
      const { id } = req.params;
      let updatedData = { ...req.body };

      const data = await BrandsModel.updateMdl(id, updatedData);
      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  async getOneCtr(req, res) {
    try {
      const { id } = req.params;
      const data = await BrandsModel.getOneMdl({ _id: id });
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getAllCtr(req, res) {
    try {
      const { name } = req.params;
      const data = await BrandsModel.getAllMdl(name);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: "Error al obtener las marcas." });
    }
  }
}

export default new BrandsController();
