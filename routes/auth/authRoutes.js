import AuthController from '../../api/controllers/AuthController.js';
import { Router } from "express";

const routesAuth = Router();

routesAuth.post('/auth/token', AuthController.auth);

export default routesAuth;