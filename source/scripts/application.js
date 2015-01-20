require( 'angular/angular' );

var tp  = require( './directives/tp'  );
var oop = require( './directives/oop' );
var fee = require( './directives/fee' );
var tg  = require( './directives/tg'  );

angular.module('gpe', [
  tp.name,
  oop.name,
  fee.name,
  tg.name
]);