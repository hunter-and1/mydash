const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style()
{
    return gulp.src('./dist/sass/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir : './'
        }
    });
    gulp.watch('./dist/sass/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./dist/js/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;