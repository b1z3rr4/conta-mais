import BusinessRepository from "../../repositories/businessRepository";
import generatorId from "../../../utils/generatorId";

class createBusinessService {
    constructor(){}

    async createBusiness(cnpj, company, bank_stock){
        const id = generatorId();
        this.repository = new BusinessRepository();
        try{
            this.business = await this.repository.create(id, cnpj, company, bank_stock);
            return {
                status: 21,
                message: this.business,
            }
        }   catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível cadastrar a nova empresa."
                }
             }
        }
        
    }

export default createBusinessService;