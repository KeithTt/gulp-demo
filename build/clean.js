const gulp = require('gulp');
const clean = require('gulp-clean');

// 清理文件
function cleanDist() {
  return gulp.src('dist/*', {read: false}).pipe(clean());
}

module.exports = cleanDist;
