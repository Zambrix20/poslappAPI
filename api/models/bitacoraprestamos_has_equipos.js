'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraPrestamos_has_Equipos = sequelize.define('BitacoraPrestamos_has_Equipos', {
    cantidadEquiposBPhE: DataTypes.INTEGER,
    estadoEquiposBPhE: DataTypes.STRING,
    fechaEntregaBPhE: DataTypes.DATE
  }, {});
  BitacoraPrestamos_has_Equipos.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraPrestamos_has_Equipos;
};