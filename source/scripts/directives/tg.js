'use strict';

module.exports = angular.module('gpe.tg', [])
  .controller('gpe.tg.controller', ['$scope', function( $scope ) {

    $scope.getTgTotal = function() {

      var total_tp  = $scope.getTpWithComission(),
          total_oop = $scope.getOopBruto();

      return ( total_tp + total_oop );

    };

    $scope.getTgComission = function() {

      var tp_comission  = $scope.getTpComission(),
          oop_comission = $scope.getOopComission();

      return ( tp_comission + oop_comission );

    };

    $scope.getTgTaxes = function() {

      var oop_taxes = $scope.getOopTaxes();

      return oop_taxes;

    };

  }])
  .directive('tgDirective', function() {
    return {
      restrict  : 'A',
      controller: 'gpe.tg.controller',
      require   : ['^?tpDirective','^?oopDirective']
    };
  });