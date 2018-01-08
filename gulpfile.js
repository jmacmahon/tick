const gulp = require('gulp');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
// const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const appServer = require('gulp-server-livereload');
const log = require('fancy-log');
const colors = require('ansi-colors');

function printError(err) {
  log(colors.red('[Error]'), err.toString());
}

gulp.task('default', () => {});

gulp.task('browserify', () => (
  browserify({
    entries: ['src/js/main.jsx'],
    extensions: ['.js', '.jsx'],
    debug: true,
  })
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    .on('error', printError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js/'))
));

gulp.task('sass', () => (
  gulp.src('src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
));

gulp.task('static', () => (
  gulp.src('src/static/**/*')
    .pipe(gulp.dest('dist/'))
));

gulp.task('build', ['browserify', 'sass', 'static']);

gulp.task('serve-app-dev', [], () => {
  gulp.src('dist/')
    .pipe(appServer({
      livereload: true,
      directoryListing: true,
      open: false,
    }));
  gulp.watch('src/js/**/*.js{,x}', ['browserify']);
  gulp.watch('src/css/**/*.scss', ['sass']);
  gulp.watch('src/static/**/*', ['static']);
});

gulp.task('dev', ['build', 'serve-app-dev']);
