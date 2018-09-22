'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATEONLY,
    
  }, {
    timestamps: true,
    updatedAt: 'UsChangeDate'
  });
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