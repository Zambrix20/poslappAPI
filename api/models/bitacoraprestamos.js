'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraPrestamos = sequelize.define('BitacoraPrestamos', {
    tipoPrestamoBitPres: DataTypes.STRING,
    observacionesBitPres: DataTypes.STRING,
    autorizadoBitPres: DataTypes.BOOLEAN,
    entregadoBitPres: DataTypes.BOOLEAN
  }, {});
  BitacoraPrestamos.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraPrestamos;
};