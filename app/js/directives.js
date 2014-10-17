/**
 * Created by ejborges on 10/17/2014.
 */

var module = angular.module('directives', []);


// Usage:
// <directive-one></directive-one>
//
//
module.directive('directiveOne', function() {
    return {
        restrict: 'E',
        template: '<p>Button clicks: {{clicks}}</p>'
    }
});