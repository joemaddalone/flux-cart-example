var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('browserify', function() {
    gulp.src(['src/js/main.js'])
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy',function() {
    gulp.src(['src/index.html'])
      .pipe(gulp.dest('dist'));
    gulp.src(['src/assets/**/*.*'])
      .pipe(gulp.dest('dist/assets/'))
});

gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch',function() {
    gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default',['lint', 'browserify', 'copy']);
