var gulp = require('gulp'),
  jade = require('gulp-jade'),
  browserify = require('gulp-browserify'),
  concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src(['./app/js/main.js'])
    .pipe(browserify({
      debug: true
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js/'))
});


gulp.task('views', function() {
  gulp.src('./app/views/**/*')
    .pipe(jade())
    .pipe(gulp.dest('dist/views/'));
});
