/**
 * Created by Vlad on 31.07.2017.
 */

let picDownloader = require('../app/helpers/pic-downloader');
let utils = require('../app/helpers/utils');
const request = require("request");

module.exports = function (app, Bug, fs) {

    app.get('/getAllBugsData', (req, res) => {
        Bug.find({}, function (err, bugs) {
            if (err) console.log(err);
            bugs.sort(utils.compareBugsByCreationDate);
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
        picDownloader.downloadPic(req.body.src, 'pics/' + req.body.filename, req.body.ip, req.body.bugId, function () {
            
        }).then((response)=>{
            console.log(response);
            res.sendStatus(200);
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

    app.post('/deleteBug', (req, res) => {
        let isAdmin = req.user == undefined ? false : req.user._doc.facebook.permissions == 'admin';
        if (isAdmin) {
            Bug.findOneAndRemove({'bugId': req.body.id}, function (err, bug) {
                if (err) console.log(err);
                fs.unlink('pics/' + bug.file_name, (err) => {
                    if (err) throw err;
                    res.sendStatus(200);
                });
            });

        }
    });

    app.post('/vote', (req, res) => {
        let increment = req.body.increment == 1 ? 1 : req.body.increment == -1 ? -1 : 0;
        Bug.findOne({'bugId': req.body.id}, function (err, bug) {
            if (err) console.log(err);
            bug.rating += increment;
            bug.save();
            res.sendStatus(200);
        });
    });

};
