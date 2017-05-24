'use strict';

/*angular.module('myApp.view1', ['ngRoute'])*/

/*.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html'
    controller: 'namesController','customersController'

  });
}])*/


/*.controller('namesController', function($scope) {
		$scope.names = [
			{name:'Jani',country:'Norway'},
			{name:'Hege',country:'Sweden'},
			{name:'Kai',country:'Denmark'}
		];
});

.controller('customersController', function($scope,$http) {
    $http.get("http://www.w3cschool.cc/try/angularjs/data/Customers_JSON.php")
        .success(function(response) {
            $scope.names = response;
        });
});
*/

function customersController($scope,$http) {
   $http.get("http://www.w3cschool.cc/try/angularjs/data/Customers_JSON.php")
        .success(function(response) {
            $scope.names = response;
        });
}


function namesController($scope) {
   $scope.names = [
			{name:'Jani',country:'Norway'},
			{name:'Hege',country:'Sweden'},
			{name:'Kai',country:'Denmark'}
		];
}


