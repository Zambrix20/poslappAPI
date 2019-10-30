'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipos = sequelize.define('Equipos', {
    nombreEquipo: DataTypes.STRING,
    modeloEquipo: DataTypes.STRING,
    serieEquipo: DataTypes.STRING,
    imagenEquipo: DataTypes.STRING,
    observacionesEquipo: DataTypes.STRING,
    alimElecEquipo: DataTypes.FLOAT
  }, {});
  Equipos.associate = function(models) {
    // associations can be defined here
  };
  return Equipos;
};