'use strict';

module.exports = angular.module('gpe.oop', [])
  .controller('gpe.oop.controller', ['$scope', function( $scope ) {

    console.log('gpe.oop.controller');

  }])
  .directive('oopDirective', function() {
    return {
      restrict  : 'A',
      controller: 'gpe.oop.controller',
      link      : function( scope, element, attrs ) {

        console.log('oopDirective');

      }
    }
  });