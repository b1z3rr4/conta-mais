import { Router } from "express";
import PublicRoutesApresentation from '../../api/controllers/PublicRoutesApresentationController.js'

const routesApresentation = Router();

routesApresentation.get("/", PublicRoutesApresentation.documentation);

export default routesApresentation;