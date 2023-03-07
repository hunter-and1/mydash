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
import replace from "gulp-replace";

import merge from 'merge-stream';

import del from 'del';

gulp.task('clean',async function(){
    return del(['dist']);
});

gulp.task('fonts',async function(){
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts/'))
})

gulp.task('img',async function(){
    return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/assets/img/'))
})

gulp.task('styles', async function(){
    return gulp.src('./src/scss/**/*.scss')
    .pipe(scss())
    .pipe(autoPrefixer('last 2 versions'))
    //.pipe(cssMinify({keepSpecialComments : 0}))
    .pipe(cssMinify({level: {1: {specialComments: false}}}))
    .pipe(gulp.dest('./dist/assets/css/'))
});

gulp.task('scripts',async function(){
    return gulp.src('./src/js/**/*.js')
    .pipe(jsMinify())
    .pipe(gulp.dest('./dist/assets/js/'))
})

gulp.task('favicon',async function(){
    return gulp.src('./src/favicon/**/*')
    .pipe(gulp.dest('./dist/assets/favicon/'))
})

gulp.task('php',async function(){
    return gulp.src('./src/**/*.php')
    .pipe(gulp.dest('./dist/'))
})

gulp.task('styles:vendor',async function(){
    return gulp.src([
        //'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/overlayscrollbars/styles/overlayscrollbars.min.css',
        //'node_modules/select2/dist/css/select2.min.css',
    ])
    .pipe(contact("vendor.min.css"))
    //.pipe(cssMinify())
    .pipe(gulp.dest('./dist/assets/css/'))
});

gulp.task('scripts:vendor',async function(){
    return gulp.src([
        'node_modules/@popperjs/core/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/overlayscrollbars/browser/overlayscrollbars.browser.es5.min.js',
        //'node_modules/select2/dist/js/select2.min.js',
    ])
    .pipe(contact("vendor.min.js"))
    //.pipe(jsMinify())
    .pipe(gulp.dest('./dist/assets/js/'))
});

gulp.task('styles:datatables',async function(){
    let tasksSrc = [];

    // 'src/custom-plugins/datatables/DataTables-1.13.2/css/dataTables.bootstrap5.min.css',
    // //'src/custom-plugins/datatables/AutoFill-2.5.2/css/autoFill.bootstrap5.css',
    // 'src/custom-plugins/datatables/Buttons-2.3.4/css/buttons.bootstrap5.min.css',
    // //'src/custom-plugins/datatables/ColReorder-1.6.1/css/colReorder.bootstrap5.min.css',
    // //'src/custom-plugins/datatables/DateTime-1.3.0/css/dataTables.dateTime.min.css',
    // 'src/custom-plugins/datatables/FixedColumns-4.2.1/css/fixedColumns.bootstrap5.min.css',
    // 'src/custom-plugins/datatables/FixedHeader-3.3.1/css/fixedHeader.bootstrap5.min.css',
    // //'src/custom-plugins/datatables/KeyTable-2.8.1/css/keyTable.bootstrap5.min.css',
    // 'src/custom-plugins/datatables/Responsive-2.4.0/css/responsive.bootstrap5.min.css',
    // 'src/custom-plugins/datatables/RowGroup-1.3.0/css/rowGroup.bootstrap5.min.css',
    // //'src/custom-plugins/datatables/RowReorder-1.3.2/css/rowReorder.bootstrap5.min.css',
    // 'src/custom-plugins/datatables/Scroller-2.1.0/css/scroller.bootstrap5.min.css',
    // //'src/custom-plugins/datatables/SearchBuilder-1.4.0/css/searchBuilder.bootstrap5.min.css',
    // 'src/custom-plugins/datatables/SearchPanes-2.1.1/css/searchPanes.bootstrap5.min.css',
    // 'src/custom-plugins/datatables/Select-1.6.0/css/select.bootstrap5.min.css',
    // //'src/custom-plugins/datatables/StateRestore-1.2.1/css/stateRestore.bootstrap5.min.css',

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/DataTables-1.13.2/css/dataTables.bootstrap5.min.css',
    ])
    .pipe(contact("datatables-core.min.css"))
    .pipe(gulp.dest('./dist/assets/css/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Buttons-2.3.4/css/buttons.bootstrap5.min.css',
    ])
    .pipe(contact("datatables-buttons.min.css"))
    .pipe(gulp.dest('./dist/assets/css/datatables/')))


    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/FixedColumns-4.2.1/css/fixedColumns.bootstrap5.min.css',
        'src/custom-plugins/datatables/FixedHeader-3.3.1/css/fixedHeader.bootstrap5.min.css',
    ])
    .pipe(contact("datatables-fixed-header-columns.min.css"))
    .pipe(gulp.dest('./dist/assets/css/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Responsive-2.4.0/css/responsive.bootstrap5.min.css',
    ])
    .pipe(contact("datatables-responsive.min.css"))
    .pipe(gulp.dest('./dist/assets/css/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Scroller-2.1.0/css/scroller.bootstrap5.min.css',
    ])
    .pipe(contact("datatables-scroller.min.css"))
    .pipe(gulp.dest('./dist/assets/css/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/SearchPanes-2.1.1/css/searchPanes.bootstrap5.min.css',
    ])
    .pipe(contact("datatables-search-panes.min.css"))
    .pipe(gulp.dest('./dist/assets/css/datatables/')))


    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Select-1.6.0/css/select.bootstrap5.min.css',
    ])
    .pipe(contact("datatables-select.min.css"))
    .pipe(gulp.dest('./dist/assets/css/datatables/')))
    return merge(tasksSrc);
});

