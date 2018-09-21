var db = require("../models");

module.exports = function (app) {

    // Rutas

    // Perfil

    // // GET - /api/config/perfil
    // app.get("/api/config/perfil", function (req, res) { },
    //     // POST - /api/config/perfil
    //     app.get("/api/config/perfil", function (req, res) { },
    //         // UPDATE - /api/config/perfil
    //         app.get("/api/config/perfil", function (req, res) { }
    // // DELETE - /api/config/perfil

    // Movimientos

    // GET - /api/movimientos
    // POST - /api/movimientos
    // UPDATE - /api/movimientos/:id
    // DELETE - /api/movimientos/:id

    // Home

    // GET - /api/total/:params Regresa la suma de los gastos totales y el presupuesto total. Toma como parametro semana/mes/año.
    // GET - /api/totalcategoria/:params Regresa la suma de los gastos por categoria y el presupuesto total. Toma como parametro semana/mes/año

    // Diario

    // GET - /api/diario/:params Regresa todos los movimientos en el periodo de tiempo seleccionado
    // Duda: Mejor trabajarlos en el backend o en el frontend


    // {
    //                 movimiento1 = {
    //                     monto: "",
    //                     concepto: "",
    //                     fecha: "",
    //                     Lugar/Marca: "",
    //         Categoria: "",
    //                     TipoDePago: "",
    //                     Meses/Contado
    //                 },
    //GET all movements
    app.get("/api/movements", function (req, res) {
        db.compras.findAll({}).then(function (movements) {
            res.json(movements);
        });
    });

    //GET movements filtered by name 
    app.get("/api/movements/:id", function (req, res) {
        db.compras.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (movement) {
            res.json(movement);
        });
    });

    //Create new movement
    app.post("/api/movements", function (req, res) {
        db.compras.create({

        }).then(function (newMovement) {
            res.json(newMovement);
        });
    });

    // Delete a movement
    app.delete("/api/Movements/:id", function (req, res) {
        db.compras.destroy({ where: { id: req.params.id } }).then(function (movements) {
            res.json(movements);
        });
    });

    //get all gastos
    app.get("/api/gastos", function (req, res) {
        db.gastos.findAll({}).then(function (gastos) {
            res.json(gastos);
        });
    });

    //gastos (suma total)
    app.get("/api/gastos/homesum/:usuarioId", function (req, res) {
        db.gastos.sum('monto', {
            where: {
                usuarioId: req.params.usuarioId
            }
        }).then(function (total) {
            console.log(total)
            res.json(total);
        })
    });

    app.get("/api/gastos/group/:usuarioId", function (req, res) {
        db.gastos.findAll({
            attributes: ['categoria', [db.sequelize.fn('SUM', db.sequelize.col('monto')), 'total']],
            group: ['categoria']
        }).then(function (total) {
            console.log(total)
            res.json(total);
        })
    });


    app.get("/api/gastos/inicio", function (req, res) {
        db.gastos.findOne({
            where: {
                id: req.params.id,
                categoria: req.params.categoria,
            },
        }).then(function (usuarios) {
            res.json(usuarios);
        });
    });


    app.get("/api/gastos", function (req, res) {
        db.gastos.findAll({
            where: {
                id: req.params.id,
                date: { [Op.between]: [fecha1, fecha2] }
            },
            group: "name",
            order: "name"
        }).then(function (usuarios) {
            res.json(usuarios);

        });
    });

    // USERS //

    //get all users
    app.get("/api/usuarios", function (req, res) {
        db.usuarios.findAll({}).then(function (usuarios) {
            res.json(usuarios);
        });
    });
    //get user by id
    app.get("/api/usuarios/:id", function (req, res) {
        db.usuarios.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (usuarios) {
            res.json(usuarios);
        });
    });

    //create new user
    app.post("/api/users", function (req, res) {
        db.usuarios.create({
            nombre: req.body.nombre,
            email: req.body.email,
            password: req.body.password
        }).then(function (usuario) {
            res.json(usuario);
        });
    });

    //update user
    app.put("/api/users/:id", function (req, res) {
        db.usuarios.create(req.body).then(function (usuarios) {
            res.json(usuarios);
        });
    });


};