'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraApartados = sequelize.define('BitacoraApartados', {
    gradoObtenerBitAp: DataTypes.STRING,
    documentoAGenerarBitAp: DataTypes.STRING,
    actividadRealizarBitAp: DataTypes.STRING,
    descripcionBitAp: DataTypes.STRING,
    fechaInitBitAp: DataTypes.DATE,
    fechaFinBitAp: DataTypes.DATE,
    aprobadoBitAp: DataTypes.BOOLEAN,
    evaluacionEstrellasBitAp: DataTypes.INTEGER,
    evaluacionComentariosBitAp: DataTypes.STRING
  }, {});
  BitacoraApartados.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraApartados;
};