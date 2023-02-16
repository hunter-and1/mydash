import gulp from 'gulp';
//const { src, dest, series, watch,parallel } = gulp;
import gulpSass from 'gulp-sass';
import sass from 'sass';
const scss = gulpSass(sass);
import autoPrefixer from 'gulp-autoprefixer';
import cssMinify from 'gulp-clean-css';
import jsMinify from 'gulp-terser';
import contact from "gulp-concat";
import uglify from "gulp-uglify";
import rename from "gulp-rename";

import del from 'del';

gulp.task('clean',async function(){
    return del(['dist']);
});


gulp.task('fonts',async function(){
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts/'))
})

gulp.task('styles', async function(){
    return gulp.src('./src/scss/**/*.scss')
    .pipe(scss())
    .pipe(autoPrefixer('last 2 versions'))
    .pipe(cssMinify())
    .pipe(gulp.dest('./dist/assets/css/'))
});

gulp.task('scripts',async function(){
    return gulp.src('./src/js/**/*.js')
    .pipe(jsMinify())
    .pipe(gulp.dest('./dist/assets/js/'))
})

gulp.task('php',async function(){
    return gulp.src('./src/**/*.php')
    .pipe(gulp.dest('./dist/'))
})

gulp.task('styles:vendor',async function(){
    return gulp.src([
        //'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/overlayscrollbars/css/OverlayScrollbars.min.css',
        'node_modules/select2/dist/css/select2.min.css',
    ])
    .pipe(contact("vendor.min.css"))
    //.pipe(cssMinify())
    .pipe(gulp.dest('./dist/assets/css/'))
});

gulp.task('scripts:vendor',async function(){
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/overlayscrollbars/js/jquery.overlayScrollbars.min.js',
        //'node_modules/select2/dist/js/select2.min.js',
    ])
    .pipe(contact("vendor.min.js"))
    //.pipe(jsMinify())
    .pipe(gulp.dest('./dist/assets/js/'))
});


gulp.task('watch',async function(){
    gulp.watch("./src/*.php", gulp.series(['php']));
    gulp.watch("./src/fonts/**/*", gulp.series(['fonts']));
    gulp.watch("./src/scss/**/*.scss", gulp.series(['styles']));
    gulp.watch("./src/js/**/*.js", gulp.series(['scripts']));
})

//async
gulp.task('test', gulp.series(['styles:vendor']))
gulp.task('dev', gulp.series(['clean','fonts','styles','styles:vendor','scripts','scripts:vendor','php','watch']))
gulp.task('build', gulp.series(['clean','fonts','styles','styles:vendor','scripts','scripts:vendor','php']))
  
// gulp.task('dev', function(){
//     return series(clean,styles,styles_libs,scripts,scripts_libs)
// });
// gulp.task('build', series(clean, styles,styles_libs,scripts,scripts_libs));
