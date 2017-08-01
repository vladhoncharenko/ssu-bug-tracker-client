/**
 * Created by Vlad on 31.07.2017.
 */

let mongoose = require('mongoose');

let BugSchema = mongoose.Schema({

    bugId: {
        type: String
    },

    author: {
        type: Object
    },

    date: {
        type: String
    },

    location: {
        type: Object
    },

    description: {
        type: String
    },

    picId: {
        type: String
    },

    status: {
        type: String
    }

});

module.exports = mongoose.model('Bug', BugSchema);