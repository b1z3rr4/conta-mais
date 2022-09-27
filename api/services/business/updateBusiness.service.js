import BusinessRepository from "../../repositories/businessRepository";

class updateBusinessService {
  constructor() {}

  async updateBusiness(id, cnpj, company, user_id) {
    this.repository = new BusinessRepository();
    const obj = {
      cnpj,
      company,
      user_id
    };
    try {
      this.business = await this.repository.update(id, obj);
      if (this.business === undefined) {
        return {
          status: 200,
          message: "Empresa atualizada!",
        };
      }
      return {
        status: 400,
        message: "Não foi possível atualizar a empresa.",
      };
    } catch (e) {
      console.log(e);
      return {
        status: 400,
        message: "Não foi possível atualizar a empresa.",
      };
    }
  }
}

export default updateBusinessService;
