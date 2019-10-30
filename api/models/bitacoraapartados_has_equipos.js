'use strict';
module.exports = (sequelize, DataTypes) => {
  const BitacoraApartados_has_Equipos = sequelize.define('BitacoraApartados_has_Equipos', {
    BitApIdBAhE: DataTypes.INTEGER,
    EquiposIdBAhE: DataTypes.INTEGER
  }, {});
  BitacoraApartados_has_Equipos.associate = function(models) {
    // associations can be defined here
  };
  return BitacoraApartados_has_Equipos;
};