/*
 * Created by vz on 9/2/15.
 */

var constants = require('./constants'),
    express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./database');

var app = new express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(allowCrossDomain);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(constants.root));
//app.use('/', require('./routes/root'));  // web service
app.use('/api', require('./routes/authors')); // rest service


app.listen(constants.port, function(){
    console.log('server is running on port: ' + constants.port);
});