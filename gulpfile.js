//gulp
const gulp = require('gulp');

//gulp css
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

//gulp browser tools
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

//gulp JS
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

// Image compression
const imagemin = require('gulp-imagemin');

//Helper tools
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const del = require('del');
const pug = require('gulp-pug');

// File paths
const Basepaths = {
    NODE: 'node_modules/',
    DEV: 'src/',
    ASSETS: 'dist/assets/'
}

// Declaring Tasks
exports.devAssets = devAssets;
exports.copyAssets = copyAssets;
exports.buildHTML = buildHTML;
exports.watchfiles = watchfiles;
exports.styles = styles;
exports.scripts = scripts;
exports.concatscripts = concatscripts;
exports.images = images;
exports.serve = serve;
exports.favicon = favicon;
exports.devclean = devclean;
exports.clean = clean;

// Developement Tasks
exports.dev = gulp.series(devAssets, buildHTML, serve, styles, scripts, images, watchfiles);

////////////////// COPY ALL ASSETS: DEVELOPMENT /////////////////////////
function devAssets() {

    const stream =

////////////////// SASS /////////////////////////
    // Copy Bootstrap SASS files (DEV)
    gulp.src(Basepaths.NODE + 'bootstrap/scss/**/*.scss')
        .pipe(gulp.dest(Basepaths.DEV + 'scss/vendor/bootstrap4/'));

    ////////////////// JS  /////////////////////////
    // Copy jquery files (DEV)
    gulp.src(Basepaths.NODE + 'jquery/dist/**/*.js')
        .pipe(gulp.dest(Basepaths.DEV + 'js/vendor/'));

    // Copy bootstrap js files (DEV)
    gulp.src(Basepaths.NODE + 'bootstrap/dist/js/**/*.js')
        .pipe(gulp.dest(Basepaths.DEV + 'js/vendor/'));

    // Copy popper js files (DEV)
    gulp.src(Basepaths.NODE + 'popper.js/dist/**/*.js')
        .pipe(gulp.dest(Basepaths.DEV + 'js/vendor/'));

    return stream;
};
////////////////// COPY ALL ASSETS: DEVELOPMENT END /////////////////////////

////////////////// COPY ALL ASSETS: PRODUCTION /////////////////////////
function copyAssets(){

const stream =

////////////////// CSS /////////////////////////
    // Copy Bootstrap CSS files (ASSETS)
    gulp.src(Basepaths.NODE + 'bootstrap/dist/css/bootstrap.min.css') 
        .pipe(gulp.dest(Basepaths.ASSETS + 'css/vendor/'));

////////////////// JS  /////////////////////////
    // Copy jquery files (ASSETS)
    gulp.src(Basepaths.NODE + 'jquery/dist/jquery.min.js')
        .pipe(gulp.dest(Basepaths.ASSETS + 'js/vendor/'));

// Copy bootstrap files (ASSETS)
    gulp.src(Basepaths.NODE + 'bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(Basepaths.ASSETS + 'js/vendor/'));

// Copy popper js files (ASSETS)
    gulp.src(Basepaths.NODE + 'popper.js/dist/popper.min.js')
    .pipe(gulp.dest(Basepaths.ASSETS + 'js/vendor/'));

    return stream;
}
////////////////// COPY ALL ASSETS: PRODUCTION END /////////////////////////

////////////////// COMPILING PUG TO HTML /////////////////////////
 function buildHTML() {
    return gulp.src(Basepaths.DEV + 'template/*.pug')
        .pipe(pug({
         doctype:'html',
         pretty:true}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
};
////////////////// COMPILING PUG TO HTML END /////////////////////////

////////////////// COMPILING STYLES  /////////////////////////
 function styles () {
    return gulp.src(Basepaths.DEV + 'scss/theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(Basepaths.ASSETS + 'css/'))
        .pipe(cleanCSS())
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest(Basepaths.ASSETS + 'css/'))
        .pipe(browserSync.stream());
};
////////////////// COMPILING STYLES END /////////////////////////

////////////////// COMPILING SCRIPTS /////////////////////////
function scripts() {
    return gulp
        .src(Basepaths.DEV + 'js/custom/theme.js')
        .pipe(gulp.dest(Basepaths.ASSETS + 'js/'))
        .pipe(concat('theme.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(Basepaths.ASSETS + 'js/'));
};

 function concatscripts() {
    const scripts = [
    Basepaths.DEV + 'js/vendor/jquery.min.js',
    Basepaths.DEV + 'js/vendor/bootstrap.bundle.js'
  ];

    return gulp
        .src(scripts)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(Basepaths.ASSETS + 'js/'))
        .pipe(concat('vendor.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(Basepaths.ASSETS + 'js/'));

};
////////////////// COMPILING SCRIPTS END /////////////////////////


////////////////// COMPRESSING IMAGES /////////////////////////
function images() {
    return gulp.src(Basepaths.DEV + 'images/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({progressive: true}),
        imagemin.optipng(),
        imagemin.svgo()
    ]))
        .pipe(gulp.dest(Basepaths.ASSETS + 'images/'))
        .pipe(browserSync.stream());
};
////////////////// COMPRESSING IMAGES END /////////////////////////

////////////////// FAVICON /////////////////////////
function favicon() {
    return gulp.src(Basepaths.DEV + '*.+(png|ico|webmanifest)')
        .pipe(gulp.dest('dist'))
};
////////////////// FAVICON END /////////////////////////

////////////////// BROWSER-SYNC /////////////////////////
function serve(done) {
    browserSync.init({
      server: './dist'
    });
    return done();
  }
////////////////// BROWSER-SYNC END/////////////////////////

////////////////// WATCHING FILES /////////////////////////
function watchfiles() {
    gulp.watch(Basepaths.DEV + 'scss/**/*.scss', styles);
    gulp.watch(Basepaths.DEV + 'views/*.pug', buildHTML);
    gulp.watch(Basepaths.DEV + 'js/**/*.js', scripts);
    gulp.watch(Basepaths.DEV + 'images/**', images);
};
////////////////// WATCHING FILES END /////////////////////////

//////////////// DELETING FILES: DEVELOPEMNT  /////////////////////////
function devclean() {
    return del([
    Basepaths.DEV + 'scss/vendor/',
    Basepaths.DEV + 'js/vendor/',
    'dist'
    ]);
};
//////////////// DELETING FILES: DEVELOPEMNT END /////////////////////////

//////////////// DELETING FILES: PRODUCTION  /////////////////////////
function clean() {
    return del([
    Basepaths.NODE,
    Basepaths.DEV + 'scss/vendor/',
    Basepaths.DEV + 'js/vendor/'
    ]);
};
//////////////// DELETING FILES: PRODUCTION END /////////////////////////
