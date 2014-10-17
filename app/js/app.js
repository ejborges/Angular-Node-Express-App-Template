/**
 * Created by ejborges on 10/17/2014.
 */

var app = angular.module('app', ['ngRoute', 'controllers', 'directives']);

app.config(
    [
        '$routeProvider',
        '$httpProvider',
        function($routeProvider, $httpProvider) {

            // The following changes are needed to enable CORS (Cross-Origin Resource Sharing) support for this client
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            $routeProvider.when(
                '/page1',
                {
                    templateUrl: 'partials/page1.html',
                    controller: 'controllerOne'
                }
            ).when(
                '/page2',
                {
                    templateUrl: 'partials/page2.html',
                    controller: 'controllerTwo'
                }
            ).otherwise({redirectTo: '/page1'});
        }]);

app.run([
    '$rootScope',
    function($rootScope) {
        // do something/set up some configuration when the app starts running
}]);