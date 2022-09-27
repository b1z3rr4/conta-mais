import listBankAccountService from "../bankAccount/listBankAccount.service";
import updateBankAccountService from "../bankAccount/updateBankAccount.service";
import listMovimentsService from '../moviments/listMoviments.service';

const getBankAccount = new listBankAccountService();
const updateBankAccount = new updateBankAccountService();
const getMoviments = new listMovimentsService();

class movimentsInCash {
	constructor() {}

	async define(value, type, id_bankAccount) {
		let result;
		type = type.toLowerCase();
		if (type === "entrada") {
			result = await this.inflow(id_bankAccount, value);
		} else {
			result = await this.outflow(id_bankAccount, value);
		}
		return result;
	}

	async inflow(id_bankAccount, value) {
		const bank = await getBankAccount.listBankAccount(
			undefined,
			id_bankAccount
		);
		if (bank.status === 200) {
			const [ BankAccountModel ] = bank.message;
			const json = BankAccountModel.toJSON();
			let cash = json.cash;
			const limit = json.limit;
			if(cash === null){
				cash = 0;
			}
			const newCash = cash + value;
			const result = await updateBankAccount.updateBankAccount(id_bankAccount, json.financial_instution, newCash, limit, json.id_business);
			if (result.status === 200) {
				return true;
			}
			return false;
		}
		return false;
	}

	async outflow(id_bankAccount, value) {
		const bank = await getBankAccount.listBankAccount(
			undefined,
			id_bankAccount
		);
		if (bank.status === 200) {
			const [ BankAccountModel ] = bank.message;
			const json = BankAccountModel.toJSON();
			let cash = json.cash;
			if(cash === null){
				cash = 0;
			}
			const limit = json.limit;
			const newCash = cash - value;
			if (newCash < 0) {
				let cashPositiv = newCash * -1;
				if (cashPositiv > limit) {
					return false;
				}
			}
			const result = await updateBankAccount.updateBankAccount(id_bankAccount, json.financial_instution, newCash, limit, json.id_business);
			console.log(result)
			if (result.status === 200) {
				return true;
			}
			return false;
		}
		return false;
	}

	async updateCashInFlow(id, newMoviment){
		const result = await getMoviments.listMoviments(undefined, id);
		const [ MovimentModel ] = result.message
		const oldMoviment = MovimentModel.toJSON();
		console.log(oldMoviment)
		if(oldMoviment.type !== newMoviment.type){
			if(oldMoviment === 'entrada'){
				const result = await this.outflow(oldMoviment.id_bankAccount, oldMoviment.value)
				if(result) {
					const result = await this.outflow(oldMoviment.id_bankAccount, newMoviment.value)
					return result
				}
				return false;
			} else {
				const result = await this.inflow(oldMoviment.id_bankAccount, oldMoviment.value)
				if(result) {
					const result = await this.inflow(oldMoviment.id_bankAccount, newMoviment.value)
					return result
				}
				return false;
			}
		} else if (oldMoviment.value !== newMoviment.value) {
			if(oldMoviment < newMoviment){
				const diference = newMoviment - oldMoviment;
				if(oldMoviment.type === 'entrada'){
					const result = await this.inflow(oldMoviment.id_bankAccount, diference)
					return result
				} else {
					const result = await this.outflow(oldMoviment.id_bankAccount, diference)
					return result
				}
			} else {
				if(oldMoviment.type === 'entrada'){
					const result = await this.outflow(oldMoviment.id_bankAccount, diference)
					return result
				} else {
					const result = await this.inflow(oldMoviment.id_bankAccount, diference)
					return result
				}
			}
		}
		return true;
	}

	async deleteCashInflow(id){
		const result = await getMoviments.listMoviments(undefined, id);
		const [ MovimentModel ] = result.message
		const oldMoviment = MovimentModel.toJSON();
		if(oldMoviment.type === "entrada"){
			const result = await this.outflow(oldMoviment.id_bankAccount, oldMoviment.value)
			return result
		} else {
			const result = await this.inflow(oldMoviment.id_bankAccount, oldMoviment.value)
			return result
		}
	}
}

export default movimentsInCash;
