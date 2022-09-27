import createBusinessService from "../services/business/createBusiness.service";
import listBusinessService from "../services/business/listBusiness.service";
import deleteBusinessService from "../services/business/deleteBusiness.service";
import updateBusinessService from "../services/business/updateBusiness.service";
import decodeToken from '../services/auth/decodeToken';

class BusinessController {
  constructor() {}

  async createBusiness(req, res) {
    const { cnpj, company, user_id } = req.body;
    const service = new createBusinessService();
    const business = await service.createBusiness(cnpj, company, user_id);
    res.status(business.status).json({
      message: business.message,
    });
  }

  async listBusiness(req, res) {
    const { id } = req.params;
    const authorization = req.headers['authorization'];
    const token = authorization.split(' ')[1]
    const data = await decodeToken(token)
    const idToken = data.id
    const service = new listBusinessService();
    const business = await service.listBusiness(idToken, id);
    res.status(business.status).json({
      message: business.message,
    });
  }

  async updateBusiness(req, res) {
    const { id } = req.params;
    const { cnpj, company } = req.body;
    const service = new updateBusinessService();
    const business = await service.updateBusiness(
      id,
      cnpj,
      company
    );
    res.status(business.status).json({
      message: business.message,
    });
  }

  async deleteBusiness(req, res) {
    const { id } = req.params;
    const service = new deleteBusinessService();
    const business = await service.deleteBusiness(id);
    res.status(business.status).json({
      message: business.message,
    });
  }
}

export default new BusinessController();
