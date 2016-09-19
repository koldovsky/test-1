'use strict';

var gulp = require('gulp');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');


gulp.task('inject', ['bundle'], function() {
    console.log('inject');

    var target = gulp.src('./src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sourcesJs = gulp.src(['./dist/**/*.js']);
    var sourcesCss = gulp.src(['./dist/**/*.css'], { read: false });
    var fileSort = sourcesJs.pipe(angularFilesort());

    return target
        .pipe(inject(fileSort), { relative: true })
        .pipe(inject(sourcesCss), { relative: true })
        .pipe(gulp.dest('./dist'));
});