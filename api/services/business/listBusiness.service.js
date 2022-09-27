import BusinessRepository from '../../repositories/businessRepository.js';
import SearchById from '../../repositories/searchByIdTokenRepository.js';

class listBusinessService {
    constructor(){}

    async listBusiness(idToken, id){
        this.repositoryBusiness = new BusinessRepository();
        this.repositorySearch = new SearchById();
        if(id){
            try{
                this.business = await this.repositoryBusiness.get(id);
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
                this.business = await this.repositorySearch.searchBusinessByUserId(idToken);
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