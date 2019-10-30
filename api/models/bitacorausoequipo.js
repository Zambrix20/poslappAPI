'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraUsoEquipo = sequelize.define('BitacoraUsoEquipo', {
    fechaInitBitUE: DataTypes.DATE,
    muestraBitUE: DataTypes.STRING,
    condicionBitUE: DataTypes.STRING,
    fechaTermBitUE: DataTypes.DATE
  }, {});
  BitacoraUsoEquipo.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraUsoEquipo;
};