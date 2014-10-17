/**
 * Created by ejborges on 10/17/2014.
 */

var module = angular.module("controllers", ['services']);

module.controller(
    'controllerOne',
    [
        '$scope',
        '$location',
        'serviceOne',
        function($scope, $location, serviceOne) {
            $scope.number = 0;
            $scope.clicks = 0;

            $scope.clickMe = function() {
                $scope.clicks = $scope.clicks + 1;
                $scope.number = serviceOne.methodOne($scope.number);
            };

            $scope.goToPage2 = function() {
                $location.path('/page2').replace();  // replace is so that this page change doesn't get saved to browser's history
            };
        }
    ]
);

module.controller(
    'controllerTwo',
    [
        '$scope',
        '$location',
        'serviceTwo',
        function($scope, $location, serviceTwo) {
            $scope.numbers = [0, 1];
            $scope.clicks = 0;

            $scope.clickMe = function() {
                $scope.clicks = $scope.clicks + 1;
                serviceTwo.methodOne($scope.numbers);
            };

            $scope.goToPage1 = function() {
                $location.path('/page1').replace();
            };
        }
    ]
);