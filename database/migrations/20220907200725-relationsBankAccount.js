"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("bankAccount", "id_business", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "business",
        key: "id",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("bankAccount", "id_business");
  },
};
