import BusinessRepository from '../../repositories/businessRepository';

class deleteBusinessService {
    constructor(){}

    async deleteBusiness(id){
        this.repository = new BusinessRepository();
        try{
            this.business = await this.repository.delete(id)
            return{
            status: 200,
            message: "Deletado com sucesso!"
            }
        } catch(e){
        console.log(e);
        return { 
            status: 400,
            message: "Não foi possível deletar a empresa!"
            }
        }    
    }
}
    
export default deleteBusinessService;