import MovimentsRepository from "../../repositories/movimentsRepository";
import generatorId from "../../../utils/generatorId";

class createMovimentsService {
    constructor(){}

    async createMoviments(name, description, value, type, id_bankAccount){
        const id = generatorId()
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
    }
}

export default createMovimentsService;