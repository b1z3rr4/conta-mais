import MovimentsController from "../../api/controllers/MovimentsController";
import authValidator from "../../api/middlewares/authValidator";
import { Router } from "express";
import movimentsValidator from "../../api/middlewares/movimentsValidator";

const routesMoviments = Router();

routesMoviments.get("/moviments/list", authValidator, movimentsValidator.getValidator, MovimentsController.getMoviment);
routesMoviments.post("/moviments", authValidator, movimentsValidator.postValidator, MovimentsController.postMoviment);
routesMoviments.put("/moviments/update/:id", authValidator, movimentsValidator.putValidator, MovimentsController.putMoviment);
routesMoviments.delete("/moviments/delete/:id", authValidator, movimentsValidator.deleteValidator, MovimentsController.deleteMoviment);

export default routesMoviments;