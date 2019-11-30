const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const babel = require('gulp-babel');

function miniJS (done) {
  gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: ['@babel/transform-runtime']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
  done();
}

module.exports = miniJS;
