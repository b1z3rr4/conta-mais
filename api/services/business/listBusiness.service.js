import BusinessRepository from '../../repositories/businessRepository';

class listBusinessService {
    constructor(){}

    async listBusiness(id){
        this.repository = new BusinessRepository();
        if(id){
            try{
                this.business = await this.repository.get(id);
                return {
                    status: 200,
                    message: this.business
                }
            } catch(e){
                console.log(e);
                return {
                    status: 404,
                    message: "Nada encontrado!"
                }
            }
        } else {
            try{
                this.business = await this.repository.get();
                return {
                    status: 200,
                    message: this.business
                }
            } catch(e){
                console.log(e);
                return {
                    status: 404,
                    message: "Nada encontrado!"
                }
            }
        }
    }
}

export default listBusinessService;