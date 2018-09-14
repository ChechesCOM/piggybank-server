'use strict';
module.exports = (sequelize, DataTypes) => {
  const gastos = sequelize.define('gastos', {
    nombre: DataTypes.STRING,
    presupuesto: DataTypes.DECIMAL,
    //usuario_id: { type: DataTypes.INTEGER }
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