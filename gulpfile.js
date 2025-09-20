const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin').default; 
const terser = require('gulp-terser');
const plumber = require('gulp-plumber'); 

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(plumber())
        .pipe(terser())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
    gulp.watch('./src/images/**/*', gulp.parallel(images));
};
