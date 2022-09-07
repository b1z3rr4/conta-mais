import bankAccountRepository from "../../repositories/bankAccountRepository";

class updateBankAccountService {
  constructor() {}

  async updateBankAccount(
    id,
    agency,
    account,
    financial_institution,
    cash,
    limit
  ) {
    this.repository = new bankAccountRepository();
    const obj = {
      agency,
      account,
      financial_institution,
      cash,
      limit,
    };
    try {
      this.bank = await this.repository.update(id, obj);
      if (this.bank[0] === 1) {
        return {
          status: 200,
          message: "Conta atualizada!",
        };
      }
      return {
        status: 400,
        message: "Não foi possível atualizar a conta.",
      };
    } catch (e) {
      console.log(e);
      return {
        status: 400,
        message: "Não foi possível atualizar a conta.",
      };
    }
  }
}

export default updateBankAccountService;
