/**
 * Created by ejborges on 10/17/2014.
 */

var module = angular.module('directives', []);


// Usage:
// <directive-one></directive-one>

module.directive('directiveOne', function() {
    return {
        restrict: 'E', // This element is restricted to element usage.
        template: '<p>Button clicks: {{clicks}}</p>' // This HTML gets inserted into whatever other .html file you
                                                     // placed <directive-one></directive-one> and has a controller
                                                     // with a scope variable clicks.
    }
});