gulp.task('scripts:datatables',async function(){
    let tasksSrc = [];

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/JSZip-2.5.0/jszip.min.js',
        'src/custom-plugins/datatables/pdfmake-0.1.36/pdfmake.min.js',
        'src/custom-plugins/datatables/pdfmake-0.1.36/vfs_fonts.js',
    ])
    .pipe(contact("datatables-pdfmake.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/DataTables-1.13.2/js/jquery.dataTables.min.js',
        'src/custom-plugins/datatables/DataTables-1.13.2/js/dataTables.bootstrap5.min.js',
    ])
    .pipe(contact("datatables-core.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Buttons-2.3.4/js/dataTables.buttons.min.js',
        'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.bootstrap5.min.js',
        'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.colVis.min.js',
        'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.html5.min.js',
        'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.print.min.js',
    ])
    .pipe(contact("datatables-buttons.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/ColReorder-1.6.1/js/dataTables.colReorder.min.js',
    ])
    .pipe(contact("datatables-col-reorder.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/FixedColumns-4.2.1/js/dataTables.fixedColumns.min.js',
        'src/custom-plugins/datatables/FixedHeader-3.3.1/js/dataTables.fixedHeader.min.js',
    ])
    .pipe(contact("datatables-fixed-header-columns.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Responsive-2.4.0/js/dataTables.responsive.min.js',
        'src/custom-plugins/datatables/Responsive-2.4.0/js/responsive.bootstrap5.js',
    ])
    .pipe(contact("datatables-responsive.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Scroller-2.1.0/js/dataTables.scroller.min.js',
    ])
    .pipe(contact("datatables-scroller.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))
    
    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/SearchPanes-2.1.1/js/dataTables.searchPanes.min.js',
        'src/custom-plugins/datatables/SearchPanes-2.1.1/js/searchPanes.bootstrap5.min.js',
    ])
    .pipe(contact("datatables-search-panes.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    tasksSrc.push(gulp.src([
        'src/custom-plugins/datatables/Select-1.6.0/js/dataTables.select.min.js',
    ])
    .pipe(contact("datatables-select.min.js"))
    .pipe(gulp.dest('./dist/assets/js/datatables/')))

    return merge(tasksSrc);

    // return gulp.src([
    //     'src/custom-plugins/datatables/JSZip-2.5.0/jszip.min.js',
    //     'src/custom-plugins/datatables/pdfmake-0.1.36/pdfmake.min.js',
    //     'src/custom-plugins/datatables/pdfmake-0.1.36/vfs_fonts.js',
    //     'src/custom-plugins/datatables/DataTables-1.13.2/js/jquery.dataTables.min.js',
    //     'src/custom-plugins/datatables/DataTables-1.13.2/js/dataTables.bootstrap5.min.js',
    //     //'src/custom-plugins/datatables/AutoFill-2.5.2/js/dataTables.autoFill.min.js',
    //     //'src/custom-plugins/datatables/AutoFill-2.5.2/js/autoFill.bootstrap5.min.js',
    //     'src/custom-plugins/datatables/Buttons-2.3.4/js/dataTables.buttons.min.js',
    //     'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.bootstrap5.min.js',
    //     'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.colVis.min.js',
    //     'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.html5.min.js',
    //     'src/custom-plugins/datatables/Buttons-2.3.4/js/buttons.print.min.js',
    //     //'src/custom-plugins/datatables/ColReorder-1.6.1/js/dataTables.colReorder.min.js',
    //     //'src/custom-plugins/datatables/DateTime-1.3.0/js/dataTables.dateTime.min.js',
    //     'src/custom-plugins/datatables/FixedColumns-4.2.1/js/dataTables.fixedColumns.min.js',
    //     'src/custom-plugins/datatables/FixedHeader-3.3.1/js/dataTables.fixedHeader.min.js',
    //     //'src/custom-plugins/datatables/KeyTable-2.8.1/js/dataTables.keyTable.min.js',
    //     'src/custom-plugins/datatables/Responsive-2.4.0/js/dataTables.responsive.min.js',
    //     'src/custom-plugins/datatables/Responsive-2.4.0/js/responsive.bootstrap5.js',
    //     'src/custom-plugins/datatables/RowGroup-1.3.0/js/dataTables.rowGroup.min.js',
    //     //'src/custom-plugins/datatables/RowReorder-1.3.2/js/dataTables.rowReorder.min.js',
    //     'src/custom-plugins/datatables/Scroller-2.1.0/js/dataTables.scroller.min.js',
    //     //'src/custom-plugins/datatables/SearchBuilder-1.4.0/js/dataTables.searchBuilder.min.js',
    //     //'src/custom-plugins/datatables/SearchBuilder-1.4.0/js/searchBuilder.bootstrap5.min.js',
    //     'src/custom-plugins/datatables/SearchPanes-2.1.1/js/dataTables.searchPanes.min.js',
    //     'src/custom-plugins/datatables/SearchPanes-2.1.1/js/searchPanes.bootstrap5.min.js',
    //     'src/custom-plugins/datatables/Select-1.6.0/js/dataTables.select.min.js',
    //     //'src/custom-plugins/datatables/StateRestore-1.2.1/js/dataTables.stateRestore.min.js',
    //     //'src/custom-plugins/datatables/StateRestore-1.2.1/js/stateRestore.bootstrap5.min.js',
    // ])
    // .pipe(contact("datatables-full.min.js"))
    // .pipe(gulp.dest('./dist/assets/js/'))
});



