'use strict';

module.exports = angular.module('gpe.oop', [])
  .controller('gpe.oop.controller', ['$scope', function( $scope ) {

    $scope.oop = [
      { value: '' }
    ];

    $scope.oop_comission = '';
    $scope.oop_taxes     = '';

    $scope.getOop = function() {

      var total = 0;

      $scope.oop.forEach(function( item, count ) {
        total = total + item.value
      });

      return total;

    };

    $scope.getOopComission = function() {
      return ( $scope.getOop() * $scope.oop_comission / 100 );
    };

    $scope.getOopTaxes = function() {
      return ( $scope.getOopBruto() * $scope.oop_taxes / 100 );
    };

    $scope.getOopWithComission = function() {
      return ( $scope.getOop() + $scope.getOopComission() );
    };

    $scope.getOopBruto = function() {

      var calc = ( $scope.getOopWithComission() / 0.95 );

      return calc;

    };

    $scope.getOopWithTaxes = function() {
      return ( $scope.getOopBruto() + $scope.getOopTaxes() );
    };

    $scope.addOop = function() {
      $scope.oop.push({ value: '' });
    };

    $scope.removeOop = function( index ) {
      if( index > 0 ) {
        $scope.oop.splice( index, 1 );
      }
    };

  }])
  .directive('oopDirective', function() {
    return {
      restrict  : 'A',
      controller: 'gpe.oop.controller'
    }
  });