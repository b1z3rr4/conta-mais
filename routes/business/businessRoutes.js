import { Router } from "express";
import BusinessController from '../../api/controllers/BusinessController.js';
import authValidator from "../../api/middlewares/authValidator.js";
import businessValidator from "../../api/middlewares/businessValidator.js";

const routesBusiness = Router();

routesBusiness.get('/business/list', authValidator, businessValidator.getValidator, BusinessController.listBusiness);
routesBusiness.post('/business', authValidator, businessValidator.postValidator, BusinessController.createBusiness);
routesBusiness.put('/business/update/:id', authValidator, businessValidator.putValidator, BusinessController.updateBusiness);
routesBusiness.delete('/business/delete/:id', authValidator, businessValidator.deleteValidator, BusinessController.deleteBusiness);

export default routesBusiness;