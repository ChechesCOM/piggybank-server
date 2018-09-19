var Sequelize = require("sequelize");
port = process.env.PORT || 8080;

var sequelize = new Sequelize("piggydb", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;