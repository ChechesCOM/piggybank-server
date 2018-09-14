var db = require("../models");

module.exports = function (app) {

    /*Rutas

    Perfil

    GET - /api/config/perfil
    POST - /api/config/perfil
    UPDATE - /api/config/perfil
    DELETE - /api/config/perfil

    Movimientos

    GET - /api/movimientos
    POST - /api/movimientos
    UPDATE - /api/movimientos/:id
    DELETE - /api/movimientos/:id

    Home

    GET - /api/total/:params Regresa la suma de los gastos totales y el presupuesto total. Toma como parametro semana/mes/año.
    GET - /api/totalcategoria/:params Regresa la suma de los gastos por categoria y el presupuesto total. Toma como parametro semana/mes/año

    Diario

    GET - /api/diario/:params Regresa todos los movimientos en el periodo de tiempo seleccionado
    Duda: Mejor trabajarlos en el backend o en el frontend


    {
        movimiento1 = {
            monto: "",
            concepto: "",
            fecha: "",
            Lugar/Marca: "",
            Categoria: "",
            TipoDePago: "",
            Meses/Contado
        },
        movimiento2 = {

        },
        movimiento3 = {

        }
    }


     */


    //get all users
    app.get("/api/users", function (req, res) {
        db.usuarios.findAll({}).then(function (usuarios) {
            res.json(usuarios);
        });
    });

    //get all users
    app.get("/api/users", function (req, res) {
        db.usuarios.findAll({
            where: {
                id: req.params.id,
                date: {[Op.between]: [fecha1, fecha2]}
            },
            group: "name",
            order: "name"
        }).then(function (usuarios) {
            res.json(usuarios);
        });
    });


    //get user by id
    app.get("/api/users/:id", function (req, res) {
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
        db.client.create({
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
}