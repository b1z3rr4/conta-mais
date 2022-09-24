import { Router } from "express";
import UserController from '../../api/controllers/UserController.js';
import userValidator from "../../api/middlewares/userValidator.js";
import authValidator from "../../api/middlewares/authValidator";

const routesUser = Router();

routesUser.get('/user/list', userValidator.getValidator, UserController.getUser);
routesUser.post('/user', userValidator.postValidator, UserController.postUser);
routesUser.put('/user/update/:id', authValidator, userValidator.putValidator, UserController.putUser);
routesUser.delete('/user/delete/:id', authValidator, userValidator.deleteValidator, UserController.deleteUser);

export default routesUser;