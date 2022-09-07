import MovimentsRepository from "../../repositories/movimentsRepository";
import generatorId from "../../../utils/generatorId";

class createMovimentsService {
    constructor(){}

    async createMoviments(name, description, value, type){
        const id = generatorId()
        const repository = new MovimentsRepository();
        try{
            const moviment = await repository.create(id, name, description, value, type);
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