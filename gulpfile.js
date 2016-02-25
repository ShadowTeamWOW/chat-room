'use strict';

const gulp  = require('gulp');
const path  = require('path');
const less  = require('gulp-less');
const watch = require('gulp-watch');


gulp.task('less', function () {
    return gulp.src('./public/assets/less/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/assets/css'));
});

