import InflowsRepository from "../../repositories/inflowsRepository";

class updateInflowsService {
    constructor(){}

    async updateInflows(id, name, description, value){
        const obj = {
            name, 
            description, 
            value
        }
        const repository = new InflowsRepository();
        try{
            const inflow = await repository.update(id, obj);
            if(inflow[0] === 0){
                return {
                    status: 200,
                    message: "Não foi possível atualizar a entrada!"
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
                message: "Não foi possível atualizar a entrada"
            }
        }
    }

}

export default updateInflowsService;