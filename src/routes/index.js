module.exports = function (app) {
    // grab 
    var piggy = require('../../../piggy.js');
    var siteRoot = require('../../../express.js');

    // Site Index
    app.use('/', siteRoot);

    // Strains
    app.route('/piggy')
        .get(piggy.getAllItems);
}