import MovimentsController from "../../api/controllers/MovimentsController";
import authValidate from "../../api/middlewares/authValidate";
import { Router } from "express";

const routesMoviments = Router();

routesMoviments.get("/moviments", authValidate, MovimentsController.getMoviment);
routesMoviments.post("/moviments", authValidate, MovimentsController.postMoviment);
routesMoviments.put("/moviments", authValidate, MovimentsController.putMoviment);
routesMoviments.delete("/moviments", authValidate, MovimentsController.deleteMoviment);

export default routesMoviments;

