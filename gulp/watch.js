var gulp = require( 'gulp' );

module.exports = function() {

  gulp.watch( './source/scripts/**.js' , [ 'browserify' ] );
  gulp.watch( './source/styles/**.scss', [ 'styles'     ] );

};