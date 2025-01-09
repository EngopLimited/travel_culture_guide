const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

//function to compile the scss to css
function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(purgecss({
      content: ['*.html', 'js/**/*.js'], // Paths to HTML and JS files for PurgeCSS
    }))

    // path to the output css file
    .pipe(dest('css'));
}

//watch function for the scss files
function watchTask() {
  watch(['sass/**/*.scss', '*.html', 'js/**/*.js'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
