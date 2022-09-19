import cashFlowRepository from "../../repositories/cashFlowRepository";

class listCashFlowService {
    constructor(){}

    async listById(idBusiness){
        this.repository =  new cashFlowRepository();
        this.cashFlow = await this.repository.get(idBusiness);
        return this.cashFlow.cash_flow;
    }
}

export default listCashFlowService;