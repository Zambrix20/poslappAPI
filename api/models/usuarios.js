'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombreUsuario: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    telefono: DataTypes.STRING
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
  };
  return Usuarios;
};