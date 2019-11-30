const gulp = require('gulp');
const connect = require('gulp-connect');
const css = require('./build/css');

const clean = require('./build/clean');
const watch = require('./build/watch');
const miniHtml = require('./build/html');
const miniImage = require('./build/images');
const miniJS = require('./build/scripts');

// 打包
gulp.task('build', gulp.series(clean, gulp.parallel(
  miniHtml,
  miniImage,
  miniJS,
  gulp.series(css.compileLess, css.miniCss)
)));

// 启动 server
gulp.task('connect', function(done) {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8080,
  });
  done();
});

// 默认 task
gulp.task('default', gulp.series(
  clean,
  miniHtml,
  gulp.parallel(
    gulp.series(css.compileLess, css.miniCss),
    miniImage,
    miniJS,
    watch,
    'connect'
  )
));
