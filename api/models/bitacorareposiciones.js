'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraReposiciones = sequelize.define('BitacoraReposiciones', {
    fechaEntregaBitRep: DataTypes.DATE,
    observacionesBitRep: DataTypes.STRING,
    autorizadoBitRep: DataTypes.BOOLEAN,
    entregadoBitRep: DataTypes.BOOLEAN
  }, {});
  BitacoraReposiciones.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraReposiciones;
};