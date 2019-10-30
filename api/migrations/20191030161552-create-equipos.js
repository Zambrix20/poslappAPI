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
        type: Sequelize.STRING(45)
      },
      modeloEquipo: {
        type: Sequelize.STRING(45)
      },
      serieEquipo: {
        type: Sequelize.STRING(124)
      },
      imagenEquipo: {
        type: Sequelize.STRING(45)
      },
      observacionesEquipo: {
        type: Sequelize.TEXT
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