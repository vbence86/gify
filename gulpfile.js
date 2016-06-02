const gulp = require("gulp");
const gutil = require('gutil');
const concat = require("gulp-concat");
const webpack = require('webpack-stream');

gulp.task('html', function () {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
	return webpack(require('./webpack.config.js'))
		.pipe(gulp.dest('dist/js/'))
		.on('error', gutil.log);
});

gulp.task('css', function () {
	return gulp.src('src/css/**/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('build', ['html', 'js', 'css']);
gulp.task('default', ['build']);