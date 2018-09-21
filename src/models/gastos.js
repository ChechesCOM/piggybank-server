'use strict';

module.exports = (sequelize, DataTypes) => {
  const gastos = sequelize.define('gastos', {
    fecha: DataTypes.DATE,
    categoria: DataTypes.STRING,
    concepto: DataTypes.STRING,
    tipo_de_pago: DataTypes.STRING,
    monto: DataTypes.DOUBLE,
    mensualidad: DataTypes.BOOLEAN,
    numero_de_meses: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: {type: DataTypes.DATEONLY, allowNull: false, defaultValue: sequelize.NOW},
    //usuario_id: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    // updatedAt: 'UsChangeDate'
  });
  
  gastos.associate = function (models) {
    gastos.belongsTo(models.usuarios, {
       foreignKey: {
         allowNull: false
       }
    });
  };
  
  return gastos;
};