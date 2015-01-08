var gulp = require( 'gulp' ),
  del    = require( 'del' ),
  notify = require( 'gulp-notify' );

module.exports = function( cb ) {

  del( [ './app/assets/scripts', './app/assets/styles', './app/assets/images' ], cb )

};