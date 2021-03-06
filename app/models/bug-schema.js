/**
 * Created by Vlad on 31.07.2017.
 */

let mongoose = require('mongoose');

let BugSchema = mongoose.Schema({

    bugId: {
        type: String
    },

    author: {
        type: Object,
        select: false
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

    file_name: {
        type: String
    },

    file_id: {
        type: String
    },

    status: {
        type: String
    },

    rating:{
        type: Number
    }

});

module.exports = mongoose.model('Bug', BugSchema);