import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";

const sequelize = new Sequelize(databaseConfig);

class BusinessModel extends Model {};

BusinessModel.init(
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    cnpj: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    cash_flow: {
      type: Sequelize.FLOAT,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: "business",
    timestamps: false,
  }
);

export default BusinessModel;