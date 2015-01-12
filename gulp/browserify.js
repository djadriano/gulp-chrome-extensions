var gulp     = require( 'gulp' ),
  browserify = require( 'gulp-browserify' ),
  source     = require( 'vinyl-source-stream' ),
  notify     = require( 'gulp-notify' );

module.exports = function() {

  gulp.src( './source/scripts/*.js' )
    .pipe(browserify({
      insertGlobals : false,
      debug         : false
    }))
    .pipe( gulp.dest( './app/assets/scripts' ) )
    .pipe( notify( { message: "browserify executed!" } ) );

};