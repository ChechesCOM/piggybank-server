'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usuarios', [
            
            {nombre: 'juan', email: 'a@a', password: 'juan1'},
        ], {});
},

down: (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('usuarios', null, {});
}
};
