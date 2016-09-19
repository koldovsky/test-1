'use strict';

var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var tasksPath = path.join(__dirname, 'gulpTasks');
var tasks = fs.readdirSync(tasksPath);

tasks.forEach(function(task) {
    require(path.join(tasksPath, path.basename(task, path.extname(task))));
});

gulp.task('production', ['inject']);