'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'bankaccount',
        'agency',
        )
  },
  
  down: (queryInterface, Sequelize) => {
    return 
      queryInterface.removeColumn('bankaccount', 'agency')
  }
}