gulp.task('styles:fontawesome',async function(){

    let tasksSrc = [];

    tasksSrc.push(gulp.src([
        'node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        'node_modules/@fortawesome/fontawesome-free/css/brands.css',
        'node_modules/@fortawesome/fontawesome-free/css/regular.css',
        'node_modules/@fortawesome/fontawesome-free/css/solid.css',
        'node_modules/@fortawesome/fontawesome-free/css/v5-font-face.css',
        'node_modules/@fortawesome/fontawesome-free/css/v4-font-face.css',
    ])
    .pipe(contact("fontawesome.min.css"))
    .pipe(replace('../webfonts', 'webfonts'))
    .pipe(cssMinify({level: {1: {specialComments: false}}}))
    .pipe(gulp.dest('./dist/assets/css/fontawesome/')))

    
    tasksSrc.push(gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('./dist/assets/css/fontawesome/webfonts/')))

    return merge(tasksSrc);
});

gulp.task('styles:bootstrap-icons',async function(){

    let tasksSrc = [];

    tasksSrc.push(gulp.src([
        'node_modules/bootstrap-icons/font/bootstrap-icons.css',
    ])
    .pipe(contact("bootstrap-icons.min.css"))
    .pipe(cssMinify({level: {1: {specialComments: false}}}))
    .pipe(gulp.dest('./dist/assets/css/bootstrap-icons/')))
    tasksSrc.push(gulp.src('node_modules/bootstrap-icons/font/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/css/bootstrap-icons/fonts/')))

    return merge(tasksSrc);
});


