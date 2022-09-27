'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'bankAccount',
        'agency',
        )
  },
  
  down: (queryInterface, Sequelize) => {
    return 
      queryInterface.removeColumn('bankAccount', 'agency')
  }
}
