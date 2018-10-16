var gulp = require('gulp');

gulp.task('default', [], function() {
  console.log("Moving js files from /lib to the root");
  gulp.src("../lib/*.js")
      .pipe(gulp.dest('../'));
});