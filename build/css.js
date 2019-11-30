const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const connect = require('gulp-connect');

const LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: [
            "last 20 version",
            "> 0.5%",
            "not dead",
            "not ie <= 6"
        ]});

// 先将less文件编译成css
function compileLess() {
  return gulp.src('src/less/**/*.less')
    .pipe(less({
        plugins: [autoprefix]
    }))
    .pipe(gulp.dest('src/css'));
}

// 压缩css文件
function miniCss(done) {
  gulp.src('src/css/resets.css')
    .pipe(rename('resets.min.css'))
    .pipe(gulp.dest('dist/css'));
  gulp.src(['src/css/common.css', 'src/css/main.css'])
    .pipe(concat('demo.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename('demo.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
  done();
}

module.exports = {
  compileLess,
  miniCss,
};
