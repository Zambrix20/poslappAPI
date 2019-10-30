'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraAccesos = sequelize.define('BitacoraAccesos', {
    fechaInitBitAc: DataTypes.DATE,
    fechaFinBitAc: DataTypes.DATE
  }, {});
  BitacoraAccesos.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraAccesos;
};