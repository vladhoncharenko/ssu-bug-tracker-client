/**
 * Created by Vlad on 02.08.2017.
 */

'use strict';

(function (angular) {
    angular.module('ssuBugTracker').factory('dataContext', ['$http', function ($http) {

        let factory = {};

        factory.getBugDataById = function (bugId) {
            return $http({
                method: 'POST',
                url: '/getBugData',
                data: {id: bugId}
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                alert('Error while getting bug data! Please, reload page.')
            });
        };

        factory.getAllBugsData = function () {
            return $http({
                method: 'GET',
                url: '/getAllBugsData'
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                alert('Error while getting all bugs data! Please, reload page.')
            });
        };

        factory.updateStatus = function (bugId, newStatus) {
            return $http({
                method: 'POST',
                url: '/updateStatus',
                data: {id: bugId, status: newStatus}
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                alert('Error while updating bug data! Please, reload page.')
            });
        };

        factory.deleteBug = function (bugId) {
            return $http({
                method: 'POST',
                url: '/deleteBug',
                data: {id: bugId}
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                alert('Error while deleting bug! Please, reload page.')
            });
        };

        factory.vote = function (bugId, increment) {
            return $http({
                method: 'POST',
                url: '/vote',
                data: {id: bugId, increment:increment}
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                alert('Error while voting! Please, reload page.')
            });
        };

        return factory;

    }]);
}(angular));