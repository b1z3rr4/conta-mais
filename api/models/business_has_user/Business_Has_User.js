import Sequelize, { Model } from "sequelize";

export default class BusinessModel extends Model {
  static init(sequelize) {
    super.init(
      {
        business_id: {
          type: sequelize.UUIDV4(),
          references: "business",
          referencesKey: "id",
        },
        user_id: {
          type: sequelize.UUIDV4(),
          references: "business",
          referencesKey: "id",
        },
      },
      sequelize
    );
  }
}
