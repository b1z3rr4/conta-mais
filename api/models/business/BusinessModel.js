import Sequelize, { Model } from "sequelize";

export default class BusinessModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: sequelize.UUIDV4(),
          primaryKey: true,
        },
        cnpj: sequelize.STRING,
        razao_social: sequelize.STRING,
        capital: sequelize.NUMBER,
      },
      sequelize
    );
  }
}
