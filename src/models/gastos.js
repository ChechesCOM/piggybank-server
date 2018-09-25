'use strict';

module.exports = (sequelize, DataTypes) => {
  const gastos = sequelize.define('gastos', {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING
    },
    concepto: {
      type:DataTypes.STRING
    },
    tipo_de_pago: {
      type: DataTypes.STRING
    },
    monto: {
      type: DataTypes.DOUBLE
    },
    mensualidad: {
      type: DataTypes.BOOLEAN
    },
    numero_de_meses: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false, 
      defaultValue: sequelize.NOW
    },
    
    //usuario_id: { type: DataTypes.INTEGER }
  }, {
    timestamps: true,
    // updatedAt: 'UsChangeDate'
  });
  
  // gastos.associate = function (models) {
  //   gastos.belongsTo(models.usuarios, {
  //      foreignKey: {
  //        allowNull: false
  //      }
  //   });
  // };
  
  return gastos;
};