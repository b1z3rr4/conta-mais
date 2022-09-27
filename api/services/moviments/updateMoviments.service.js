import MovimentsRepository from "../../repositories/movimentsRepository";
import movimentsInCash from "../cashFlow/movimentsInCash.service";

class updateMovimentsService {
    constructor(){}

    async updateMoviments(id, name, description, value, type){
        const obj = {
            name,
            description,
            value,
            type
        }
        const repository = new MovimentsRepository();
        const moviment = new movimentsInCash();
        const result = await moviment.updateCashInFlow(id, {
            name: name,
            description: description,
            value: value,
            type: type
        })
        if(result){
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
        } else {
            return {
                status: 400,
                message: "Não foi possível atualizar a movimentação."
            }
        }
    }
}

export default updateMovimentsService;