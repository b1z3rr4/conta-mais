import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";

const sequelize = new Sequelize(databaseConfig);

class BankAccountModel extends Model {}

BankAccountModel.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    agency: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    account: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    financial_institution: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cash: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    limit: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    id_business: {
      type: Sequelize.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "bankAccount",
    timestamps: false,
  }
);

export default BankAccountModel;
