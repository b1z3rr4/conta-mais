'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'business',
        'cash_flow',
        )
  },
  
  down: (queryInterface, Sequelize) => {
    return 
      queryInterface.removeColumn('business', 'cash_flow')
  }
};
