var gulp = require('gulp');
    rename = require('gulp-rename'),  //重命名
    jshint = require('gulp-jshint'),  //js语法检查
    uglify = require('gulp-uglify'),  //js压缩
    concat = require('gulp-concat'),  //文件合并
    cssmin = require('gulp-cssmin'),  //css压缩
    browserSync = require('browser-sync'),  //浏览器自动刷新
    imagemin = require('gulp-imagemin'),  //压缩图片
    //pngquant = require('imagemin-pngquant'),  //深度压缩图片
    cache = require('gulp-cache');  //使用”gulp-cache”只压缩修改的图片，没有修改的图片直接从缓存文件读取

//定义js,css,images文件的路径
var paths = {
  js: 'src/js/*.js',
  jsPublic: 'src/js/public/*.js',
  css: 'src/css/*.css',
  cssPublic: 'src/css/public/*.css',
  images: 'src/images/**/*.{png,jpg,gif,ico}'
};

//将公共的(jquery.js和all.js)js合并并压缩
gulp.task('js-public', function(){
  gulp.src(['src/js/public/jquery_1_7.js', 'src/js/public/all.js'])   //jquery要写在在all.js之前
      .pipe(concat('public.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(rename('public.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

//将非公共的js压缩
gulp.task('js', function(){
  gulp.src(paths.js)
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

//将公共的css合并并压缩
gulp.task('css-public', function(){
  gulp.src(['src/css/public/font-awesome.css', 'src/css/public/public.css', 'src/css/public/all.css'])
      .pipe(concat('public.css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(rename('public.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('dist/css'));
});
//将非公共的css压缩
gulp.task('css', function(){
  gulp.src(paths.css)
      .pipe(cssmin())
      .pipe(gulp.dest('dist/css'));
});

//浏览器自动刷新
gulp.task('browser-sync', function() {
  browserSync({
    files: "**",
    server: {
        baseDir: "dist"  //指向输出目录
    }
  });
});

//压缩图片  
gulp.task('testImagemin', function () {
  gulp.src(paths.images)
      .pipe(cache(imagemin({
        optimizationLevel: 3,
        progressive: true, 
        interlaced: true 
      })))
      .pipe(gulp.dest('dist/images'));
});

//文件改动检测
gulp.task('watch', function(){
  gulp.watch(paths.images, ['testImagemin']);
  gulp.watch(paths.jsPublic, ['js-public']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.cssPublic, ['css-public']);
  gulp.watch(paths.css, ['css']);
});

//定义默认任务
gulp.task('default', ['js-public', 'js', 'css-public', 'css', 'browser-sync', 'testImagemin', 'watch']);