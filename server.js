var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var routes         = require('./lib/controller/routes');
var cons          = require('./lib/controller/config');

try {
    app.use(express.static(__dirname + '/public'));
    app.use(methodOverride('X-HTTP-Method-Override'));
    routes.init(app);

    app.listen(cons.port, function(){
        console.log('Server is running in port: ' + cons.port);
    });
} catch(e) {
    console.log(e);
}