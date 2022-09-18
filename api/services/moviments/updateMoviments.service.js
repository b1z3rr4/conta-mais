import MovimentsRepository from "../../repositories/movimentsRepository";
import movimentsInCash from "../cashFlow/movimentsInCash.service";

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
        const moviments = new movimentsInCash().define;
        const proceed = await moviments(value, type, id_bankAccount);
        if(proceed){
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
                message: "Movimento não foi atualizado por falta de saldo! Verifique o limite da sua conta"
            }
        }
    }
}

export default updateMovimentsService;