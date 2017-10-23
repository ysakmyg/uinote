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
const extender     = require('gulp-html-extend');

//------------------------------------------------------
// DevelopMode(css expanded or compressed)
//------------------------------------------------------
const developMode = false; // true(none-minfy) or false(minify)

//------------------------------------------------------
// ProjectName
//------------------------------------------------------
const prjName = 'sample';

//------------------------------------------------------
// TimeStamp
//------------------------------------------------------
const dateFormat = timestamp('YYYYMMDDHHmmss');

//------------------------------------------------------
// FilePaths
//------------------------------------------------------
const src   = '_src';
const dst   = 'docs';
const paths = {
  // uinote
    src_uinote_styles   : src + '/uinote/styles/**/*.scss',
    src_uinote_scripts  : src + '/uinote/scripts/**/*.js',
    src_uinote_template : src + '/uinote/template',
    src_uinote_extend   : src + '/uinote/extend',
    dst_uinote_styles   : dst + '/assets/uinote/css',
    dst_uinote_scripts  : dst + '/assets/uinote/js',
    dst_uinote_template : dst + '/assets/include/timestamp',
    dst_uinote_html     : dst,
  // project
    src_project_styles    : src + '/project/styles/**/*.scss',
    src_project_scripts   : src + '/project/scripts/**/*.js',
    src_project_images    : src + '/project/images/**/*',
    dst_project_styles    : dst + '/assets/'+ prjName +'/css',
    dst_project_scripts   : dst + '/assets/'+ prjName +'/js',
    dst_project_images    : dst + '/assets/'+ prjName +'/images'
};

//------------------------------------------------------
// LocalServer
//------------------------------------------------------
var baseDir = __dirname + '/' + dst;
gulp.task('server', function() {
  browserSync.init({
    notify: false,
    startPath: '/',
    notify: false,
    logLevel: "silent",
    port: 8010,
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

// BrowserReload
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
    .pipe(gulp.dest(paths.dst_uinote_styles))
    .on("end",function(){
      return gulp.src(paths.src_uinote_template + '/_uinote_styles.html')
        .pipe(revts({strict: false, mode: 'timestamp'}))
        .pipe(gulp.dest(paths.src_uinote_extend + '/include/timestamp/'))
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
    .pipe(gulp.dest(paths.dst_uinote_scripts))
    .on("end",function(){
      return gulp.src(paths.src_uinote_template + '/_uinote_scripts.html')
        .pipe(revts({strict: false, mode: 'timestamp'}))
        .pipe(gulp.dest(paths.src_uinote_extend + '/include/timestamp/'))
    })
});
// HTML (_src/extend/)
//------------------------------------------------------
gulp.task('extend', function () {
    return gulp.src([paths.src_uinote_extend + '/**/*.html' , '!' + paths.src_uinote_extend + '/**/_*.html'])
        .pipe(extender({annotations:true,verbose:false}))
        .pipe(gulp.dest(paths.dst_uinote_html))

})


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
    .pipe(gulp.dest(paths.dst_project_styles))
    .on("end",function(){
      return gulp.src(paths.src_uinote_template + '/_project_styles.html')
        .pipe(template({projectName: prjName}))
        .pipe(revts({strict: false, mode: 'timestamp'}))
        .pipe(gulp.dest(paths.src_uinote_extend + '/include/timestamp/'))
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
    .pipe(gulp.dest(paths.dst_project_scripts))
    .on("end",function(){
      return gulp.src(paths.src_uinote_template + '/_project_scripts.html')
        .pipe(template({projectName: prjName}))
        .pipe(revts({strict: false, mode: 'timestamp'}))
        .pipe(gulp.dest(paths.src_uinote_extend + '/include/timestamp/'))
    })
});
// Image Min
//------------------------------------------------------
gulp.task('imagemin', function() {
  return gulp.src(paths.src_project_images)
    .pipe(newer(paths.dst_project_images))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(paths.dst_project_images))
});

//------------------------------------------------------
// File Watch
//------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch([paths.src_uinote_styles],['uinote_styles','reload'])
  gulp.watch([paths.src_uinote_scripts],['uinote_scripts','reload'])
  gulp.watch([paths.src_uinote_extend + '/**/*.html'],['extend','reload'])
  gulp.watch([paths.src_project_styles],['project_styles','reload'])
  gulp.watch([paths.src_project_scripts],['project_scripts','reload'])
});

//------------------------------------------------------
// default > $ gulp
//------------------------------------------------------
gulp.task('default',['server','watch']);
