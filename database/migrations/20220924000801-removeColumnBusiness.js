'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'business',
        'bank_stock',
        )
  },
  
  down: (queryInterface, Sequelize) => {
    return 
      queryInterface.removeColumn('business', 'bank_stock')
  }
};