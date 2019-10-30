'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraReposicion_has_Equipos = sequelize.define('BitacoraReposicion_has_Equipos', {
    cantidadBRhE: DataTypes.INTEGER,
    estadoBRhE: DataTypes.STRING,
    motivoBRhE: DataTypes.STRING
  }, {});
  BitacoraReposicion_has_Equipos.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraReposicion_has_Equipos;
};