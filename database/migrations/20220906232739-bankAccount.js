"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("bankAccount", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      agency: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      account: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      financial_institution: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cash: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      limit: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("bankAccount");
  },
};
