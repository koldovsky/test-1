'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    console.log('clean');

    return gulp.src('dist', {
            read: false
        })
        .pipe(clean());
});