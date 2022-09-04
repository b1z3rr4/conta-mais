'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('business', { 
      id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        cnpj: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        company: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bank_stock: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
      });
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('business')
  }
};
