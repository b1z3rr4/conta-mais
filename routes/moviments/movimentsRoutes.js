import MovimentsController from "../../api/controllers/MovimentsController";
import authValidate from "../../api/middlewares/authValidate";
import { Router } from "express";
import movimentsValidator from "../../api/middlewares/movimentsValidator";

const routesMoviments = Router();

routesMoviments.get("/moviments", authValidate, movimentsValidator.getValidator, MovimentsController.getMoviment);
routesMoviments.post("/moviments", authValidate, movimentsValidator.postValidator, MovimentsController.postMoviment);
routesMoviments.put("/moviments", authValidate, movimentsValidator.putValidator, MovimentsController.putMoviment);
routesMoviments.delete("/moviments", authValidate, movimentsValidator.deleteValidator, MovimentsController.deleteMoviment);

export default routesMoviments;

