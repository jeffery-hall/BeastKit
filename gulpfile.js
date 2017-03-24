/* File: gulpfile.js */

var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    concat  = require('gulp-concat'),
    rename  = require('gulp-rename'),
    include = require('gulp-include'),
    uglify  = require('gulp-uglify'),
    plumber = require('gulp-plumber');


var source_files = ["src/main.js"];

// Default task

gulp.task('default', function() {
//    return gutil.log('Gulp is running.');
    gulp.src(source_files)
	.pipe(plumber())
	.pipe(include({
	    extensions: "js"
	}))
//	.pipe(concat('concat.js'))
//	.pipe(uglify())
	.pipe(rename('BeastKit.jsx'))
	.pipe(plumber.stop())
	.pipe(gulp.dest('build'));
});
