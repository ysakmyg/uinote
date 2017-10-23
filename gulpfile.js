//------------------------------------------------------
// Modules
//------------------------------------------------------
const gulp         = require('gulp');
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass');
const rename       = require('gulp-rename');
const replace      = require('gulp-replace');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const jqc          = require('gulp-jquery-closure');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync').create();
const connectSSI   = require('connect-ssi');
const timestamp    = require('time-stamp');
const revts        = require('gulp-rev-timestamp');
const template     = require('gulp-template');

//------------------------------------------------------
// Config
//------------------------------------------------------

// DevelopMode(css expanded or compressed)
//------------------------------------------------------
const developMode = false; // true(none-minfy) or false(minify)

// ProjectName
//------------------------------------------------------
const prjName = 'sample';

// SistemRevision
//------------------------------------------------------
const revision = '1.0.0';

// TimeStamp
//------------------------------------------------------
const datedisplay = false; // true(revisionNo) or false(hash)

// FilePaths
//------------------------------------------------------
const src   = '_src';
const dst   = 'htdocs';
const paths = {
 // Uinote src
    src_uinote_styles    : src + '/uinote/assets/styles/**/*.scss',
    src_uinote_scripts   : src + '/uinote/assets/scripts/**/*.js',
    src_uinote_images    : src + '/uinote/assets/images/**/*.+(jpg|jpeg|png|gif|svg)',
    src_uinote_html      : src + '/uinote/html/**/*.html',
    src_uinote_include   : src + '/uinote/assets/include/**/*.html',
    src_uinote_include_x : [src + '/uinote/assets/include/**/*.html','!' + src + '/uinote/assets/include/**/*.html'],
 // Project src
    src_project_styles   : src + '/project/assets/styles/**/*.scss',
    src_project_scripts  : src + '/project/assets/scripts/**/*.js',
    src_project_images   : src + '/project/assets/images/**/*.+(jpg|jpeg|png|gif|svg)',
 // TimeStamp
    src_uinote_timestamp : src + '/uinote/assets/include/timestamp',
    dst_uinote_timestamp : dst + '/assets/include/timestamp',
 // DestPath
    dst_styles  : dst + '/assets/css',
    dst_scripts : dst + '/assets/js',
    dst_images  : dst + '/assets/images',
    dst_include : dst + '/assets/include',
    dst_html    : dst
};

//------------------------------------------------------
// LocalServer
//------------------------------------------------------
const baseDir = __dirname + '/htdocs';
const portNo  = 4100;
gulp.task('server', function() {
  browserSync.init({
    notify: false,
    startPath: '/',
    notify: false,
    logLevel: "silent",
    port: portNo,
    server: {
      baseDir: baseDir,
      middleware: [
        connectSSI({
          baseDir: baseDir,
          ext: '.html'
        })
      ]
    },
    ui: {
      port: false
    }
  })
});

// BrowserReloadTask
gulp.task('reload', function () {
    browserSync.reload();
});

