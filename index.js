module.exports = function (app) {
    // grab 
    var piggy = require('./piggy.js');
    var siteRoot = require('./express.js');

    // Site Index
    app.use('/', siteRoot);

    // Strains
    app.route('/strains')
        .get(piggy.getAllItems);
}