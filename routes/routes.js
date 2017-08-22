/**
 * Created by Vlad on 31.07.2017.
 */

const apiRoutes = require('./api-routes');
const PDFDocument = require('pdfkit');

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

    app.get('/bug-pdf/:id', (req, res) => {

        Bug.findOne({'bugId': req.params.id}, function (err, bug) {

            if (err) console.log(err);
            //console.log(bug)

            const doc = new PDFDocument()

            let filename = bug.bugId;
            filename = encodeURIComponent(filename) + '.pdf'

            res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
            res.setHeader('Content-type', 'application/pdf')

            const date = new Date(bug.date * 1000).toISOString().slice(0, 10);
            const building = bug.location.building;
            const room = bug.location.room;
            const description = bug.description;
            const caption = bug.caption;

            doc.y = 300
            doc.font('Times-Roman');
            doc.text('Баг №' + bug.bugId, 250, 50)

            doc.text('Дата створення:  ' + date, 190, 75);
            doc.text('Корпус:  ' + building, 250, 205);
            doc.text('Аудиторія або інше' + room, 180, 150);
            doc.text('Опис проблеми' + description, 215, 175);
            doc.text(caption, 250, 200);

            doc.pipe(res)
            doc.end()
        });

    })

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        res.redirect('/');
    return next();
}
