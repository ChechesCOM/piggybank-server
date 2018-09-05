'use strict';
module.exports = (sequelize, DataTypes) => {
  const compras = sequelize.define('compras', {
    fecha: DataTypes.DATE,
    modo_pago: DataTypes.DECIMAL,
    importe: DataTypes.DECIMAL,
    usuario_id: { type: DataTypes.INTEGER, references: { model: usuarios } },
    gasto_id: { type: DataTypes.INTEGER, references: { model: gastos } }
  }, {});
  compras.associate = function (models) {
    compras.belongsTo(models.usuarios, {
      foreignKey: {
        allowNull: false
      }
    });
    compras.belongsTo(models.usuarios, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return compras;
}; 