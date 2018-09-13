var db = require("../models");

module.exports = function(app) {

//- GET heypigu.com/
    app.get("/",function(req, res) {
        res.render("index", {name: "testname"})
    });

//- GET heypigu.com/diario
//- GET heypigu.com/agregar
//- GET heypigu.com/presupuesto
//- GET heypigu.com/configuracion


// - CREATE PDF

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};