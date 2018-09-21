var express = require('express');
var morgan = require('morgan');
var app = express();
morgan('tiny');
var router = express.Router();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var db = require("./src/models");
app.use(express.static("public"));
require("./src/routes/api-routes")(app);
require("./src/routes/html-routes")(app);

//define a route, usually this would be a bunch of routes imported from another file

//app.set('view engine', 'html');
//midleware
//router.get(app);
//app.use("/api", router);
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//start Express server on defined port



//log to console to let us know it's working

db.sequelize.sync().then(function() {
    app.listen(port, function() {
      console.log("Pigy-bank API " + port);
    });
  });

  module.exports = app;
