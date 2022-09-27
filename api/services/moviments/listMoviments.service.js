import MovimentsRepository from "../../repositories/movimentsRepository";
import SearchById from '../../repositories/searchByIdTokenRepository.js';

class listMovimentsService {
    constructor(){}

    async listMoviments(idToken, id){
        const repository = new MovimentsRepository();
        const repositorySearch = new SearchById();
        if(id){
            try{
                const moviment = await repository.get(id);
                return {
                    status: 200,
                    message: moviment
                }
            } catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível buscar as movimentações!"
                }
            }
        } else{
            try{
                const moviments = await repositorySearch.searchMovimentsByBankUserId(idToken);
                return {
                    status: 200,
                    message: moviments
                }
            } catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível buscar as movimentações !"
                }
            }
        }
    }
}


export default listMovimentsService;