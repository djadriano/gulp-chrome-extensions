'use strict';

module.exports = angular.module('gpe.tg', [])
  .controller('gpe.tg.controller', ['$scope', function( $scope ) {


  }])
  .directive('tgDirective', function() {
    return {
      restrict  : 'A',
      require   : ['^tpDirective', 'tgDirective'],
      controller: 'gpe.tg.controller',
      link      : function( scope, element, attrs, tpCtrl ) {

        console.log('tgDirective');

      }
    };
  });