/**
 * Created by Vlad on 02.08.2017.
 */

'use strict';
(function (angular) {
    angular.module('ssuBugTracker').controller('MainPageController', ['$scope', 'dataContext', 'enums', function ($scope, dataContext, enums) {

        $scope.BUGS_CATEGORIES = enums.BUGS_CATEGORIES;

        // Pagination properties
        $scope.maxButtonsAmount = enums.MAX_BUTTONS_AMOUNT;
        $scope.currentPage = enums.DEFAULT_PAGE_NUMBER;
        $scope.maxPostsAmountPerPage = enums.MAX_POSTS_AMOUNT_PER_PAGE;

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
                case enums.BUGS_CATEGORIES.LAST:
                    $scope.bugsData = $scope.lastBugs;
                    break;
                case enums.BUGS_CATEGORIES.IN_PROGRESS:
                    $scope.bugsData = $scope.inProgressBugs;
                    break;
                case enums.BUGS_CATEGORIES.RESOLVED:
                    $scope.bugsData = $scope.resolvedBugs;
                    break;
            }
            $scope.setPage(enums.DEFAULT_PAGE_NUMBER);
        };

        $scope.setPage = function (pageNumber) {
            $scope.currentPage = pageNumber;
        };

        $scope.pageChanged = function () {
            $('html, body').animate({scrollTop: 0}, 'fast');
        };

    }]);
}(angular));