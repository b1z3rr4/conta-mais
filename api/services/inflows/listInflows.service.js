import InflowsRepository from "../../repositories/inflowsRepository";

class listInflowsService {
    constructor(){}

    async listInflows(id){
        const repository = new InflowsRepository();
        if(id){
            try{
                const inflow = await repository.get(id);
                return {
                    status: 200,
                    message: inflow
                }
            } catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível buscar as entradas!"
                }
            }

        } else{
            try{
                const inflows = await repository.get();
                return {
                    status: 200,
                    message: inflows
                }

            } catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível buscar as entradas!"
                }
            }


        }
    }
}


export default listInflowsService;