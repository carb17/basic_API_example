import ProductsModel from "../models/products.js";

class ProductsController {
  constructor() {}

  async registerCtr(req, res) {
    try {
      const { code, name, brand, model, price, state, description } = req.body;
      const productExist = await ProductsModel.getOneMdl({ code });
      if (productExist) {
        return res
          .status(400)
          .json({ error: "Este código se encuentra en uso." });
      }

      const data = await ProductsModel.createMdl({
        code,
        name,
        brand,
        model,
        price,
        state,
        description,
      });

      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error al registrar el producto." });
    }
  }

  async updateCtr(req, res) {
    try {
      const { id } = req.params;
      let updatedData = { ...req.body };

      const data = await ProductsModel.updateMdl(id, updatedData);
      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  async getOneCtr(req, res) {
    try {
      const { id } = req.params;
      const data = await ProductsModel.getOneMdl({ _id: id });
      res.status(201).json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async getAllCtr(req, res) {
    try {
      const { name } = req.params;
      const data = await ProductsModel.getAllMdl(name);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: "Error al obtener los productos." });
    }
  }
}

export default new ProductsController();
