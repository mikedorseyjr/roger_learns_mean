'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

	$scope.users = [{name: 'Moroni', age: 50},
                {name: 'Tiancum', age: 43},
                {name: 'Jacob', age: 27},
                {name: 'Nephi', age: 29},
                {name: 'Enos', age: 34}];
}]);