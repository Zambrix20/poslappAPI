'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraReposicion_has_Materiales = sequelize.define('BitacoraReposicion_has_Materiales', {
    cantidadBRhM: DataTypes.INTEGER,
    estadoBRhM: DataTypes.STRING,
    motivoBRhM: DataTypes.STRING
  }, {});
  BitacoraReposicion_has_Materiales.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraReposicion_has_Materiales;
};