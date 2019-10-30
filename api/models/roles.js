'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    nombreRol: DataTypes.STRING,
    filtroPrivilegiosRol: DataTypes.BOOLEAN
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};