import cashFlowRepository from "../../repositories/cashFlowRepository";

class updateCashFlowService {
    constructor(){}

    async updateById(idBusiness, newValue){
        this.repository =  new cashFlowRepository();
        this.cashFlow = await this.repository.update(idBusiness, newValue);
        return this.cashFlow;
    }
}

export default updateCashFlowService;