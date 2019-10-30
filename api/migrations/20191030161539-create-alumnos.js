'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Alumnos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gradoEscolarAlumnos: {
        type: Sequelize.STRING(45)
      },
      activoAlumnos: {
        type: Sequelize.BOOLEAN
      },
      fechaInitAlumnos: {
        type: Sequelize.DATE
      },
      fechaFinAlumnos: {
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
    return queryInterface.dropTable('Alumnos');
  }
};