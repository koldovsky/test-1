const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const angularTemplatecache = require('gulp-angular-templatecache');

gulp.task('partials', partials);

function partials() {
    return gulp.src(['src/app/**/*.html', '!src/index.html'])
        .pipe(htmlmin())
        .pipe(angularTemplatecache('templateCacheHtml.js', {
            module: 'myDemoApp',
            standalone: true
        }))
        .pipe(gulp.dest('dist'));
}