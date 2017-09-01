/**
 * Created by Vlad on 31.07.2017.
 */

const apiRoutes = require('./api-routes');
const PDFDocument = require('pdfkit');
let bugUrl= 'ssubugtracker.com/bug/';

module.exports = function (app, viewPath, Bug, passport, fs) {

    apiRoutes(app, Bug, fs);

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
        res.sendFile(viewPath + 'login.html');
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

            doc.registerFont('OpenSans-Bold', './fonts/OpenSans-Bold.ttf', 'Open Sans');

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
            doc.font('./app/content/fonts/OpenSans-Bold.ttf')
            doc.text(bugUrl + bug.bugId, 220, 50)

            doc.text('Дата :  ' + date, 290, 110);

            let img_path = './pics/' + bug.file_name

            doc.image(img_path, 50, 110, {width: 200, height:250})

            doc.text('Корпус:  ' + building, 290, 140);
            doc.text('Аудиторія   :   ' + room, 290, 170);
            doc.text('Опис проблеми:   ' + description, 290, 200);

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
