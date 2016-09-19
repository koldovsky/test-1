'use strict';

var gulp = require('gulp'),
    angularFilesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject');

gulp.task('angularFilesort', function() {
    // var target = gulp.src('./src/index.html');
    // var sources = gulp.src(['./dist/**/*.js']);
    // return target.pipe(inject(sources.pipe(angularFilesort())))
    //     .pipe(gulp.dest('./dest/libs'));
});