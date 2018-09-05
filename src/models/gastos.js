'use strict';
module.exports = (sequelize, DataTypes) => {
  const gastos = sequelize.define('gastos', {
    nombre: DataTypes.STRING,
    presupuesto: DataTypes.DECIMAL,
    usuario_id: { type: DataTypes.INTEGER, references: { model: usuarios } }
  }, {});
  gastos.associate = function (models) {
    gastos.belongsTo(models.usarios, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return gastos;
};