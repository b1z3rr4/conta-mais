import BankAccountModel from "../models/BankAccountModel";

class bankAccountRepository {
  constructor() {}

  async create(
    id,
    agency,
    account,
    financial_institution,
    cash,
    limit,
    id_business
  ) {
    this.bank = await BankAccountModel.create({
      id,
      agency,
      account,
      financial_institution,
      cash,
      limit,
      id_business,
    });
    return this.bank;
  }

  async get(id) {
    if (id) {
      this.bank = await BankAccountModel.findAll({
        where: {
          id: id,
        },
      });
    } else {
      this.bank = await BankAccountModel.findAll();
    }
    return this.bank;
  }

  async update(id, obj) {
    this.bank = await BankAccountModel.update(obj, {
      where: {
        id: id,
      },
    });
    return this.bank;
  }

  async delete(id) {
    this.bank = await BankAccountModel.destroy({
      where: {
        id: id,
      },
    });
    return this.bank;
  }
}

export default bankAccountRepository;
