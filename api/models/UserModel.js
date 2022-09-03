import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";

const sequelize = new Sequelize(databaseConfig);

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },

  },
  {
    sequelize,
    modelName: "users",
    timestamps: false,
  }
);

export default UserModel;