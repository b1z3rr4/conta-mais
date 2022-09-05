import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database.js";

const sequelize = new Sequelize(databaseConfig);

class OutflowsModel extends Model {};

OutflowsModel.init(
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
    tableName: "outflows",
    timestamps: false,
  }
);

export default OutflowsModel;