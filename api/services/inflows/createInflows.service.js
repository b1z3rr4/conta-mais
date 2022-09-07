import InflowsRepository from "../../repositories/inflowsRepository";
import generatorId from "../../../utils/generatorId";

class createInflowsService {
    constructor(){}

    async createInflows(name, description, value){
        const id = generatorId()
        const repository = new InflowsRepository();
        try{
            const inflow = await repository.create(id, name, description, value);
            return{
                status: 200,
                message: inflow
            }
        } catch(e){
            console.log(e);
            return{
                status: 400,
                message: "Não foi possível criar a entrada!"
            }
        }
    }
}

export default createInflowsService;