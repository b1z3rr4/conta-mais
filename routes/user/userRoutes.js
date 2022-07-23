import { Router } from "express";
import UserController from '../../src/api/controllers/UserController.js';

const routesUser = Router();

routesUser.get('/:id', UserController.getUser);
routesUser.post('/', UserController.postUser);
routesUser.put('/:id', UserController.putUser);
routesUser.delete('/:id', UserController.deleteUser);

export default routesUser;
