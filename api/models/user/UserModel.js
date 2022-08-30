const { Sequeilize, Model } = require("sequelize");

class UserModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: sequelize.UUIDV4(),
          primaryKey: true,
        },
        email: sequelize.STRING,
        password: sequelize.STRING,
        cpf: sequelize.STRING,
      },
      sequelize
    );
  }
}

module.exports = UserModel;
