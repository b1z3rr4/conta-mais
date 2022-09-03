import AuthController from '../../api/controllers/AuthController.js';
import { Router } from "express";

const routesAuth = Router();

routesAuth.get('/login', AuthController.login);
routesAuth.get('/logout', AuthController.logout);

export default routesAuth;