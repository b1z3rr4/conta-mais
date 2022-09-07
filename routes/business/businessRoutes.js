import { Router } from "express";
import BusinessController from "../../api/controllers/BusinessController.js";

const routesBusiness = Router();

routesBusiness.get("/business", BusinessController.listBusiness);
routesBusiness.post("/business", BusinessController.createBusiness);
routesBusiness.put("/business/:id", BusinessController.updateBusiness);
routesBusiness.delete("/business/:id", BusinessController.deleteBusiness);

export default routesBusiness;
