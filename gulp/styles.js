var gulp  = require( 'gulp' ),
  compass = require( 'gulp-compass' ),
  notify  = require( 'gulp-notify' );

module.exports = function() {

  gulp.src( './source/styles/*.scss' )
    .pipe(compass({
      config_file: 'config.rb',
      css        : 'app/assets/styles',
      sass       : 'source/styles'
    }))
    .pipe( gulp.dest( './app/assets/styles' ) )
    .pipe( notify( { message: "styles executed!" } ) );

};