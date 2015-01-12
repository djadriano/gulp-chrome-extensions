require( 'angular/angular' );

'use strict';

module.exports = angular.module('gpe.tp', [])
  .controller('gpe.tp.controller', ['$scope', function( $scope ) {

    $scope.tp = [
      { value: 0 }
    ];

    $scope.comission = 0;

    $scope.tptotal = function() {

      var total = 0;

      $scope.tp.forEach(function( item, count ) {
        total = total + item.value
      });

      return total * $scope.comission;

    };

    $scope.addTp = function() {
      $scope.tp.push({ value: 0 });
    };

  }])
  .directive('tpDirective', function() {
    return {
      restrict  : 'A',
      controller: 'gpe.tp.controller',
      link      : function( scope, element, attrs ) {

        console.log('tpDirective');

      }
    };
  });