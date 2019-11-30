const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');

function miniImage() {
  return gulp.src('src/images/**/*')
    // .pipe(imagemin([
    //   imagemin.optipng({ optimizationLevel: 5 })
    // ]))
    .pipe(gulp.dest('dist/images'));
}

module.exports = miniImage;
