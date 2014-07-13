'use strict';

angular.module('mean.ldsmoney',['ngTable']).controller('LdsmoneyController', ['$scope', '$stateParams', '$location', '$filter', 'Global', 'Ldsmoney','ngTableParams',
    function($scope, $stateParams, $location, $filter, Global, Ldsmoney, ngTableParams) {
        $scope.global = Global;
        $scope.ngTableParams = ngTableParams;
        $scope.package = {
            name: 'ldsmoney'
        };

        $scope.getAllIndividuals = function(){
        	var data = [
        		{name: 'Moroni', age: 50, role: 'Administrator'},
                {name: 'Tiancum', age: 43, role: 'Administrator'},
                {name: 'Jacob', age: 27, role: 'Administrator'},
                {name: 'Nephi', age: 29, role: 'Administrator'},
                {name: 'Enos', age: 34, role: 'Administrator'},
                {name: 'Tiancum', age: 43, role: 'Moderator'},
                {name: 'Jacob', age: 27, role: 'Moderator'},
                {name: 'Nephi', age: 29, role: 'Moderator'},
                {name: 'Enos', age: 34, role: 'Moderator'},
                {name: 'Tiancum', age: 43, role: 'Moderator'},
                {name: 'Jacob', age: 27, role: 'Moderator'},
                {name: 'Nephi', age: 29, role: 'User'},
                {name: 'Enos', age: 34, role: 'User'},
                {name: 'Tiancum', age: 43, role: 'User'},
                {name: 'Jacob', age: 27, role: 'User'},
                {name: 'Nephi', age: 29, role: 'User'},
                {name: 'Enos', age: 34, role: 'User'}];

            $scope.individualsWithMoney = data;

     		$scope.tableParams = new ngTableParams({
		        page: 1,            // show first page
		        count: 10,          // count per page
		    }, {
		    	groupBy: 'role',
		        total: data.length, // length of data
		        getData: function($defer, params) {
		        	// use built-in angular filter
		        	// Sorting could be taken care of by a sort parameter of "asc" or "desc." However, here we use
		        	// the direction dictated by the table parameters themselves, thus the reason for the tableParams
		        	// from the scope orderBy. This also factors in grouping.
		        	var orderedData = params.sorting() ?
                                		$filter('orderBy')(data, $scope.tableParams.orderBy()) : data;
                    console.log('The ordered data looks like ');
                    console.dir(orderedData);
                    // Slicing below takes care of pagination
		            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		        }
		     });
        };
    }
]);
