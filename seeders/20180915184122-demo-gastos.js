'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        console.log(usuarios);
        return [
            queryInterface.bulkInsert('usuario', [
                {Fecha:'2018-03-09',Categoria:'Apapacheo',concepto:'Laser',tipo_de_pago:'Credito 1952',Monto:'$666.66',mensualidad:'TRUE',numero_de_meses:'4'},
                {Fecha:'2018-03-09',Categoria:'Mensualidad',concepto:'Amazon /tablet',tipo_de_pago:'Credito 1952',Monto:'$479.12',mensualidad:'TRUE',numero_de_meses:'1'},
                {Fecha:'2018-03-09',Categoria:'Mensualidad',concepto:'Amazon / laptop',tipo_de_pago:'Credito 1952',Monto:'$1,543.59',mensualidad:'TRUE',numero_de_meses:'1'},
                {Fecha:'2018-04-08',Categoria:'Rappi/uber eats',concepto:'Sushi',tipo_de_pago:'Credito 1952',Monto:'$557.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-06-08',Categoria:'Rappi/uber eats',concepto:'Bowl',tipo_de_pago:'Credito 1952',Monto:'$145.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-06-08',Categoria:'Farmacia',concepto:'Benavides',tipo_de_pago:'Credito 1952',Monto:'$223.50',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-07-08',Categoria:'Social',concepto:'Cruella renta vestidos',tipo_de_pago:'Credito 1952',Monto:'$150.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-04-08',Categoria:'Social',concepto:'Cruella renta vestidos',tipo_de_pago:'Efectivo',Monto:'$1,300.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-09-08',Categoria:'transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1952',Monto:'$500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'13/08/18',Categoria:'Carreer',concepto:'Tec',tipo_de_pago:'Efectivo',Monto:'$10,390.00',mensualidad:'TRUE',numero_de_meses:'2'},
                {Fecha:'13/08/18',Categoria:'Res',concepto:'Chez celine',tipo_de_pago:'Credito 1952',Monto:'$143.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'14/08/18',Categoria:'Rappi/uber eats',concepto:'----',tipo_de_pago:'Credito 1952',Monto:'$145.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'14/08/18',Categoria:'Coffee shop',concepto:'starbucks',tipo_de_pago:'Credito 1952',Monto:'$77.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'14/08/18',Categoria:'transporte',concepto:'Uber',tipo_de_pago:'Credito 1952',Monto:'$273.61',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'18/08/18',Categoria:'Hormiga',concepto:'Oxxo',tipo_de_pago:'credito 1952',Monto:'$36.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'21/08/18',Categoria:'Subsripcion',concepto:'Pluralsight',tipo_de_pago:'credito 1952',Monto:'$614.61',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-09-08',Categoria:'Mascota',concepto:'Vacunas Ricky',tipo_de_pago:'Credito 1942',Monto:'$350.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'23/08/18',Categoria:'Gifts',concepto:'Adidas plaza fiesta',tipo_de_pago:'Credito 1942',Monto:'$699.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'23/08/18',Categoria:'Transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1942',Monto:'$500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'24/08/18',Categoria:'Home improvment',concepto:'Steren',tipo_de_pago:'Credito 1942',Monto:'$333.98',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'24/08/18',Categoria:'Home improvment',concepto:'Steren',tipo_de_pago:'Credito 1942',Monto:'$145.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'24/08/18',Categoria:'Subsripcion',concepto:'Spotify',tipo_de_pago:'Debito Banorte',Monto:'$99.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'26/08/18',Categoria:'TRansporte',concepto:'Uber',tipo_de_pago:'credito 1952',Monto:'$25.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'24/08/18',Categoria:'restaurante',concepto:'bowls',tipo_de_pago:'credito 1952',Monto:'$225.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'27/08/18',Categoria:'Rappi/uber eats',concepto:'----',tipo_de_pago:'credito 1952',Monto:'$188.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'27/08/18',Categoria:'Gym',concepto:'Paire Dance studio',tipo_de_pago:'Debito Banorte',Monto:'$1,650.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'28/08/18',Categoria:'Subsripcion',concepto:'digital ocean',tipo_de_pago:'credito 1952',Monto:'$98.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'29/08/18',Categoria:'Transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1942',Monto:'$500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-08-09',Categoria:'Social',concepto:'Bar Santo Mar',tipo_de_pago:'Credito 1942',Monto:'$180.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-02-09',Categoria:'Apapacheo',concepto:'Publiarte',tipo_de_pago:'Debito Banorte',Monto:'$391.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-02-09',Categoria:'Restaurante',concepto:'Tacos Mode',tipo_de_pago:'Debito Banorte',Monto:'$108.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-02-09',Categoria:'Ropa',concepto:'Arie',tipo_de_pago:'Credito 1942',Monto:'$1,173.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2019-02-08',Categoria:'Apapacheo',concepto:'sephora',tipo_de_pago:'Credito 1942',Monto:'$480.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-03-09',Categoria:'Apapacheo',concepto:'Laser',tipo_de_pago:'Credito 1952',Monto:'$666.66',mensualidad:'TRUE',numero_de_meses:'3'},
                {Fecha:'2018-03-09',Categoria:'Restaurante',concepto:'Hoku',tipo_de_pago:'Efectivo',Monto:'$170.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-03-09',Categoria:'Transporte',concepto:'gasolina',tipo_de_pago:'Credito 1942',Monto:'$500.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-05-09',Categoria:'Papeleria',concepto:'Office depot',tipo_de_pago:'Debito Banorte',Monto:'$80.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-05-09',Categoria:'Negocio',concepto:'Ecoshell',tipo_de_pago:'Credito 1952',Monto:'$348.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-07-09',Categoria:'Carreer',concepto:'Tecnologico',tipo_de_pago:'Efectivo',Monto:'$10,390.00',mensualidad:'TRUE',numero_de_meses:'1'},
                {Fecha:'2018-01-09',Categoria:'Ropa',concepto:'Pull And Bear',tipo_de_pago:'Efectivo',Monto:'$499.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-10-09',Categoria:'coffee shop',concepto:'Starbucks',tipo_de_pago:'Credito 1942',Monto:'$39.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-11-09',Categoria:'Apapacheo',concepto:'Los betos salon',tipo_de_pago:'Debito Banorte',Monto:'$1,200.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-12-09',Categoria:'Restaurante',concepto:'Nectarworks',tipo_de_pago:'Debito Banorte',Monto:'$200.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-12-09',Categoria:'Restaurante',concepto:'Nectarworks',tipo_de_pago:'Debito Banorte',Monto:'$130.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'2018-12-09',Categoria:'Mascota',concepto:'Petco',tipo_de_pago:'Credito 1942',Monto:'$765.20',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'13/09/18',Categoria:'Restaurante',concepto:'Peace and love',tipo_de_pago:'Credito 1942',Monto:'$120.00',mensualidad:'FALSE',numero_de_meses:'0'},
                {Fecha:'13/09/18',Categoria:'Transporte',concepto:'Gasolina',tipo_de_pago:'Credito 1942',Monto:'$500.00',mensualidad:'FALSE',numero_de_meses:'0'},
            ])
        ];
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gastos', null, {});
  }
};
