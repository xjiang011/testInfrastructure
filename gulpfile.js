
'use strict';


const gulp = require('gulp');
const encrypt = require('gulp-openssl-encrypt');
const rename = require('gulp-rename');
const template = require('gulp-template');
const runSequence = require('run-sequence');
const fs = require('fs');

gulp.task('createDotEnvFile', function () {
  return gulp.src('./config/dot-env.tpl')
    .pipe(template({ stage: process.env.STAGE }))
    .pipe(rename('./.env'))
    .pipe(gulp.dest('./'));
});
    
gulp.task('createInfo', () => {
  const info = {
    gitRevision: `${process.env.GIT_COMMIT}`,
  };
  fs.writeFile('../config/info.json', JSON.stringify(info), (err) => {
    if (err) {
      throw err;
    } else {
      console.info('Info created');
      console.info(info);
    }
  });
});