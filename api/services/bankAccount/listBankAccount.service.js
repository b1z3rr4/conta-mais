import bankAccountRepository from "../../repositories/bankAccountRepository";
import SearchById from '../../repositories/searchByIdTokenRepository.js';

class listBankAccountService {
  constructor() {}

  async listBankAccount(idToken, id) {
    this.repository = new bankAccountRepository();
    this.repositorySearch = new SearchById();
    if (id) {
      try {
        this.bank = await this.repository.get(id);
        return {
          status: 200,
          message: this.bank,
        }
      } catch (e) {
        console.log(e);
        return {
          status: 404,
          message: "Nada encontrado!",
        }
      }
    } else {
      try {
        this.bank = await this.repositorySearch.searchBankAccountByBusinessUserId(idToken);
        return {
          status: 200,
          message: this.bank,
        }
      } catch (e) {
        console.log(e);
        return {
          status: 404,
          message: "Nada encontrado!",
        }
      }
    }
  }
}

export default listBankAccountService;
