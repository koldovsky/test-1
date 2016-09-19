'use strict';

var gulp = require('gulp'),
    bundle = require('gulp-bundle-assets');

gulp.task('bundle', ['clean'], function() {
    console.log('bundle');
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./dist'));
});