import MovimentsRepository from "../../repositories/movimentsRepository";
import generatorId from "../../../utils/generatorId";
import movimentsInCash from "../cashFlow/movimentsInCash.service";

class createMovimentsService {
    constructor(){}

    async createMoviments(name, description, value, type, id_bankAccount){
        const id = generatorId();
        const moviments = new movimentsInCash();
        const proceed = await moviments.define(value, type, id_bankAccount);
        console.log(proceed)
        if(proceed){
            const repository = new MovimentsRepository();
            try{
                const moviment = await repository.create(id, name, description, value, type, id_bankAccount);
                return{
                    status: 200,
                    message: moviment
                }
            } catch(e){
                console.log(e);
                return{
                    status: 400,
                    message: "Não foi possível criar a movimentação!"
                }
            }
        } else {
            return {
                status: 400,
                message: "Movimento não foi criado por falta de saldo! Verifique o limite da sua conta"
            }
        }
    }
}

export default createMovimentsService;