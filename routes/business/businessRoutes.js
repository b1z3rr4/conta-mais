import { Router } from "express";
import BusinessController from '../../api/controllers/BusinessController.js';
import authValidate from "../../api/middlewares/authValidate.js";

const routesBusiness = Router();

routesBusiness.get('/business', authValidate, BusinessController.listBusiness);
routesBusiness.post('/business', authValidate, BusinessController.createBusiness);
routesBusiness.put('/business/:id', authValidate, BusinessController.updateBusiness);
routesBusiness.delete('/business/:id', authValidate, BusinessController.deleteBusiness);

export default routesBusiness;
