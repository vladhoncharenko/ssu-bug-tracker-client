/**
 * Created by Vlad on 07.08.2017.
 */

(function (angular) {
    angular.module('ssuBugTracker').factory('enums', [function () {
        let factory = {};

        factory.BUGS_CATEGORIES = {NEW: "new", IN_PROGRESS: 'in_progress', RESOLVED: 'resolved', DELETED: 'deleted'};
        factory.BUGS_STATUSES = {NEW: "Новий", IN_PROGRESS: 'В процессі', RESOLVED: 'Виконаний', DELETED: 'Видалений'};
        factory.DEFAULT_PAGE_NUMBER = 1;
        factory.MAX_BUTTONS_AMOUNT = 5;
        factory.MAX_POSTS_AMOUNT_PER_PAGE = 5;
        factory.ADMIN = 'admin';

        return factory;
    }]);

}(angular));