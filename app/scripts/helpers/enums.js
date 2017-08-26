/**
 * Created by Vlad on 07.08.2017.
 */

(function (angular) {
    angular.module('ssuBugTracker').factory('enums', [function () {
        let factory = {};

        factory.BUGS_CATEGORIES = {
            NOT_REVIEWED: 'not_reviewed',
            NEW: "new",
            IN_PROGRESS: 'in_progress',
            RESOLVED: 'resolved',
            DELETED: 'deleted'
        };
        factory.BUGS_STATUSES = {
            NOT_REVIEWED: 'Не переглянуто',
            NEW: "Новий",
            IN_PROGRESS: 'В процессі',
            RESOLVED: 'Виконаний',
            DELETED: 'Видалений'
        };
        factory.TAB_NAMES = {
            NOT_REVIEWED: 'Не переглянуті',
            NEW: "Нові",
            IN_PROGRESS: 'В процессі',
            RESOLVED: 'Виконані'
        };
        factory.DEFAULT_PAGE_NUMBER = 1;
        factory.MAX_BUTTONS_AMOUNT = 5;
        factory.MAX_POSTS_AMOUNT_PER_PAGE = 10;
        factory.ADMIN = 'admin';

        return factory;
    }]);

}(angular));