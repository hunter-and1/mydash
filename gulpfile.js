const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const prefix = require('gulp-autoprefixer');
const npmDist = require('gulp-npm-dist');
//const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const browserSync = require('browser-sync').create();

function plugins() {
    return gulp.src(npmDist(),{base:'./node_modules'})
            .pipe(gulp.dest("dist/plugins"));
};

function style()
{
    return gulp.src('./dev/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(prefix({overrideBrowserslist: ['last 2 versions']}))
    .pipe(sourcemaps.write('.'))
    //.pipe(gulp.dest('./dist/css'))
    //.pipe(cleanCSS({compatibility: 'ie8'}))
    //.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

function js()
{
    return gulp.src('./dev/js/**/*.js')
    //.pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir : './dist'
        }
    });
    gulp.watch('./dev/sass/**/*.scss',style);
    gulp.watch('./dev/js/**/*.js',js);
    

    gulp.watch('./dist/*.html').on('change',browserSync.reload);
    gulp.watch('./dev/js/**/*.js').on('change',browserSync.reload);
    gulp.watch('./dev/sass/**/*.scss').on('change',browserSync.reload);
}


exports.style = style;
exports.js = js;
exports.watch = watch;

exports.plugins = plugins;