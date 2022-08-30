const { Sequelize } = require("sequelize");
const UserModel = require("../api/models/user/UserModel");
const databaseConfig = require("../config/database");

const models = [UserModel];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

module.exports = Database;
