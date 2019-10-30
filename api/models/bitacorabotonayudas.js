'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraBotonAyudas = sequelize.define('BitacoraBotonAyudas', {
    fechaBtnAy: DataTypes.DATE
  }, {});
  BitacoraBotonAyudas.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraBotonAyudas;
};