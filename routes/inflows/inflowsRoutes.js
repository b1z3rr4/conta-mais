import InflowsController from "../../api/controllers/InflowsController";
import authValidate from "../../api/middlewares/authValidate";
import { Router } from "express";

const routesInflows = Router();

routesInflows.get("/inflows", InflowsController.getInflow);
routesInflows.post("/inflows", InflowsController.getInflow);
routesInflows.put("/inflows", InflowsController.getInflow);
routesInflows.delete("/inflows", InflowsController.getInflow);

