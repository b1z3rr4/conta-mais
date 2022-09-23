import MovimentsController from "../../api/controllers/MovimentsController";
import authValidator from "../../api/middlewares/authValidator";
import { Router } from "express";
import movimentsValidator from "../../api/middlewares/movimentsValidator";

const routesMoviments = Router();

routesMoviments.get("/moviments", authValidator, movimentsValidator.getValidator, MovimentsController.getMoviment);
routesMoviments.post("/moviments", authValidator, movimentsValidator.postValidator, MovimentsController.postMoviment);
routesMoviments.put("/moviments", authValidator, movimentsValidator.putValidator, MovimentsController.putMoviment);
routesMoviments.delete("/moviments", authValidator, movimentsValidator.deleteValidator, MovimentsController.deleteMoviment);

export default routesMoviments;