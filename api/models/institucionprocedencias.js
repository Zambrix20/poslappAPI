'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstitucionProcedencias = sequelize.define('InstitucionProcedencias', {
    nombreInstProc: DataTypes.STRING
  }, {});
  InstitucionProcedencias.associate = function(models) {
    // associations can be defined here
  };
  return InstitucionProcedencias;
};