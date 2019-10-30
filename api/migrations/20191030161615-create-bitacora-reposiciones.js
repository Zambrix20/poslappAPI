'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BitacoraReposiciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaEntregaBitRep: {
        type: Sequelize.DATE
      },
      observacionesBitRep: {
        type: Sequelize.STRING
      },
      autorizadoBitRep: {
        type: Sequelize.BOOLEAN
      },
      entregadoBitRep: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('BitacoraReposiciones');
  }
};