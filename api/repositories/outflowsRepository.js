import OutflowsModel from "../models/OutflowsModel"

class OutflowsRepository {
    constructor(){}
    
    async create(id, name, description, value){
        this.outflow = await OutflowsModel.create({
            id,
            name,
            description,
            value
        })
        return this.outflow;
    }

    async get(id){
        this.outflow = await OutflowsModel.findAll({
            where: {
                id: id
            }
        })
        return this.outflow;
    }

    async update(id, obj){
        this.outflow = await OutflowsModel.update(obj, {
            where: {
                id: id
            }
        })
        return this.outflow;
    }

    async delete(id){
        this.outflow = await OutflowsModel.destroy({
            where: {
                id: id
            }
        })
        return this.outflow;
    }

}

export default OutflowsRepository;