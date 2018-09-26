var express = require('express');
//var morgan = require('morgan');
var app = express();
//morgan('tiny');
var router = express.Router();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var db = require("./models");

// require("./routes/html-routes")(app);


//midleware

//app.set('view engine', 'html');
//router.get(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
require("./routes/api-routes")(app);

//start Express server on defined port


//log to console to let us know it's working

db.sequelize.sync().then(function() {
    app.listen(port, function() {
      console.log("Pigy-bank API " + port);
    });
  });

  module.exports = app;
