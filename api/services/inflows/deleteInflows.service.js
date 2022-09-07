import InflowsRepository from "../../repositories/inflowsRepository";

class deleteInflowsService{
    constructor(){}

    async deleteInflows(id){
        const repository = new InflowsRepository();
        try{
            const inflow = await repository.delete(id);
            if(inflow[0] === 0){
                return {
                    status: 200,
                    message: "Não foi possível deletar a entrada!"
                }
            }
            
            return{
                status: 200,
                message: "Deletado com sucesso!"
            }
        } catch(e){
            console.log(e);
            return{
                status: 400,
                message: "Não foi possível dleetar a entrada!"
            }
        }
    }
}
 export default deleteInflowsService;