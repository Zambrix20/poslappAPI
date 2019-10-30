'use strict';
module.exports = (sequelize, DataTypes) => {
  const MantEquipos = sequelize.define('MantEquipos', {
    fechaInitMantEq: DataTypes.DATE,
    fechaFinMantEq: DataTypes.DATE
  }, {});
  MantEquipos.associate = function(models) {
    // associations can be defined here
  };
  return MantEquipos;
};