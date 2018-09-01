var db = require('../models/dbconnection'); 

//create class
var Piggy = {
//function to query all items
getAllItems: function (req, res) {
        //console.log(req) to see all the goodies
        let pathname = req._parsedUrl.pathname.split('/');
        //split makes an array, so pick the second row
        let section = pathname[1];
        
        //query the DB using prepared statement
        var results = db.query('SELECT * from ??', [section], function (error, results, fields) {
            //if error, print blank results
            if (error) {
                // console.log(error);
                var apiResult = {};
                
                apiResult.meta = {
                    table: section,
                    type: "collection",
                    total: 0
                }
                //create an empty data table
                apiResult.data = [];
                
                //send the results (apiResult) as JSON to Express (res)
                res.json(apiResult);
                
            }
            
            //make results 
            var resultJson = JSON.stringify(results);
            resultJson = JSON.parse(resultJson);
            var apiResult = {};

                
           // create a meta table to help apps
           //do we have results? what section? etc
            apiResult.meta = {
                table: section,
                type: "collection",
                total: 1,
                total_entries: 0
            }
            
            //add our JSON results to the data table
            apiResult.data = resultJson;
            
            //send JSON to Express
            res.json(apiResult);
        });
    },
};
module.exports = Piggy;