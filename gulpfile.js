const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');


function logError(err){
    console.log(err);
    this.emit('end');
}

gulp.task('babelify', () => {
    gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .on('error', logError)
    .pipe(babel({
        presets: ["env"]
    }))
    .on('error', logError)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('babel:watch', () => {
    gulp.watch('src/**/*.js',['babelify']);
});

gulp.task('default',['babel:watch']);