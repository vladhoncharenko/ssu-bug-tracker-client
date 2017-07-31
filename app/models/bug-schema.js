/**
 * Created by Vlad on 31.07.2017.
 */

let mongoose = require('mongoose');
// ToDo: update bug schema
let BugSchema = mongoose.Schema({

    bugId: {
        type: String
    },

    file_name: {
        type: String
    },

    file_id: {
        type: String
    },

    caption: {
        type: String
    },

    description: {
        type: String
    },

    coordinates: {
        type: Array
    },

    user: {
        type: Object
    },

    date: {
        type: String
    }

});

module.exports = mongoose.model('Bug', BugSchema);