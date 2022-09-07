import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";

const sequelize = new Sequelize(databaseConfig);

class MovimentModel extends Model {};

MovimentModel.init(
  {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "moviments",
    timestamps: false,
  }
);

export default MovimentModel;