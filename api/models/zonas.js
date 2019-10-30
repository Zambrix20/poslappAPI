'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zonas = sequelize.define('Zonas', {
    nombreZona: DataTypes.STRING
  }, {});
  Zonas.associate = function(models) {
    // associations can be defined here
  };
  return Zonas;
};