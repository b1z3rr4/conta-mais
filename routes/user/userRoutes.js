import { Router } from "express";
import UserController from '../../src/api/controllers/UserController.js';


const routesUser = Router();

routesUser.get('/', UserController.getUser);
routesUser.post('/', UserController.postUser);
//put
routesUser.delete('/:id', UserController.deleteUser);

export default routesUser;
