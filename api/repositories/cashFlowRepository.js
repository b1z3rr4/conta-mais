import BusinessModel from "../models/BusinessModel";

class cashFlowRepository {
    constructor(){}

    async get(id){
        if(id){
            this.business = await BusinessModel.findAll({
                where: {
                    id: id
                }
            })
        } else {
            this.business = await BusinessModel.findAll()
        }
        const [ Business ] = this.business
        return Business.toJSON()
    }

    async update(id, value){
        this.business = await BusinessModel.update({ cash_flow: value}, {
            where: {
                id: id
            }
        })
        if(this.business[0] === 1){
            return true
        } else {
            return false;
        }
    }
}

export default cashFlowRepository;