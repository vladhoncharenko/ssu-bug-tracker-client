'use strict';

(function (angular) {
    angular.module('ssuBugTracker').factory('ratingService', ['dataContext', function (dataContext) {

        let factory = {};

        factory.vote = function (bug, increment) {
            // ToDo: put voted flag in session.
            if (bug.voted != true) {
                bug.rating += increment;
                dataContext.vote(bug.bugId, increment);
            }
            bug.voted = true;
        };

        return factory;

    }]);
}(angular));