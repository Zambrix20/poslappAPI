'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraPrestamos_has_Materiales = sequelize.define('BitacoraPrestamos_has_Materiales', {
    cantidadMaterialesBPhM: DataTypes.INTEGER,
    estadoMaterialesBPhM: DataTypes.STRING,
    fechaEntregaMaterialesBPhM: DataTypes.DATE
  }, {});
  BitacoraPrestamos_has_Materiales.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraPrestamos_has_Materiales;
};