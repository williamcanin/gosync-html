// Script: gulpfile.js
// by: William C. Canin

let gulp = require('gulp');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass')(require('sass'));
let mincss = require('gulp-csso');
let gulp_clean = require('gulp-clean');
let rename = require('gulp-rename');
let plumber = require('gulp-plumber');
let browserSync = require('browser-sync').create();

// load configurations.
const config = require('./config.json');


// function copy files statics
function clean_build() {
  return gulp
    .src(config.built + '/*', {read: false})
    .pipe(gulp_clean({force: true}))
}

// function copy to root files statics
function copy_to_root() {
  return gulp
    .src(['src/CNAME', 'src/robots.txt', 'src/templates/**/*.html'])
    .pipe(gulp.dest(config.built + '/'))
}

// function copy images
function copy_images() {
  return gulp
    .src(['src/assets/images/**/*'])
    .pipe(gulp.dest(config.built + '/assets/images/'))
}

// function fonts images
function copy_fonts() {
  return gulp
    .src(['src/assets/fonts/**/*'])
    .pipe(gulp.dest(config.built + '/assets/fonts/'))
}

// function javascripts
function javascripts() {
  return gulp
    .src('src/assets/js/**/*.js')
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest(config.built + '/assets/js'))
}

// function styles
function styles() {
  return gulp
    .src('src/assets/scss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(mincss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.built + '/assets/css'))
}

// function vendor bootstrap styles
function bootstrap_styles() {
  return gulp
    .src(['node_modules/bootstrap/scss/bootstrap.scss',
    	'node_modules/bootstrap/scss/bootstrap-reboot.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(mincss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(config.built + '/assets/vendor/bootstrap/css'))
}

// function vendor bootstrap javascripts
function bootstrap_js() {
  return gulp
    .src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
    	'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map'])
    .pipe(gulp.dest(config.built + '/assets/vendor/bootstrap/js'))
}

// function vendor jquery
function framework_jquery() {
  return gulp
    .src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(config.built + '/assets/vendor/jquery'))
}

// browser-sync
function browserSync_reload(done) {
  browserSync.reload();
  done();
}

function browserSync_server(done) {
  browserSync.init({
    server: {
      baseDir: config.built + '/'
    },
    "port": config.server.port
  });
  done();
}

// task vendor
const vendor = gulp.series(
  gulp.parallel(bootstrap_styles,  bootstrap_js, framework_jquery)
)

// task build
const build = gulp.series(
	gulp.parallel(
		copy_to_root,
		copy_fonts,
		copy_images,
    styles,
    javascripts,
    vendor
));

// task watch changed
const watch = () => gulp.watch(
	config.watch, gulp.series(
		copy_to_root,
		copy_images,
		copy_fonts,
		styles,
    javascripts,
		browserSync_reload
));

// start the server
const serve = gulp.series(
	gulp.parallel(
		copy_to_root,
		copy_fonts,
		copy_images,
    styles,
    javascripts,
    vendor,
	  browserSync_server,
	  watch
));

// export tasks
exports.clean = clean_build;
exports.common = copy_to_root;
exports.images = copy_images;
exports.styles = styles;
exports.js = javascripts;
exports.bootstrap_styles = bootstrap_styles;
exports.bootstrap_js = bootstrap_js;
exports.jquery = framework_jquery;
exports.serve = serve;
exports.vendor = vendor;
exports.build = build;
exports.default = build;
