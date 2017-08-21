/**
 * Created by Vlad on 02.08.2017.
 */

'use strict';
(function (angular) {
    angular.module('ssuBugTracker').controller('SingleBugController', ['$scope', 'dataContext','enums', 'ratingService',function ($scope, dataContext, enums, ratingService) {

        $scope.vote = ratingService.vote;

        $scope.init = function (bugId) {
            dataContext.getBugDataById(bugId).then(singleBugData => {
                singleBugData.date = new Date(singleBugData.date * 1000).toISOString().slice(0, 10);
                $scope.bugData = singleBugData;
            });
        };

        $scope.getCategoryName = function (status) {
            switch (status) {
                case enums.BUGS_CATEGORIES.NEW:
                    return enums.BUGS_STATUSES.NEW;
                    break;
                case enums.BUGS_CATEGORIES.IN_PROGRESS:
                    return enums.BUGS_STATUSES.IN_PROGRESS;
                    break;
                case enums.BUGS_CATEGORIES.RESOLVED:
                    return enums.BUGS_STATUSES.RESOLVED;
                    break;
                case enums.BUGS_CATEGORIES.NOT_REVIEWED:
                    return enums.BUGS_STATUSES.NOT_REVIEWED;
                    break;
            }
        };

    }]);
}(angular));