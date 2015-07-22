import gulp from 'gulp';

import uglify from 'gulp-uglify';
import jshint from 'gulp-jshint';
import rename from 'gulp-rename';
import babel from 'gulp-babel';

gulp.task('minify', () => {
  gulp.src('./isRetina.babel.js')
    .pipe(jshint())
    .pipe(babel())
    .pipe(rename('isRetina.js'))
    .pipe(gulp.dest('./'));

  gulp.src('./isRetina.babel.js')
    .pipe(jshint())
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('isRetina.min.js'))
    .pipe(gulp.dest('./'));
});
