import InflowsModel from "../models/InflowsModel"

class InflowsRepository {
    constructor(){}

    async create(id, name, description, value){
        this.inflow = await InflowsModel.create({
            id,
            name,
            description,
            value
        })
        return this.inflow;
    }

    async get(id){
        this.inflow = await InflowsModel.findAll({
            where: {
                id: id
            }
        })
        return this.inflow;
    }

    async update(id, obj){
        this.inflow = await InflowsModel.update(obj, {
            where: {
                id: id
            }
        })
        return this.inflow;
    }

    async delete(id){
        this.inflow = await InflowsModel.destroy({
            where: {
                id: id
            }
        })
        return this.inflow;
    }

}

export default InflowsRepository;
