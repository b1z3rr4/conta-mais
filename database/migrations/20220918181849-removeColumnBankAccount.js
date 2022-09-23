'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'bankaccount',
        'account',
        )
  },
  
  down: (queryInterface, Sequelize) => {
    return 
      queryInterface.removeColumn('bankaccount', 'account')
  }
}
