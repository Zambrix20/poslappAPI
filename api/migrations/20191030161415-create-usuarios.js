'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreUsuario: {
        type: Sequelize.STRING(64)
      },
      apellido: {
        type: Sequelize.STRING(64)
      },
      email: {
        type: Sequelize.STRING(45)
      },
      password: {
        type: Sequelize.STRING(72)
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      telefono: {
        type: Sequelize.STRING(18)
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
    return queryInterface.dropTable('Usuarios');
  }
};