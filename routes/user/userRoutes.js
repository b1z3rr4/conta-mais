import { Router } from "express";
import UserController from '../../api/controllers/UserController.js';
import userValidator from "../../api/middlewares/userValidator.js";

const routesUser = Router();

routesUser.get('/user/list', userValidator.getValidator, UserController.getUser);
routesUser.post('/user', userValidator.postValidator, UserController.postUser);
routesUser.put('/updateUser/:id', userValidator.putValidator, UserController.putUser);
routesUser.delete('/deleteUser/:id', userValidator.deleteValidator, UserController.deleteUser);

export default routesUser;
