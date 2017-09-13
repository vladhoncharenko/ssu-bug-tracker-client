/**
 * Created by Vlad on 22.05.2017.
 */

const request = require("request");
const fs = require('fs');

let downloadPic = function (uri, filename, callback) {
    console.log('uri:');
    console.log(uri);
    console.log('filename');
    console.log(filename);
    return new Promise(function (resolve, reject) {
        request.head(uri, function (err, res, body) {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
            }
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            console.log('pic upl');
            resolve('ok');
        });
    });
};

module.exports = {
    downloadPic: downloadPic
};