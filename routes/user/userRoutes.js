import { Router } from "express";
import UserController from '../../api/controllers/UserController.js';
import userValidator from "../../api/middlewares/userValidator.js";
import idValidator from "../../api/middlewares/idValidator.js";
import emailValidator from "../../api/middlewares/emailValidator.js";

const routesUser = Router();

routesUser.get('/:id', /*userValidator.getValidator, idValidator,*/ UserController.getUser);
routesUser.post('/', /*userValidator.postValidator, emailValidator,*/ UserController.postUser);
routesUser.put('/:id', /*userValidator.putValidator, idValidator,*/ UserController.putUser);
routesUser.delete('/:id', /*userValidator.deleteValidator, idValidator,*/ UserController.deleteUser);

export default routesUser;
