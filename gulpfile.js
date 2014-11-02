var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('css', function() {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('static/css'));
});

gulp.task('js', function() {
  return gulp.src('./bower_components/bootstrap/js/{collapse,transition}.js')
    .pipe(concat('bootstrap.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./static/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/less/*.less', ['css']);
});

gulp.task('default', [
  'js',
  'css',
  'watch',
]);

gulp.task('build', [
  'js',
  'css',
]);
