require( 'angular/angular' );

var tp  = require( './directives/tp' );
var oop = require( './directives/oop' );
var tg  = require( './directives/tg'  );

angular.module('gpe', [
  tp.name,
  oop.name,
  tg.name
]);