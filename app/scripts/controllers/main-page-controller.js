/**
 * Created by Vlad on 02.08.2017.
 */

'use strict';
(function (angular) {
    angular.module('ssuBugTracker').controller('MainPageController', ['$scope', 'dataContext', function ($scope, dataContext) {

        $scope.init = function () {
            dataContext.getAllBugsData().then(allBugsData => {
                allBugsData.forEach(item => {
                    item.date = new Date(item.date * 1000).toISOString().slice(0, 10);
                });
                $scope.allBugsData = allBugsData;
            });
        };

    }]);
}(angular));