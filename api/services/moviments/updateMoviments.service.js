import MovimentsRepository from "../../repositories/movimentsRepository";

class updateMovimentsService {
    constructor(){}

    async updateMoviments(id, name, description, value, type, id_bankAccount){
        const obj = {
            name, 
            description, 
            value,
            type,
            id_bankAccount
        }
        const repository = new MovimentsRepository();
        try{
            const moviment = await repository.update(id, obj);
            if(moviment[0] === 0){
                return {
                    status: 200,
                    message: "Não foi possível atualizar a movimentação!"
                }
                
            }
            return {
                status: 200,
                message: "Atualizado com sucesso!"
            }
        } catch(e){
            console.log(e);
            return{
                status: 400,
                message: "Não foi possível atualizar a movimentação"
            }
        }
    }

}

export default updateMovimentsService;