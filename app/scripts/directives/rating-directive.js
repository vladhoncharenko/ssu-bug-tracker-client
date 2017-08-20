(function (angular) {
    angular.module('ssuBugTracker').directive('bugRating', [function () {
        return {
            templateUrl: '../views/partial/rating.html'
        }
    }]);
}(angular));