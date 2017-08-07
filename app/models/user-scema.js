/**
 * Created by Vlad on 07.08.2017.
 */

let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({

    facebook: {
        id: String,
        token: String,
        email: String,
        name: String,
        permissions: String
    }
});

module.exports = mongoose.model('User', UserSchema);
