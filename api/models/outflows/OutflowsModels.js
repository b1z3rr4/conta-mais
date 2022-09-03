import Sequelize, { Model } from "sequelize";

export default class OutflowsModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: sequelize.UUIDV4(),
          primaryKey: true,
        },
        name: sequelize.STRING,
        description: sequelize.STRING,
        value: sequelize.NUMBER,
      },
      sequelize
    );
  }
}
