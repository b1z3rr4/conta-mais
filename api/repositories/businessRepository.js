import BusinessModel from "../models/BusinessModel";

class businessRepository {
    constructor(){}

    async create(id, cnpj, company, bank_stock){
        this.business = await BusinessModel.create({
            id,
            cnpj,
            company,
            bank_stock,
            id_bankAccount
        })
        return this.business;
    }

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
        return this.business;
    }

    async update(id, obj){
        this.businesss = await BusinessModel.update(obj, {
            where: {
                id: id
            }
        })
        return this.business;
    }

    async delete(id){
        this.business = await BusinessModel.destroy({
            where: {
                id: id
            }
        })
        return this.business;
    }
}

export default businessRepository;