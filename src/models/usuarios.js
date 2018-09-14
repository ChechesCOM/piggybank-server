'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  usuarios.associate = function (models) {
    usuarios.hasMany(models.gastos, {
      onDelete: 'cascade'
    });

    usuarios.hasMany(models.compras, {
      onDelete: 'cascade'
    });
  };
  return usuarios;
};