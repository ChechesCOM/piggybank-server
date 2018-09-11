var db = require("../models");

module.exports = function (app) {

    //get all users
    app.get("/api/users", function (req, res) {
        db.usuarios.findAll({}).then(function (usuarios) {
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