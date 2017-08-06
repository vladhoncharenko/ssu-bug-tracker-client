/**
 * Created by Vlad on 02.08.2017.
 */

'use strict';
(function (angular) {
    angular.module('ssuBugTracker').controller('MainPageController', ['$scope', 'dataContext', function ($scope, dataContext) {

        $scope.BUGS_CATEGORIES = {LAST: "last", IN_PROGRESS: 'inProgress', RESOLVED: 'done'};

        $scope.init = function () {
            dataContext.getAllBugsData().then(allBugsData => {
                allBugsData.forEach(item => {
                    item.date = new Date(item.date * 1000).toISOString().slice(0, 10);
                });
                $scope.lastBugs = allBugsData;
                $scope.resolvedBugs = allBugsData.filter(item => item.status == 'resolved');
                $scope.inProgressBugs = allBugsData.filter(item => item.status == 'in_progress');
                $scope.lastBugs = allBugsData.filter(item => item.status == 'new');
                $scope.bugsData = $scope.lastBugs;
            });
        };

        $scope.getBugsData = function (bugTab) {
            switch (bugTab) {
                case $scope.BUGS_CATEGORIES.LAST:
                    $scope.bugsData = $scope.lastBugs;
                    break;
                case $scope.BUGS_CATEGORIES.IN_PROGRESS:
                    $scope.bugsData = $scope.inProgressBugs;
                    break;
                case $scope.BUGS_CATEGORIES.RESOLVED:
                    $scope.bugsData = $scope.resolvedBugs;
                    break;
            }
        }

    }]);
}(angular));