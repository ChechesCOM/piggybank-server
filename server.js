const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4200;


//define a route, usually this would be a bunch of routes imported from another file
router.get('/', function (req, res, next) {
    res.send('Welcome to the Piggy-Bank API');
});

//add routes to express app
routes(app);

//start Express server on defined port
app.listen(port);

//log to console to let us know it's working
console.log('piggy-bank API ' + port);