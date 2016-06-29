var gulp       = require('gulp'),
    Server     = require('karma').Server,
    connect    = require('gulp-connect'),
    opn        = require('opn'),
    nightwatch = require('gulp-nightwatch');

/**
 * Run unit test through karma
 */
gulp.task('specs', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Run E2E test through Selenium
 */
gulp.task('e2e', function() {
  connect.server({
    root: '.',
    port: 8081,
    livereload: false
  });
  
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json',
      cliArgs: ['--env chrome_env']}))
    .on('end', function() {
      connect.serverClose();
    });
});

/**
 * Serve the app and open it
 */
gulp.task('serve', ['watch', 'connect'], function() {
  opn('http://localhost:8080');
});


/**
 * Create web server
 */
gulp.task('connect', function() {
  connect.server({
    root: '.',
    port: 8080,
    livereload: true
  });
});

/**
 * Watch js and index file to livereload
 */
gulp.task('watch', function() {
  gulp.watch(['./index.html', './src/*.js'], function(event) {
    console.log('File ' + event.path + ' ' + event.type + '. Reloading...');
    gulp.src('./src/*.js').pipe(connect.reload());
  });
});

/**
 * Default task
 */
gulp.task('default', ['serve']);