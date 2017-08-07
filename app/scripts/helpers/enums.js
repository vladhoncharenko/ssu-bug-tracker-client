/**
 * Created by Vlad on 07.08.2017.
 */

(function (angular) {
    angular.module('ssuBugTracker').factory('enums', [function () {
        let factory = {};

        factory.BUGS_CATEGORIES = {LAST: "last", IN_PROGRESS: 'inProgress', RESOLVED: 'done'};
        factory.DEFAULT_PAGE_NUMBER = 1;
        factory.MAX_BUTTONS_AMOUNT = 5;
        factory.MAX_POSTS_AMOUNT_PER_PAGE = 5;

        return factory;
    }]);

}(angular));