var gulp = require("gulp");
var sass = require("gulp-sass");
var source = require("vinyl-source-stream");
var browserify = require("browserify");

gulp.task("styles", function() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

gulp.task("browserify", function() {
  return (
    browserify("js/index.js")
      .bundle()
      //Pass desired output filename to vinyl-source-stream
      .pipe(source("js/app.js"))
      // Start piping stream to tasks!
      .pipe(gulp.dest("./build/"))
  );
});

gulp.task("default", function() {
  gulp.watch("scss/**/*.scss", gulp.series("styles"));
  gulp.watch("js/**/*.js", gulp.series("browserify"));
});
