'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estatus = sequelize.define('Estatus', {
    descripcionEstatus: DataTypes.STRING
  }, {});
  Estatus.associate = function(models) {
    // associations can be defined here
  };
  return Estatus;
};