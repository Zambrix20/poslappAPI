'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administradores = sequelize.define('Administradores', {
    activoAdmin: DataTypes.BOOLEAN
  }, {});
  Administradores.associate = function(models) {
    // associations can be defined here
  };
  return Administradores;
};