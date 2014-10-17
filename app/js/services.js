/**
 * Created by ejborges on 10/17/2014.
 */

var module = angular.module('services', []);

module.factory(
    'serviceOne',
    [
        '$rootScope',
        function($rootScope) {
            var something;

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
        '$rootScope',
        function($rootScope) {
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