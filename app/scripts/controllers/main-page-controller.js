/**
 * Created by Vlad on 02.08.2017.
 */

'use strict';
(function (angular) {
    angular.module('ssuBugTracker').controller('MainPageController', ['$scope', 'dataContext', 'enums', function ($scope, dataContext, enums) {

        $scope.BUGS_CATEGORIES = enums.BUGS_CATEGORIES;
        $scope.BUGS_STATUSES = enums.BUGS_STATUSES;

        // Pagination properties
        $scope.maxButtonsAmount = enums.MAX_BUTTONS_AMOUNT;
        $scope.currentPage = enums.DEFAULT_PAGE_NUMBER;
        $scope.maxPostsAmountPerPage = enums.MAX_POSTS_AMOUNT_PER_PAGE;

        $scope.init = function (userPermissions) {
            dataContext.getAllBugsData().then(allBugsData => {
                allBugsData.forEach(item => {
                    item.date = new Date(item.date * 1000).toISOString().slice(0, 10);
                });
                $scope.resolvedBugs = allBugsData.filter(item => item.status == enums.BUGS_CATEGORIES.RESOLVED);
                $scope.inProgressBugs = allBugsData.filter(item => item.status == enums.BUGS_CATEGORIES.IN_PROGRESS);
                $scope.lastBugs = allBugsData.filter(item => item.status == enums.BUGS_CATEGORIES.NEW);
                $scope.bugsData = $scope.lastBugs;
                $scope.isAdmin = userPermissions == enums.ADMIN;
            });
        };

        $scope.getBugsData = function (bugTab) {
            switch (bugTab) {
                case enums.BUGS_CATEGORIES.NEW:
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

        $scope.setNewStatus = function (bugData, status) {
            let index = $scope.bugsData.indexOf(bugData);
            if (index > -1) {
                $scope.bugsData.splice(index, 1);
            }
            bugData.status = status;
            switch (status) {
                case enums.BUGS_CATEGORIES.NEW:
                    $scope.lastBugs.push(bugData);
                    break;
                case enums.BUGS_CATEGORIES.IN_PROGRESS:
                    $scope.inProgressBugs.push(bugData);
                    break;
                case enums.BUGS_CATEGORIES.RESOLVED:
                    $scope.resolvedBugs.push(bugData);
                    break;
            }
            dataContext.updateStatus(bugData.bugId, status);
        };

        $scope.deleteBug = function (bugData) {
            let index = $scope.bugsData.indexOf(bugData);
            if (index > -1) {
                $scope.bugsData.splice(index, 1);
            }
            dataContext.deleteBug(bugData.bugId);
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
            }
        };

    }]);
}(angular));