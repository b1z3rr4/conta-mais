import bankAccountRepository from "../../repositories/bankAccountRepository";

class listBankAccountService {
  constructor() {}

  async listBankAccount(id) {
    this.repository = new bankAccountRepository();
    if (id) {
      try {
        this.bank = await this.repository.get(id);
        return {
          status: 200,
          message: this.bank,
        };
      } catch (e) {
        console.log(e);
        return {
          status: 404,
          message: "Nada encontrado!",
        };
      }
    } else {
      try {
        this.bank = await this.repository.get();
        return {
          status: 200,
          message: this.bank,
        };
      } catch (e) {
        console.log(e);
        return {
          status: 404,
          message: "Nada encontrado!",
        };
      }
    }
  }
}

export default listBankAccountService;