gulp.task('styles:plugins',async function(){
    return gulp.src([
        'node_modules/select2/dist/css/select2.css',
        'src/custom-plugins/select2/select2-bootstrap-5-theme.css',
        'src/custom-plugins/tempusDominus/tempus-dominus.css',
    ])
    .pipe(contact("plugins.min.css"))
    //.pipe(cssMinify({keepSpecialComments : 0}))
    .pipe(cssMinify({level: {1: {specialComments: false}}}))
    .pipe(gulp.dest('./dist/assets/css/'))
});


gulp.task('scripts:plugins',async function(){
    return gulp.src([
        'node_modules/moment/min/moment-with-locales.min.js',
        'node_modules/select2/dist/js/select2.full.min.js',
        'node_modules/@eonasdan/tempus-dominus/dist/js/tempus-dominus.min.js',
        'node_modules/@eonasdan/tempus-dominus/dist/plugins/moment-parse.js',
    ])
    .pipe(contact("plugins.min.js"))
    .pipe(jsMinify())
    .pipe(gulp.dest('./dist/assets/js/'))
});

gulp.task('styles:fullcalendar',async function(){

    let tasksSrc = [];

    tasksSrc.push(gulp.src([
        'node_modules/fullcalendar/main.min.css',
        'src/custom-plugins/fullcalendar/fullcalendar.css',
    ])
    .pipe(contact("fullcalendar.min.css"))
    .pipe(cssMinify({level: {1: {specialComments: false}}}))
    .pipe(gulp.dest('./dist/assets/css/fullcalendar/')))

    return merge(tasksSrc);
});


gulp.task('scripts:fullcalendar',async function(){
    return gulp.src([
        'node_modules/fullcalendar/main.min.js',
        'node_modules/fullcalendar/locales/ar.js',
        'node_modules/fullcalendar/locales/fr.js',
    ])
    .pipe(contact("fullcalendar.min.js"))
    .pipe(gulp.dest('./dist/assets/js/fullcalendar/'))
});

gulp.task('watch',async function(){
    gulp.watch("./src/*.php", gulp.series(['php']));
    gulp.watch("./src/fonts/**/*", gulp.series(['fonts']));
    gulp.watch("./src/scss/**/*.scss", gulp.series(['styles']));
    gulp.watch("./src/js/**/*.js", gulp.series(['scripts']));
    
    gulp.watch("./src/custom-plugins/**/*.css", gulp.series(['styles:plugins']));
    gulp.watch("./src/custom-plugins/**/*.js", gulp.series(['scripts:plugins']));

})

//async
gulp.task('dev', gulp.series([
    'clean',
    'fonts',
    'favicon',
    'img',

    'styles',
    'styles:vendor',
    'styles:plugins',
    'styles:datatables',
    'styles:fontawesome',
    'styles:fullcalendar',
    'styles:bootstrap-icons',

    'scripts',
    'scripts:vendor',
    'scripts:plugins',
    'scripts:datatables',
    'scripts:fullcalendar',

    'php',
    'watch'
]))
gulp.task('build', gulp.series([
    'clean',
    'fonts',
    'favicon',
    'img',

    'styles',
    'styles:vendor',
    'styles:plugins',
    'styles:datatables',
    'styles:fontawesome',
    'styles:fullcalendar',
    'styles:bootstrap-icons',

    'scripts',
    'scripts:vendor',
    'scripts:plugins',
    'scripts:datatables',
    'scripts:fullcalendar',

    'php'
]))
