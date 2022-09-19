import updateCashFlowService from './updateCashFlow.service';
import listBankAccountService from '../bankAccount/listBankAccount.service';
import listCashFlowService from './listCashFlow.service';

const update = new updateCashFlowService();
const getBankAccount = new listBankAccountService();
const getCash = new listCashFlowService();


class movimentsInCash {
    constructor(){}

    async define(value, type, id_bankAccount){
        let result;
        type = type.toLowerCase();
        if(type === 'entrada'){
            result = await this.inflow(id_bankAccount, value)
        } else {
            result = await this.outflow(id_bankAccount, value)
        }
        return result;
    }

    async inflow(id_bankAccount, value){
        const bank = await getBankAccount.listBankAccount(id_bankAccount);
        if(bank.status === 200){
            const [ BankAccountModel ] = bank.message;
            const json = BankAccountModel.toJSON()
            let currentCash = await getCash.listById(json.id_business);
            if(currentCash === null){
                currentCash = 0
            }
            const newCash = currentCash + value;
            const result = await update.updateById(json.id_business, newCash);
            return result
        }
        return false;
    }

    async outflow(id_bankAccount, value){
        const bank = await getBankAccount.listBankAccount(id_bankAccount);
        if(bank.status === 200){
            const [ BankAccountModel ] = bank.message;
            const json = BankAccountModel.toJSON()
            let currentCash = await getCash.listById(json.id_business);
            console.log(currentCash)
            if(currentCash === null){
                currentCash = 0
            }
            const newCash = currentCash - value;
            if(newCash < 0){
                const limit = json.limit;
                const cashPositiv = newCash * -1;
                const isPossible = cashPositiv <= limit;
                if(!isPossible){
                    return false
                }
            }
            const result = await update.updateById(json.id_business, newCash);
            return result
        }
    }
}

export default movimentsInCash;