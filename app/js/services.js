/**
 * Created by ejborges on 10/17/2014.
 */

var module = angular.module('services', []);

module.factory(
    'serviceOne',
    [
        '$rootScope', // if you need to get access to angular's $rootScope
        function($rootScope) {
            var something; // you can include variables up here too.

            return {
                methodOne: function(number) {
                    return number + 1;
                },

                methodTwo: function() {

                }
            }
        }
    ]
);

module.factory(
    'serviceTwo',
    [
        function() {
            return {
                methodOne: function(array) {
                    array.push((array[array.length - 2]) + (array[array.length - 1]));
                },

                methodTwo: function() {

                }
            }
        }
    ]
);