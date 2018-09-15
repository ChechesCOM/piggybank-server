'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('gastos', [{
    fecha: DataTypes.DATE,
    categoria: DataTypes.STRING,
    concepto: DataTypes.STRING,
    tipo_de_pago: DataTypes.STRING,
    monto: DataTypes.DECIMAL,
    mensualidad: DataTypes.BOOLEAN,
    numero_de_meses: DataTypes.INTEGER,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gastos', null, {});
  }
};
