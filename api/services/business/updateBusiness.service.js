import BusinessRepository from "../../repositories/businessRepository";

class updateBusinessService {
    constructor(){}

    async updateBusiness(id, cnpj, company, bank_stock){
        this.repository = new BusinessRepository();
        const obj = {
            cnpj,
            company,
            bank_stock
        }
        try{
            this.business = await this.repository.update(id, obj);
            if(this.business[0] === 1){
            return {
                status: 200,
                message: 'Usuário atualizado!'
            }
        }
           return {
                status: 400,
                message: "Não foi possível atualizar a empresa."
           }
            } catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível atualizar a empresa."
                }
             }
        }
   }

export default updateBusinessService;