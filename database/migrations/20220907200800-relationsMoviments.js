'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('moviments', 'id_bankAccount', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'bankAccount',
        key: 'id' 
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('moviments', 'id_bankAccount');
  }
};
