'use strict';

module.exports = angular.module('gpe.fee', [])
  .controller('gpe.fee.controller', ['$scope', function( $scope ) {

    $scope.fee = [
      {
        dep   : '',
        hr    : '',
        hours : '',
        budget: ''
      }
    ];

    $scope.fee_taxes = '';

    $scope.getFee = function() {

      var total = 0;

      $scope.fee.forEach(function( item, count ) {
        total = total + item.budget
      });

      return total;

    };

    $scope.getFeeImposto = function() {
      return ( $scope.getFee() / 0.95 );
    };

    $scope.getFeeTaxes = function() {
      return ( $scope.getFeeImposto() * $scope.fee_taxes / 100 );
    };

    $scope.getFeeWithTaxes = function() {
      return ( $scope.getFee() + $scope.getFeeTaxes() );
    };

    $scope.getBudget = function( index ) {

      var item = $scope.fee[ index ];

      item.budget = ( item.hours * item.hr );

      return item.budget;

    };

    $scope.addFee = function() {
      $scope.fee.push({
        dep   : '',
        hr    : '',
        hours : '',
        budget: ''
      });
    };

    $scope.removeFee = function( index ) {
      if( index > 0 ) {
        $scope.fee.splice( index, 1 );
      }
    };

  }])
  .directive('feeDirective', function() {
    return {
      restrict  : 'A',
      controller: 'gpe.fee.controller'
    }
  });