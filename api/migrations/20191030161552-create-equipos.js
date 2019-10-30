'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreEquipo: {
        type: Sequelize.STRING
      },
      modeloEquipo: {
        type: Sequelize.STRING
      },
      serieEquipo: {
        type: Sequelize.STRING
      },
      imagenEquipo: {
        type: Sequelize.STRING
      },
      observacionesEquipo: {
        type: Sequelize.STRING
      },
      alimElecEquipo: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Equipos');
  }
};