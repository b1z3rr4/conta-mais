import InflowsController from "../../api/controllers/InflowsController";
import authValidate from "../../api/middlewares/authValidate";
import { Router } from "express";

const routesInflows = Router();

routesInflows.get("/inflows", InflowsController.getInflow);
routesInflows.post("/inflows", InflowsController.postInflow);
routesInflows.put("/inflows", InflowsController.putInflow);
routesInflows.delete("/inflows", InflowsController.deleteInflow);

export default routesInflows;

