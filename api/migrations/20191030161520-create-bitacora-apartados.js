'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BitacoraApartados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gradoObtenerBitAp: {
        type: Sequelize.STRING
      },
      documentoAGenerarBitAp: {
        type: Sequelize.STRING
      },
      actividadRealizarBitAp: {
        type: Sequelize.STRING
      },
      descripcionBitAp: {
        type: Sequelize.STRING
      },
      fechaInitBitAp: {
        type: Sequelize.DATE
      },
      fechaFinBitAp: {
        type: Sequelize.DATE
      },
      aprobadoBitAp: {
        type: Sequelize.BOOLEAN
      },
      evaluacionEstrellasBitAp: {
        type: Sequelize.INTEGER
      },
      evaluacionComentariosBitAp: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('BitacoraApartados');
  }
};