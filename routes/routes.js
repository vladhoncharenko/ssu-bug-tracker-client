/**
 * Created by Vlad on 31.07.2017.
 */

const apiRoutes = require('./api-routes');

module.exports = function (app, viewPath, Bug, passport) {

    apiRoutes(app, Bug);

    app.get('/', function (req, res) {
        res.render(viewPath + 'index.ejs', {
            userPermissions: req.user == undefined ? 'not_authorized' : req.user._doc.facebook.permissions
        });
    });

    app.get('/bug/:id*', function (req, res) {
        res.render(viewPath + 'bug.ejs', {
            bugId: req.params.id
        });
    });

    app.get('/admin', isLoggedIn, function (req, res) {
        res.sendfile(viewPath + 'login.html');
    });

    // Facebook routes
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/admin'
        })
    );

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        res.redirect('/');
    return next();
}
