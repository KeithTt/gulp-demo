const gulp = require('gulp');
const css = require('./css');
const miniHtml = require('./html');
const miniImage = require('./images');
const miniJS = require('./scripts');

function watchAll(done) {
  gulp.watch('src/less/**/*.less', gulp.series(css.compileLess, css.miniCss));
  gulp.watch('src/index.html', gulp.series(miniHtml));
  gulp.watch('src/images/**/*', gulp.series(miniImage));
  gulp.watch('src/js/**/*.js', gulp.series(miniJS));
  done();
}

module.exports = watchAll;
