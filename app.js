var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 4200;
var bodyParser = require('body-parser');
var db = require("./src/models");

//define a route, usually this would be a bunch of routes imported from another file
router.get('/', function (req, res, next) {
    res.send('Welcome to the Piggy-Bank API');
});

//add routes to express app7

router.get(app);
app.use(bodyParser.json());



app.use(bodyParser.json());
app.use("/", router);
//start Express server on defined port
app.listen(port);


//log to console to let us know it's working

db.sequelize.sync().then(function() {
    app.listen(port, function() {
     // console.log("Pigy-bank API " + port);
    });
  });

  module.exports = app;
