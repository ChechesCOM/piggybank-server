'use strict';
module.exports = (sequelize, DataTypes) => {
  const gastos = sequelize.define('gastos', {
    fecha: DataTypes.DATE,
    categoria: DataTypes.STRING,
    concepto: DataTypes.STRING,
    tipo_de_pago: DataTypes.STRING,
    monto: DataTypes.DECIMAL,
    mensualidad: DataTypes.BOOLEAN,
    numero_de_meses: DataTypes.INTEGER,
    usuario_id: { type: DataTypes.INTEGER }
  }, {});
  
  gastos.associate = function (models) {
    gastos.belongsTo(models.usuarios, {
       foreignKey: {
         allowNull: false
       }
    });
  };
  
  return gastos;
};