//------------------------------------------------------
// StyleGuide(Uinote) Task
//------------------------------------------------------
// Style (_src/uinote/styles/**/*.scss)
//------------------------------------------------------
gulp.task('uinote_styles', function () {
  return gulp.src(paths.src_uinote_styles)
    .pipe(plumber())
    .pipe(sass({outputStyle: developMode == true ? 'expanded' : 'compressed'}).on('error', sass.logError))
    .pipe(rename('uinote.min.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'iOS >= 8.0', 'Android >= 4.2'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.dst_styles))
    .on("end",function(){
      return gulp.src(paths.src_uinote_timestamp + '/uinote_styles.html')
        .pipe(revts({strict: false, mode: developMode == true ? 'revision' : 'timestamp'}))
        .pipe(gulp.dest(paths.dst_uinote_timestamp))
    })
});
// Scripts (_src/uinote/scripts/**/*.js)
//------------------------------------------------------
gulp.task('uinote_scripts', function() {
  return gulp.src(paths.src_uinote_scripts)
    .pipe(plumber())
    .pipe(concat('uinote.min.js'))
    .pipe(jqc({$: true}))
    .pipe(uglify({
      mangle: developMode == true ? false : true ,
      compress: developMode == true ? false : true ,
      output: { beautify: developMode == true ? true : false }
    }))
    .pipe(gulp.dest(paths.dst_scripts))
    .on("end",function(){
      return gulp.src(paths.src_uinote_timestamp + '/uinote_scripts.html')
        .pipe(revts({strict: false, mode: developMode == true ? 'revision' : 'timestamp'}))
        .pipe(gulp.dest(paths.dst_uinote_timestamp))
    })
});
// Images (_src/uinote/images/**/*)
//------------------------------------------------------
gulp.task('uinote_images', function() {
  return gulp.src(paths.src_uinote_images)
    .pipe(newer(paths.dst_images))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(paths.dst_images))
});
// Include (_src/uinote/assets/include/**/*.html)
//------------------------------------------------------
gulp.task('uinote_include', function () {
  return gulp.src(paths.src_uinote_include_x)
    .pipe(plumber())
    .pipe(newer(paths.dst_include))
    .pipe(gulp.dest(paths.dst_include))
});
// HTML (_src/uinote/html/**/*.html)
//------------------------------------------------------
gulp.task('uinote_html', function () {
  return gulp.src(paths.src_uinote_html)
    .pipe(plumber())
    .pipe(template({sistemRev:revision}))
    .pipe(newer(paths.dst_html))
    .pipe(gulp.dest(paths.dst_html))
});


//------------------------------------------------------
// ProjectTask
//------------------------------------------------------
// Style (_src/project/styles/**/*.scss)
//------------------------------------------------------
gulp.task('project_styles', function () {
  return gulp.src(paths.src_project_styles)
    .pipe(plumber())
    .pipe(sass({outputStyle: developMode == true ? 'expanded' : 'compressed'}).on('error', sass.logError))
    .pipe(rename(prjName +'.app.min.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'iOS >= 8.0', 'Android >= 4.2'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.dst_styles))
    .on("end",function(){
      return gulp.src(paths.src_uinote_timestamp + '/project_styles.html')
        .pipe(template({projectName: prjName}))
        .pipe(revts({strict: false, mode: developMode == true ? 'revision' : 'timestamp'}))
        .pipe(gulp.dest(paths.dst_uinote_timestamp))
    })
});
// Scripts (_src/project/scripts/**/*.js)
//------------------------------------------------------
gulp.task('project_scripts', function() {
  return gulp.src(paths.src_project_scripts)
    .pipe(plumber())
    .pipe(concat(prjName +'.app.min.js'))
    .pipe(jqc({$: true}))
    .pipe(uglify({
      mangle: developMode == true ? false : true ,
      compress: developMode == true ? false : true ,
      output: { beautify: developMode == true ? true : false }
    }))
    .pipe(gulp.dest(paths.dst_scripts))
    .on("end",function(){
      return gulp.src(paths.src_uinote_timestamp + '/project_scripts.html')
        .pipe(template({projectName: prjName}))
        .pipe(revts({strict: false, mode: developMode == true ? 'revision' : 'timestamp'}))
        .pipe(gulp.dest(paths.dst_uinote_timestamp))
    })
});
// Images (_src/project/images/**/*)
//------------------------------------------------------
gulp.task('project_images', function() {
  return gulp.src(paths.src_project_images)
    .pipe(newer(paths.dst_images))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(paths.dst_images))
});

//------------------------------------------------------
// File Watch
//------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch([paths.src_uinote_styles],['uinote_styles','reload'])
  gulp.watch([paths.src_uinote_scripts],['uinote_scripts','reload'])
  gulp.watch([paths.src_uinote_html],['uinote_html','reload'])
  gulp.watch([paths.src_uinote_include],['uinote_include','reload'])
  gulp.watch([paths.src_project_styles],['project_styles','reload'])
  gulp.watch([paths.src_project_scripts],['project_scripts','reload'])
});

//------------------------------------------------------
// default > $ gulp
//------------------------------------------------------
gulp.task('default',['server','watch']);
