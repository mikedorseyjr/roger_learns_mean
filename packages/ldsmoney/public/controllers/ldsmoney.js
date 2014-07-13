'use strict';

angular.module('mean.ldsmoney',['ngTable']).controller('LdsmoneyController', ['$scope', '$stateParams', '$location', '$filter', 'Global', 'Ldsmoney','ngTableParams',
    function($scope, $stateParams, $location, $filter, Global, Ldsmoney, ngTableParams) {
        $scope.global = Global;
        $scope.ngTableParams = ngTableParams;
        $scope.package = {
            name: 'ldsmoney'
        };

        $scope.getAllIndividuals = function(){
        	var data = [{name: 'Moroni', age: 50},
                {name: 'Tiancum', age: 43},
                {name: 'Jacob', age: 27},
                {name: 'Nephi', age: 29},
                {name: 'Enos', age: 34},
                {name: 'Tiancum', age: 43},
                {name: 'Jacob', age: 27},
                {name: 'Nephi', age: 29},
                {name: 'Enos', age: 34},
                {name: 'Tiancum', age: 43},
                {name: 'Jacob', age: 27},
                {name: 'Nephi', age: 29},
                {name: 'Enos', age: 34},
                {name: 'Tiancum', age: 43},
                {name: 'Jacob', age: 27},
                {name: 'Nephi', age: 29},
                {name: 'Enos', age: 34}];

            $scope.individualsWithMoney = data;

     		$scope.tableParams = new ngTableParams({
		        page: 1,            // show first page
		        count: 10,          // count per page
		        sorting: {
		        	name: 'asc'		// initial sorting
		        }
		    }, {
		        total: data.length, // length of data
		        getData: function($defer, params) {
		        	// use built-in angular filter
		        	var orderedData = params.sorting() ?
                                		$filter('orderBy')(data, params.orderBy()) : data;
		            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		        }
		     });
        };
    }
]);
