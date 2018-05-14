var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');




gulp.task('compile-sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
})

gulp.task('move-js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery/jquery.min.js','node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
})

gulp.task('move-fonts', function(){
    return gulp.src(['node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest('src/fonts'))
    .pipe(browserSync.stream())
})


gulp.task('uglify', function(){
    gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
})

gulp.task('uglify', function(){
    gulp.src('src/css/**/*.css')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
})

gulp.task('default', function () {
    return gulp.src('src/css/**/*.css')
      .pipe(concatCss("style/bundle.css"))
      .pipe(gulp.dest('dist'));
  });









//run sass when serve runs
//run server
//watch for any changes in src/scss folder and reload the browser
//also watch for sass changes
//watch for html changes
gulp.task('launch-server', ['compile-sass'], function() {
    browserSync.init({
        server: "./src"
    })
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','node_modules/font-awesome/scss/font-awesome.scss', 'src/scss/*.scss'],['compile-sass'])
    gulp.watch("src/*.html").on('change', browserSync.reload)
})

//run gulp
//launch server and browser
//execute js task
gulp.task('default', ['move-js','move-fonts', 'launch-server'])