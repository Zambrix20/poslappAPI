'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BitacoraPrestamos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipoPrestamoBitPres: {
        type: Sequelize.STRING
      },
      observacionesBitPres: {
        type: Sequelize.STRING
      },
      autorizadoBitPres: {
        type: Sequelize.BOOLEAN
      },
      entregadoBitPres: {
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
    return queryInterface.dropTable('BitacoraPrestamos');
  }
};