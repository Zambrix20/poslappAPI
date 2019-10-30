'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BitacoraUsoEquipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaInitBitUE: {
        type: Sequelize.DATE
      },
      muestraBitUE: {
        type: Sequelize.STRING
      },
      condicionBitUE: {
        type: Sequelize.STRING
      },
      fechaTermBitUE: {
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
    return queryInterface.dropTable('BitacoraUsoEquipos');
  }
};