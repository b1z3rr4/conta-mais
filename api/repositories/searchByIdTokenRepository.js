import BusinessModel from '../models/BusinessModel';
import BankAccountModel from '../models/BankAccountModel';
import MovimentModel from '../models/MovimentModel';

class SearchById {
    constructor(){}

    async searchBusinessByUserId(idUser){
        if(!idUser){
            return []
        }
        this.business = await BusinessModel.findAll({
            where: {
                user_id: idUser
            }
        })
        return this.business;
    }

    async searchBankAccountByBusinessUserId(idUser){
        this.business = await this.searchBusinessByUserId(idUser);
        this.idsBusiness = this.business.map((item)=>{
            return item.id
        })
        for(let i = 0; i < this.idsBusiness.length; i++){
            this.accounts = await BankAccountModel.findAll({
                where: {
                    id_business: this.idsBusiness[i]
                }
            })
        }
        return this.accounts;
    }

    async searchMovimentsByBankUserId(idUser){
        this.accounts = await this.searchBankAccountByBusinessUserId(idUser);
        this.idsAccounts = this.accounts.map((item)=>{
            return item.id
        })
        for(let i = 0; i < this.idsAccounts.length; i++){
            this.moviments = await MovimentModel.findAll({
                where: {
                    id_bankAccount: this.idsAccounts[i]
                }
            })
        }
        return this.moviments;
    }

    async searchMovimentsByBankUserIdInflows(idUser){
        this.moviments = await searchMovimentsByBankUserId(idUser)
        this.inflows = this.moviments.filter((item)=>{
            return item.type === 'entrada'
        })
        return this.inflows;
    }

    async searchMovimentsByBankUserIdOutflow(idUser){
        this.moviments = await searchMovimentsByBankUserId(idUser)
        this.outflows = this.moviments.filter((item)=>{
            return item.type === 'saida'
        })
        return this.outflows;
    }
}

export default SearchById;