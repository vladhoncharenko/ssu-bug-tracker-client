/**
 * Created by Vlad on 31.07.2017.
 */

const apiRoutes = require('./apiRoutes');

module.exports = function (app, viewPath, Bug) {

    apiRoutes(app, Bug);
};