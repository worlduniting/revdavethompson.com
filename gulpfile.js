const gulp = require('gulp');
const gulpIf = require('gulp-if');
const gulpSquoosh = require("gulp-squoosh");
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const jsImport = require('gulp-js-import');
const injectCSS = require('gulp-inject-css');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const htmlPartial = require('gulp-html-partial');
const clean = require('gulp-clean');
const gulpInjectCSS = require('gulp-inject-css');
const isProd = process.env.NODE_ENV === 'prod';

const htmlFile = [
    'src/*.html'
]

function html() {
    return gulp.src(htmlFile)
        .pipe(htmlPartial({
            basePath: 'src/partials/'
        }))
        .pipe(gulpIf(isProd, htmlmin({
            collapseWhitespace: true
        })))
        .pipe(gulp.dest('public'));
}

function css() {
    return gulp.src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(gulpIf(!isProd, sourcemaps.init()))
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(gulpIf(!isProd, sourcemaps.write()))
        .pipe(gulpIf(isProd, cssmin()))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src('./node_modules/bootstrap-icons/font/fonts/**')
        .pipe(gulp.dest('public/css/fonts'));
}

function js() {
    return gulp.src('src/js/*.js')
        .pipe(jsImport({
            hideConsole: true
        }))
        .pipe(concat('all.js'))
        .pipe(gulpIf(isProd, uglify()))
        .pipe(gulp.dest('public/js'));
}

function img() {
    return gulp
        .src("src/img/**")
        .pipe(gulpSquoosh())
        .pipe(gulp.dest("public/img"));
}

function serve() {
    browserSync.init({
        open: true,
        server: './public'
    });
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}


function watchFiles() {
    gulp.watch('src/**/*.html', gulp.series(html, browserSyncReload));
    gulp.watch('src/**/*.scss', gulp.series(css));
    gulp.watch('src/**/*.js', gulp.series(js, browserSyncReload));
    gulp.watch('src/img/**/*.*', gulp.series(img));

    return;
}

function del() {
    return gulp.src('public/*', {read: false})
        .pipe(clean());
}

exports.css = css;
exports.html = html;
exports.fonts = fonts;
exports.js = js;
exports.del = del;
exports.serve = gulp.parallel(html, css, fonts, js, img, watchFiles, serve);
exports.default = gulp.series(del, html, css, fonts, js, img);