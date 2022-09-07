import MovimentModel from "../models/MovimentModel"

class MovimentsRepository {
    constructor(){}

    async create(id, name, description, value, type, id_bankAccount){
        this.moviment = await MovimentModel.create({
            id,
            name,
            description,
            value,
            type,
            id_bankAccount
        })
        return this.moviment;
    }

    async get(id){
        this.moviment = await MovimentModel.findAll({
            where: {
                id: id
            }
        })
        return this.moviment;
    }

    async update(id, obj){
        this.moviment = await MovimentModel.update(obj, {
            where: {
                id: id
            }
        })
        return this.moviment;
    }

    async delete(id){
        this.moviment = await MovimentModel.destroy({
            where: {
                id: id
            }
        })
        return this.moviment;
    }

}

export default MovimentsRepository;
