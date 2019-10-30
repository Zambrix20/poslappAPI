'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alumnos = sequelize.define('Alumnos', {
    gradoEscolarAlumnos: DataTypes.STRING,
    activoAlumnos: DataTypes.BOOLEAN,
    fechaInitAlumnos: DataTypes.DATE,
    fechaFinAlumnos: DataTypes.DATE
  }, {});
  Alumnos.associate = function(models) {
    // associations can be defined here
  };
  return Alumnos;
};