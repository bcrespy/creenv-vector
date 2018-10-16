var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', [], function() {
  console.log("Deleting js files from to the root");
  gulp.src("../*.js")
      .pipe(clean({force: true}));
});