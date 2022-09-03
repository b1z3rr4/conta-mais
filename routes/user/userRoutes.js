import { Router } from "express";
import UserController from '../../api/controllers/UserController.js';
import userValidator from "../../api/middlewares/userValidator.js";

const routesUser = Router();

routesUser.get('/', userValidator.getValidator, UserController.getUser);
routesUser.post('/', userValidator.postValidator, UserController.postUser);
routesUser.put('/:id', userValidator.putValidator, UserController.putUser);
routesUser.delete('/:id', userValidator.deleteValidator, UserController.deleteUser);

export default routesUser;
