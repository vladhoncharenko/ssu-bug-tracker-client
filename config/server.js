/**
 * Created by Vlad on 31.07.2017.
 */

let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let path = require('path');
let viewPath = path.join(__dirname, '../app/views/');
let flash = require('connect-flash');
let passport = require('passport');
let Bug = require('../app/models/bug-schema');
let configDB = require('../config/mongo-db-config');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let fs = require('fs');

require('../config/passport')(passport);
mongoose.connect(configDB.url, {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
});
mongoose.Promise = global.Promise;
app.use(session({
    secret: 'ewfr43tregfwqdeq3fwq', // session secret
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(path.join(__dirname, '../app/')));
app.use('/pics', express.static(path.join(__dirname, '../pics')));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7777');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
require('../routes/routes.js')(app, viewPath, Bug, passport, fs);

http.listen(app.get('port'), function () {
    console.log('listening on *:' + app.get('port'));
});