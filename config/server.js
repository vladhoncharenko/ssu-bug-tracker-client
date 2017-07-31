/**
 * Created by Vlad on 31.07.2017.
 */

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let path = require('path');
let viewPath = path.join(__dirname, 'app/views/');

let Bug = require('../app/models/bug-schema');
let configDB = require('../config/mongo-db-config');
mongoose.connect(configDB.url, {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use('/',express.static(path.join(__dirname, 'app/')));
app.use('/pics',express.static(path.join(__dirname, '/pics')));
app.use('/node_modules', express.static(__dirname + '/node_modules/angular'));
app.set('view engine', 'ejs');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7777');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
require('../routes/routes.js')(app, viewPath, Bug);

http.listen(app.get('port'), function () {
    console.log('listening on *:' + app.get('port'));
});