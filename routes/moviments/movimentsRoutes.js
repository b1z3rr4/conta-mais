import MovimentsController from "../../api/controllers/MovimentsController";
import authValidate from "../../api/middlewares/authValidate";
import { Router } from "express";

const routesMoviments = Router();

routesMoviments.get("/moviments", MovimentsController.getMoviment);
routesMoviments.post("/moviments", MovimentsController.postMoviment);
routesMoviments.put("/moviments", MovimentsController.putMoviment);
routesMoviments.delete("/moviments", MovimentsController.deleteMoviment);

export default routesMoviments;

