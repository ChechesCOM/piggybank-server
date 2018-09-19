'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('gastos', [
                {usuarioId: 1, fecha:'2018-03-09',categoria:'Apapacheo',concepto:'Laser',tipo_de_pago:'Credito 1952',monto:'666.66',mensualidad:'TRUE',numero_de_meses:'4'},
                {usuarioId: 1, fecha:'2018-03-09',categoria:'Mensualidad',concepto:'Amazon /tablet',tipo_de_pago:'Credito 1952',monto:'479.12',mensualidad:'TRUE',numero_de_meses:'1'},
                {usuarioId: 1, fecha:'2018-03-09',categoria:'Mensualidad',concepto:'Amazon / laptop',tipo_de_pago:'Credito 1952',monto:'1,543.59',mensualidad:'TRUE',numero_de_meses:'1'},
                {usuarioId: 1, fecha:'2018-04-08',categoria:'Rappi/uber eats',concepto:'Sushi',tipo_de_pago:'Credito 1952',monto:'557.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-06-08',categoria:'Rappi/uber eats',concepto:'Bowl',tipo_de_pago:'Credito 1952',monto:'145.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-06-08',categoria:'Farmacia',concepto:'Benavides',tipo_de_pago:'Credito 1952',monto:'223.50',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-07-08',categoria:'Social',concepto:'Cruella renta vestidos',tipo_de_pago:'Credito 1952',monto:'150.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-04-08',categoria:'Social',concepto:'Cruella renta vestidos',tipo_de_pago:'Efectivo',monto:'1,300.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-09-08',categoria:'transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1952',monto:'500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'13/08/18',categoria:'Carreer',concepto:'Tec',tipo_de_pago:'Efectivo',monto:'10,390.00',mensualidad:'TRUE',numero_de_meses:'2'},
                {usuarioId: 1, fecha:'13/08/18',categoria:'Res',concepto:'Chez celine',tipo_de_pago:'Credito 1952',monto:'143.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'14/08/18',categoria:'Rappi/uber eats',concepto:'----',tipo_de_pago:'Credito 1952',monto:'145.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'14/08/18',categoria:'Coffee shop',concepto:'starbucks',tipo_de_pago:'Credito 1952',monto:'77.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'14/08/18',categoria:'transporte',concepto:'Uber',tipo_de_pago:'Credito 1952',monto:'273.61',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'18/08/18',categoria:'Hormiga',concepto:'Oxxo',tipo_de_pago:'credito 1952',monto:'36.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'21/08/18',categoria:'Subsripcion',concepto:'Pluralsight',tipo_de_pago:'credito 1952',monto:'614.61',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-09-08',categoria:'Mascota',concepto:'Vacunas Ricky',tipo_de_pago:'Credito 1942',monto:'350.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'23/08/18',categoria:'Gifts',concepto:'Adidas plaza fiesta',tipo_de_pago:'Credito 1942',monto:'699.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'23/08/18',categoria:'Transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1942',monto:'500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'24/08/18',categoria:'Home improvment',concepto:'Steren',tipo_de_pago:'Credito 1942',monto:'333.98',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'24/08/18',categoria:'Home improvment',concepto:'Steren',tipo_de_pago:'Credito 1942',monto:'145.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'24/08/18',categoria:'Subsripcion',concepto:'Spotify',tipo_de_pago:'Debito Banorte',monto:'99.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'26/08/18',categoria:'TRansporte',concepto:'Uber',tipo_de_pago:'credito 1952',monto:'25.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'24/08/18',categoria:'restaurante',concepto:'bowls',tipo_de_pago:'credito 1952',monto:'225.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'27/08/18',categoria:'Rappi/uber eats',concepto:'----',tipo_de_pago:'credito 1952',monto:'188.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'27/08/18',categoria:'Gym',concepto:'Paire Dance studio',tipo_de_pago:'Debito Banorte',monto:'1,650.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'28/08/18',categoria:'Subsripcion',concepto:'digital ocean',tipo_de_pago:'credito 1952',monto:'98.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'29/08/18',categoria:'Transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1942',monto:'500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-08-09',categoria:'Social',concepto:'Bar Santo Mar',tipo_de_pago:'Credito 1942',monto:'180.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-02-09',categoria:'Apapacheo',concepto:'Publiarte',tipo_de_pago:'Debito Banorte',monto:'391.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-02-09',categoria:'Restaurante',concepto:'Tacos Mode',tipo_de_pago:'Debito Banorte',monto:'108.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-02-09',categoria:'Ropa',concepto:'Arie',tipo_de_pago:'Credito 1942',monto:'1,173.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2019-02-08',categoria:'Apapacheo',concepto:'sephora',tipo_de_pago:'Credito 1942',monto:'480.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-03-09',categoria:'Apapacheo',concepto:'Laser',tipo_de_pago:'Credito 1952',monto:'666.66',mensualidad:'TRUE',numero_de_meses:'3'},
                {usuarioId: 1, fecha:'2018-03-09',categoria:'Restaurante',concepto:'Hoku',tipo_de_pago:'Efectivo',monto:'170.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-03-09',categoria:'Transporte',concepto:'gasolina',tipo_de_pago:'Credito 1942',monto:'500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-05-09',categoria:'Papeleria',concepto:'Office depot',tipo_de_pago:'Debito Banorte',monto:'80.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-05-09',categoria:'Negocio',concepto:'Ecoshell',tipo_de_pago:'Credito 1952',monto:'348.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-07-09',categoria:'Carreer',concepto:'Tecnologico',tipo_de_pago:'Efectivo',monto:'10,390.00',mensualidad:'TRUE',numero_de_meses:'1'},
                {usuarioId: 1, fecha:'2018-01-09',categoria:'Ropa',concepto:'Pull And Bear',tipo_de_pago:'Efectivo',monto:'499.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-10-09',categoria:'coffee shop',concepto:'Starbucks',tipo_de_pago:'Credito 1942',monto:'39.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-11-09',categoria:'Apapacheo',concepto:'Los betos salon',tipo_de_pago:'Debito Banorte',monto:'1,200.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-12-09',categoria:'Restaurante',concepto:'Nectarworks',tipo_de_pago:'Debito Banorte',monto:'200.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-12-09',categoria:'Restaurante',concepto:'Nectarworks',tipo_de_pago:'Debito Banorte',monto:'130.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'2018-12-09',categoria:'Mascota',concepto:'Petco',tipo_de_pago:'Credito 1942',monto:'765.20',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'13/09/18',categoria:'Restaurante',concepto:'Peace and love',tipo_de_pago:'Credito 1942',monto:'120.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {usuarioId: 1, fecha:'13/09/18',categoria:'Transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1942',monto:'500.00',mensualidad:'FALSE',numero_de_meses:'0'},
            ], {});
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gastos', null, {});
  }
};
