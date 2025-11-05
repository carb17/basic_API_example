import express from 'express';

import UsersController from '../controllers/users.js';

import { verifyToken } from '../helpers/authentication.js';

const route = express.Router();

route.post('/register', UsersController.registerCtr);

route.post('/login', UsersController.loginCtr);

route.put('/:id', verifyToken, UsersController.updateCtr);

route.get('/users', UsersController.getAllCtr);

route.get('/:id', UsersController.getOneCtr);

export default route;
