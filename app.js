var express = require('express');
var morgan = require('morgan');
var app = express();
morgan('tiny');
var router = express.Router();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var db = require("./src/models");
require("./src/routes/api-routes")(app);
require("./src/routes/html-routes")(app);

//define a route, usually this would be a bunch of routes imported from another file
router.get('/', function (req, res, next) {
    res.send('Welcome to the Piggy-Bank API');
});


//midleware
router.get(app);
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
//start Express server on defined port



//log to console to let us know it's working

db.sequelize.sync().then(function() {
    app.listen(port, function() {
      console.log("Pigy-bank API " + port);
    });
  });

  module.exports = app;
