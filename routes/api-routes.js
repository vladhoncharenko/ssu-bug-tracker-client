/**
 * Created by Vlad on 31.07.2017.
 */

let picDownloader = require('../app/helpers/pic-downloader');

module.exports = function (app, Bug) {

    app.get('/getAllBugsData', (req, res) => {
        Bug.find({}, function (err, bugs) {
            if (err) console.log(err);
            res.send(bugs);
        });
    });

    app.post('/getBugData', (req, res) => {
        Bug.findOne({'bugId': req.body.id}, function (err, bug) {
            if (err) console.log(err);
            res.send(bug);
        });
    });

    app.post('/savePic', (req, res) => {
        picDownloader.downloadPic(req.body.src, 'pics/' + req.body.filename, function () {
        }).catch(error => {
            console.log('Error while pic downloading: ' + error);
        });
    });

    app.post('/updateStatus', (req, res) => {
        let isAdmin = req.user == undefined ? false : req.user._doc.facebook.permissions == 'admin';
        if (isAdmin) {
            Bug.findOne({'bugId': req.body.id}, function (err, bug) {
                if (err) console.log(err);
                bug.status = req.body.status;
                bug.save();
                res.sendStatus(200);
            });
        }
    });
};