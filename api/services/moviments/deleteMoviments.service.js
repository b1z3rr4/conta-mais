import MovimentsRepository from "../../repositories/movimentsRepository";

class deleteMovimentsService{
    constructor(){}

    async deleteMoviments(id){
        const repository = new MovimentsRepository();
        try{
            const moviment = await repository.delete(id);
            if(moviment[0] === 0){
                return {
                    status: 200,
                    message: "Não foi possível deletar a movimentação!"
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
                message: "Não foi possível dleetar a movimentação!"
            }
        }
    }
}
 export default deleteMovimentsService;