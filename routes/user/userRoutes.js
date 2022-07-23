import { Router } from "express";
import UserController from '../../src/api/controllers/UserController.js';

// put
//delete
const routesUser = Router();

routesUser.get('/', UserController.getUser);
routesUser.post('/', UserController.postUser);
routesUser.put('/:id', UserController.putUser);


export default routesUser;
