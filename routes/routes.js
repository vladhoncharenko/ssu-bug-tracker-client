/**
 * Created by Vlad on 31.07.2017.
 */

const apiRoutes = require('./api-routes');

module.exports = function (app, viewPath, Bug) {

    apiRoutes(app, Bug);

    app.get('/', function (req, res) {
        res.sendfile(viewPath + 'index.html');
    });

    app.get('/bug/:id*', function (req, res) {
        res.render(viewPath + 'bug.ejs', {
            bugId: req.params.id
        });
    });
};