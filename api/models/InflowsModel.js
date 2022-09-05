import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";

const sequelize = new Sequelize(databaseConfig);

class InflowsModel extends Model {};

InflowsModel.init(
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
    }
  },
  {
    sequelize,
    tableName: "inflows",
    timestamps: false,
  }
);

export default InflowsModel;