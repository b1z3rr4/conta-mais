import BusinessModel from "../models/BusinessModel";
import BankAccountModel from "../models/BankAccountModel";

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

    async getBank(id){
        if(id){
            this.bank = await BankAccountModel.findAll({
                where: {
                    id: id
                }
            })
        } else {
            this.bank = await BankAccountModel.findAll()
        }
        const [ Bank ] = this.bank
        return Bank.toJSON()
    }

    async update(id, value){
        this.business = await BusinessModel.update({ cash_flow: value }, {
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

    async updateBank(id, value){
        this.bank = await BankAccountModel.update({ cash: value }, {
            where: {
                id: id
            }
        })
        if(this.bank[0] === 1){
            return true
        } else {
            return false;
        }
    }
}

export default cashFlowRepository;