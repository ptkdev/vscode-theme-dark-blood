/**
 * Gulp Config
 * =====================
 * Automation task
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */
const gulp = require("gulp");
const gulp_concat = require("gulp-concat");
const gulp_minifyjson = require("gulp-jsonminify");
const gulp_rename = require("gulp-rename");

gulp.task("build-js", function() {
	let files = [`./themes/dark-blood.json`];

	return gulp.src(files)
		.pipe(gulp_concat({path: "dark-blood.min.tmp"}))
		.pipe(gulp_minifyjson())
		.pipe(gulp_rename("dark-blood.json"))
		.pipe(gulp.dest(`./build/ptkdev.dark-blood-theme/themes/`));
});

gulp.task("build-images", function() {
	let files = [`./themes/*.png`];

	return gulp.src(files)
		.pipe(gulp.dest(`./build/ptkdev.dark-blood-theme/`));
});

gulp.task("build-manifest", function() {
	let files = [`./package.json`, `./README.md`];

	return gulp.src(files)
		.pipe(gulp.dest(`./build/ptkdev.dark-blood-theme/`));
});

gulp.task("build-watch", (done) => {
	gulp.watch([`./client/js/**/*.js`]).on("change", gulp.parallel("build-js"));
	gulp.watch([`./client/images/**/*`]).on("change", gulp.parallel("build-images"));
	gulp.watch([`./configs/**/*`]).on("change", gulp.parallel("build-manifest"));

	done();
});

gulp.task("build", gulp.series("build-js", "build-images", "build-manifest"));

gulp.task("dev", gulp.parallel("build-watch"));