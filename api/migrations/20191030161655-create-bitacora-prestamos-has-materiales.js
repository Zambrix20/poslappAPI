'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BitacoraPrestamos_has_Materiales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidadMaterialesBPhM: {
        type: Sequelize.INTEGER
      },
      estadoMaterialesBPhM: {
        type: Sequelize.STRING(45)
      },
      fechaEntregaMaterialesBPhM: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BitacoraPrestamos_has_Materiales');
  }
};