const gulp = require("gulp");
const pug = require("gulp-pug");
const connect = require("gulp-connect");
const sass = require("gulp-sass");

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const BROADCAST_DEV_SERVER = Boolean(process.env.GI_BROADCAST_DEV_SERVER);
const PUG_RENDER_OPTIONS = {
  pretty: !IS_PRODUCTION
};

const TARGET_PATH = IS_PRODUCTION ? "docker/dist" : "dev-dist";

const sources = {
  pug: ["src/index.pug"],
  scss: ["src/all.1.scss"]
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
    livereload: true,
    host: BROADCAST_DEV_SERVER ? "0.0.0.0" : "localhost"
  });
});

gulp.task("build", ["pug", "scss"]);
gulp.task("dev-server", ["build", "watch", "connect"]);
