import { Router } from "express";
import UserController from '../../src/api/controllers/UserController.js';

const routesUser = Router();

routesUser.get('/', UserController.getUser);
routesUser.post('/', UserController.postUser);
//put
//delete

export default routesUser;
