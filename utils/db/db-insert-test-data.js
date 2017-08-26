/**
 * Created by Vlad on 31.07.2017.
 */

/*
 * To add bugs test data to db run: node db-insert-test-data.js <argument>
 *     To display bugs with image - put image 0001.jpg to /pics directory
 * Possible arguments:
 *   bugs - bugs test data
 * */

let mongoose = require('mongoose'),
    bugSchema = require('../../app/models/bug-schema'),
    configDB = require('../../config/mongo-db-config'),
    testBugsData = require('./test-data').bugs,
    testData;

mongoose.connect(configDB.url, {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
});

switch (process.argv[2]) {
    case 'bugs':
        testData = testBugsData;
        break;
}

bugSchema.collection.insertMany(testBugsData, function (err, db) {
    mongoose.connection.close();
});