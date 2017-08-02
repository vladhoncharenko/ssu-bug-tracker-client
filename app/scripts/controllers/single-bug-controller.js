/**
 * Created by Vlad on 02.08.2017.
 */

'use strict';
(function (angular) {
    angular.module('ssuBugTracker').controller('SingleBugController', ['$scope', 'dataContext', function ($scope, dataContext) {

        $scope.init = function (bugId) {
            dataContext.getBugDataById(bugId).then(singleBugData => {
                singleBugData.date = new Date(singleBugData.date * 1000).toISOString().slice(0, 10);
                $scope.singleBugData = singleBugData;
            });
        };

    }]);
}(angular));