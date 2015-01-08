var gulp     = require( 'gulp' ),
  browserify = require( 'browserify' ),
  source     = require( 'vinyl-source-stream' ),
  notify     = require( 'gulp-notify' );

module.exports = function() {

  browserify( [ './source/scripts/application.js' ] )
    .bundle()
    .pipe( source( 'application.js' ) )
    .pipe( gulp.dest( './app/assets/scripts' ) )
    .pipe( notify( { message: "browserify executed!" } ) );

};