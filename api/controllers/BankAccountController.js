import createBankAccountService from "../services/bankAccount/createBankAccount.service";
import listBankAccountService from "../services/bankAccount/listBankAccount.service";
import deleteBankAccountService from "../services/bankAccount/deleteBankAccount.service";
import updateBankAccountService from "../services/bankAccount/updateBankAccount.service";

class BankAccountController {
  constructor() {}

  async createBank(req, res) {
    const { agency, account, financial_institution, cash, limit, id_business } =
      req.body;
    const service = new createBankAccountService();
    const bankAccount = await service.createBankAccount(
      agency,
      account,
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
    const service = new listBankAccountService();
    const bankAccount = await service.listBankAccount(id);
    res.status(bankAccount.status).json({
      message: bankAccount.message,
    });
  }

  async updateBank(req, res) {
    const { id } = req.params;
    const { agency, account, financial_institution, cash, limit, id_business } =
      req.body;
    const service = new updateBankAccountService();
    const bankAccount = await service.updateBankAccount(
      id,
      agency,
      account,
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
