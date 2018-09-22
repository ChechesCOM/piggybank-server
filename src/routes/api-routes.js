var db = require("../models");

module.exports = function (app) {


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

    app.get("/api/gastos/diary/:usuarioId", function (req, res) {
        db.gastos.findAll({
            usuarioId: req.params.usuarioId,
            attributes: ['fecha', [db.sequelize.fn('SUM', db.sequelize.col('monto')), 'total']],
            group: ['fecha']

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

    app.post("/api/gasto/new", function (req, res) {
        db.gastos.create({
            fecha: req.body.fecha,
            categoria: req.body.categoria,
            concepto: req.body.concepto,
            tipo_de_pago: req.body.tipo_de_pago,
            monto:  req.body.monto,
            mensualidad: req.body.mensualidades,
            numero_de_meses: req.body.numero_de_meses,
            usuarioId: req.body.usuarioId
        }).then(function (gastoNuevo) {
            res.json(gastoNuevo);
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
            nombre: req.params.nombre,
            email: req.params.email,
            password: req.params.password
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