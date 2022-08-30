import Sequelize, { Model } from "sequelize";

export default class BusinessModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: sequelize.UUIDV4(),
          primaryKey: true,
        },
        name: sequelize.STRING,
      },
      sequelize
    );
  }
}
