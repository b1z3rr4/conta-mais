import { Router } from "express";
import BusinessController from '../../api/controllers/BusinessController.js';
import authValidator from "../../api/middlewares/authValidator.js";
import businessValidator from "../../api/middlewares/businessValidator.js";

const routesBusiness = Router();

routesBusiness.get('/business', authValidator, businessValidator.getValidator, BusinessController.listBusiness);
routesBusiness.post('/business', authValidator, businessValidator.postValidator, BusinessController.createBusiness);
routesBusiness.put('/business/:id', authValidator, businessValidator.putValidator, BusinessController.updateBusiness);
routesBusiness.delete('/business/:id', authValidator, businessValidator.deleteValidator, BusinessController.deleteBusiness);

export default routesBusiness;