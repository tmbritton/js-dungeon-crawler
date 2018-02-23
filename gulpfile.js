var gulp = require('gulp');
var browserify = require('gulp-browserify');
var runsequence = require('gulp-run-sequence');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

gulp.task('scripts', function() {
    // Single entry point to browserify 
    gulp.src('./app/app.js')
        .pipe(plumber())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(browserify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js'))
});


gulp.task('serve', function() {
  gulp.src('public')
    .pipe(webserver({
        open: true
    }));
});

gulp.task('watch', function() {
  gulp.watch(['app/**/*.js'], ['scripts']);
});

gulp.task('default', function() {
  return runsequence('scripts', 'watch', 'serve');
});
