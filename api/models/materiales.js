'use strict';
module.exports = (sequelize, DataTypes) => {
  const Materiales = sequelize.define('Materiales', {
    nombreMaterial: DataTypes.STRING,
    descripcionMaterial: DataTypes.STRING,
    tipoMaterial: DataTypes.STRING
  }, {});
  Materiales.associate = function(models) {
    // associations can be defined here
  };
  return Materiales;
};