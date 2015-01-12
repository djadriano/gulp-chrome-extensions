'use strict';

module.exports = angular.module('gpe.tg', [])
  .directive('tgDirective', function() {
    return {
      restrict  : 'A',
      require   : '^?tpDirective',
      link      : function( scope, element, attrs, tpCtrl ) {

        console.log('tgDirective');

      }
    };
  });