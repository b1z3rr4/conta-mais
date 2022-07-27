import { Router } from "express";
import UserController from '../../src/api/controllers/UserController.js';
import userValidator from "../../src/api/middlewares/userValidator.js";
import idValidator from "../../src/api/middlewares/idValidator.js";
import emailValidator from "../../src/api/middlewares/emailValidator.js";

const routesUser = Router();

routesUser.get('/:id', userValidator.getValidator, idValidator, UserController.getUser);
routesUser.post('/', userValidator.postValidator, emailValidator, UserController.postUser);
routesUser.put('/:id', userValidator.putValidator, idValidator, UserController.putUser);
routesUser.delete('/:id', userValidator.deleteValidator, idValidator, UserController.deleteUser);

export default routesUser;
