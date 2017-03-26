'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/css/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/css/**/*.scss','./src/css/components/**/*.scss'], ['sass']);
});
