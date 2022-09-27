import createBankAccountService from "../services/bankAccount/createBankAccount.service";
import listBankAccountService from "../services/bankAccount/listBankAccount.service";
import deleteBankAccountService from "../services/bankAccount/deleteBankAccount.service";
import updateBankAccountService from "../services/bankAccount/updateBankAccount.service";
import decodeToken from "../services/auth/decodeToken";

class BankAccountController {
  constructor() {}

  async createBank(req, res) {
    const { financial_institution, cash, limit, id_business } =
      req.body;
    const service = new createBankAccountService();
    const bankAccount = await service.createBankAccount(
      financial_institution,
      cash,
      limit,
      id_business
    );
    res.status(bankAccount.status).json({
      message: bankAccount.message,
    });
  }

  async listBank(req, res) {
    const { id } = req.query;
    const authorization = req.headers['authorization'];
    const token = authorization.split(' ')[1]
    const data = await decodeToken(token)
    const idToken = data.id
    const service = new listBankAccountService();
    const bankAccount = await service.listBankAccount(idToken, id);
    res.status(bankAccount.status).json({
      message: bankAccount.message,
    });
  }

  async updateBank(req, res) {
    const { id } = req.params;
    const { financial_institution, cash, limit, id_business } =
      req.body;
    const service = new updateBankAccountService();
    const bankAccount = await service.updateBankAccount(
      id,
      financial_institution,
      cash,
      limit,
      id_business
    );
    res.status(bankAccount.status).json({
      message: bankAccount.message,
    });
  }

  async deleteBank(req, res) {
    const { id } = req.params;
    const service = new deleteBankAccountService();
    const bankAccount = await service.deleteBankAccount(id);
    res.status(bankAccount.status).json({
      message: bankAccount.message,
    });
  }
}

export default new BankAccountController();
