import bankAccountRepository from "../../repositories/bankAccountRepository";

class deleteBankAccountService {
  constructor() {}

  async deleteBankAccount(id) {
    this.bank = new bankAccountRepository();
    try {
      this.bank = await this.bank.delete(id);
      return {
        status: 200,
        message: "Deletado com sucesso!",
      };
    } catch (e) {
      console.log(e);
      return {
        status: 400,
        message: "Não foi possível deletar a conta!",
      };
    }
  }
}

export default deleteBankAccountService;
