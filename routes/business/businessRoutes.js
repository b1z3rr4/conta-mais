import { Router } from "express";
import BusinessController from '../../api/controllers/BusinessController.js';
import authValidate from "../../api/middlewares/authValidate.js";
import businessValidator from "../../api/middlewares/businessValidator.js";

const routesBusiness = Router();

routesBusiness.get('/business/list', authValidate, businessValidator.getValidator, BusinessController.listBusiness);
routesBusiness.post('/business', authValidate, businessValidator.postValidator, BusinessController.createBusiness);
routesBusiness.put('/updateBusiness/:id', authValidate, businessValidator.putValidator, BusinessController.updateBusiness);
routesBusiness.delete('/deleteBusiness/:id', authValidate, businessValidator.deleteValidator, BusinessController.deleteBusiness);

export default routesBusiness;
