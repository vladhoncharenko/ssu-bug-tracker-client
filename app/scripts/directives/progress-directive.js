/**
 * Created by Vlad on 09.08.2017.
 */

(function (angular) {
    angular.module('ssuBugTracker').directive('progressPercents', [function () {
        return {
            templateUrl: '../views/partial/progress.html'
        }
    }]);
}(angular));