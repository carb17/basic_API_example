import UsersModel from '../models/users.js';

import bcrypt from 'bcryptjs';

import { generateToken } from '../helpers/authentication.js';

class UsersController {
  constructor() {}

  async registerCtr(req, res) {
    try {
      const { email, password, role } = req.body;
      const userExist = await UsersModel.getOneMdl({ email });
      if (userExist) {
        return res.status(400).json({ error: 'The user ALREADY EXISTS' });
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
      res.status(500).json({ message: 'ERROR registering user' });
    }
  }

  async loginCtr(req, res) {
    const { email, password } = req.body;

    const userExist = await UsersModel.getOneMdl({ email });
    if (!userExist) {
      return res.status(400).json({ error: 'The user DOES NOT EXIST' });
    }

    const validKey = await bcrypt.compare(password, userExist.password);
    if (!validKey) {
      return res.status(400).json({ error: 'The password is INCORRECT' });
    }

    const token = generateToken(email);

    res.status(200).json({ msg: 'AUTHENTICATED user', token });
  }

  async updateCtr(req, res) {
    try {
      const { id } = req.params;
      let updatedData = { ...req.body };

      if (updatedData.password) {
        updatedData.password = await bcrypt.hash(updatedData.password, 10);
      }
      const data = await UsersModel.updateMdl(id, updatedData);
      res.status(201).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  async getOneCtr(req, res) {
    try {
      const { id } = req.params;
      const data = await UsersModel.getOneMdl({ _id: id });
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
      res.status(500).json({ message: 'ERROR retrieving users' });
    }
  }
}

export default new UsersController();
