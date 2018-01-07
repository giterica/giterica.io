const gulp = require("gulp");
const pug = require("gulp-pug");
const connect = require("gulp-connect");
const sass = require("gulp-sass");

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const PUG_RENDER_OPTIONS = {
  pretty: !IS_PRODUCTION
};
const TARGET_PATH = "docker/dist";

const sources = {
  pug: ["src/index.pug"],
  scss: ["src/all.scss"]
};

gulp.task("pug", () => {
  return gulp.src(sources.pug)
    .pipe(pug(PUG_RENDER_OPTIONS))
    .pipe(gulp.dest(TARGET_PATH))
    .pipe(connect.reload());
});

gulp.task('scss', () => {
  return gulp.src(sources.scss)
    .pipe(sass())
    .pipe(gulp.dest(`${TARGET_PATH}/css`))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch([sources.pug], ["pug"]);
  gulp.watch([sources.scss], ["scss"]);
});

gulp.task('connect', () => {
  connect.server({
    root: TARGET_PATH,
    livereload: true
  });
});

gulp.task("build", ["pug", "scss"]);
gulp.task("dev-server", ["build", "watch", "connect"]);
