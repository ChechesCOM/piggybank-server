'use strict';
module.exports = (sequelize, DataTypes) => {
  const compras = sequelize.define('compras', {
    fecha: DataTypes.DATE,
    modo_pago: DataTypes.DECIMAL,
    importe: DataTypes.DECIMAL,
    //usuario_id: { type: DataTypes.INTEGER },
    //gasto_id: { type: DataTypes.INTEGER }
  }, {});
  compras.associate = function (models) {
    compras.belongsTo(models.usuarios, {
      foreignKey: {
        allowNull: false
      }
    });
    compras.belongsTo(models.gastos, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return compras;
}; 

