module.exports = function (app) {
    // grab 
    var piggy = require('../controllers/piggy');
    var siteRoot = require('../routes/root');

    // Site Index
    app.use('/', siteRoot);

    // Strains
    app.route('/strains')
        .get(piggy.getAllItems);
}