import MovimentsRepository from "../../repositories/movimentsRepository";

class listMovimentsService {
    constructor(){}

    async listMoviments(id){
        const repository = new MovimentsRepository();
        if(id){
            try{
                const moviment = await repository.get(id);
                return {
                    status: 200,
                    message: moviment
                }
            } catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível buscar as movimentações!"
                }
            }

        } else{
            try{
                const moviment = await repository.get();
                return {
                    status: 200,
                    message: moviments
                }

            } catch(e){
                console.log(e);
                return {
                    status: 400,
                    message: "Não foi possível buscar as movimentações !"
                }
            }


        }
    }
}


export default listMovimentsService;