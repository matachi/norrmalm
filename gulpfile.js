var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('css', function() {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest('./dist/static/css'));
});

gulp.task('js', function() {
  return gulp.src('./bower_components/bootstrap/js/{collapse,transition}.js')
    .pipe(concat('bootstrap.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/static/js'));
});

gulp.task('templates', function() {
  return gulp.src('./src/templates/**')
    .pipe(gulp.dest('./dist/templates'));
});

gulp.task('watch', function() {
  gulp.watch('src/less/*.less', ['css']);
  gulp.watch('src/templates/**', ['templates']);
});

gulp.task('default', [
  'js',
  'css',
  'templates',
  'watch',
]);

gulp.task('build', [
  'js',
  'css',
]);
