'use strict';

module.exports = angular.module('gpe.tp', [])
  .controller('gpe.tp.controller', ['$scope', function( $scope ) {

    $scope.tp = [
      { value: 0 }
    ];

    $scope.comission = 0;

    $scope.getTp = function() {

      var total = 0;

      $scope.tp.forEach(function( item, count ) {
        total = total + item.value
      });

      return total;

    }

    $scope.getTpComission = function() {
      return ( $scope.getTp() * $scope.comission / 100 );
    };

    $scope.getTpWithComission = function() {
      return parseInt( $scope.getTp() + $scope.getTpComission() );
    };

    $scope.addTp = function() {
      $scope.tp.push({ value: 0 });
    };

    $scope.removeTp = function( index ) {
      if( index > 0 ) {
        $scope.tp.splice( index, 1 );
      }
    };

  }])
  .directive('tpDirective', function() {
    return {
      restrict  : 'A',
      controller: 'gpe.tp.controller'
    };
  });