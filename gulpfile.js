const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const prefix = require('gulp-autoprefixer');
const npmMainfiles = require('gulp-npm-mainfiles');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

function libs() {
    del.sync(['./dist/plugins/**']);
    var deletedPath = [
        "dist",
        "-free",
        "@fortawesome",
        "min"
    ];

    return gulp.src(npmMainfiles(),{base:'./node_modules'})
        .pipe(rename(function (path) {
            var _path = path.dirname;
            deletedPath.forEach(element => {
                _path = _path.replace(new RegExp(element,"g"), '');
            });
            path.dirname = _path.toLowerCase();
            path.basename = path.basename.toLowerCase();
            path.extname = path.extname.toLowerCase();
        }))
        .pipe(gulp.dest("dist/plugins"));
};

function style()
{
    return gulp.src('./dev/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(prefix({overrideBrowserslist: ['last 2 versions']}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}


function jsBabel()
{
    return gulp.src('./dev/js/dash.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    //.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
}

function js()
{
    return gulp.src(['./dev/js/**/*.js','!./dev/js/dash.js'])
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
    gulp.watch(['./dev/js/**/*.js','!./dev/dash.js'],js);
    gulp.watch('./dev/js/dash.js',jsBabel);

    gulp.watch('./dist/*.html').on('change',browserSync.reload);
    gulp.watch('./dev/js/**/*.js').on('change',browserSync.reload);
    gulp.watch('./dev/sass/**/*.scss').on('change',browserSync.reload);
}


exports.style = style;
exports.js = js;
exports.jsBabel = jsBabel;
exports.watch = watch;

exports.libs = libs;