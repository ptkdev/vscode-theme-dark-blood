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
const gulp_minifyjson = require("gulp-jsonminify");
const gulp_replace = require("gulp-replace");

gulp.task("build-js-themes", function() {
	let files = [`./themes/*.json`];

	return gulp.src(files)
		.pipe(gulp_minifyjson())
		.pipe(gulp.dest(`./build/ptkdev.dark-blood-theme/themes/`));
});

gulp.task("build-js-syntaxes", function() {
	let files = [`./syntaxes/*.json`];

	return gulp.src(files)
		.pipe(gulp_minifyjson())
		.pipe(gulp.dest(`./build/ptkdev.dark-blood-theme/syntaxes/`));
});

gulp.task("build-images", function() {
	let files = [`./themes/*.png`];

	return gulp.src(files)
		.pipe(gulp.dest(`./build/ptkdev.dark-blood-theme/`));
});

gulp.task("build-manifest", function() {
	let files = [`./package.json`, `./README.md`];

	return gulp.src(files)
		.pipe(gulp_replace("@ptkdev/vscode-theme-dark-blood", "dark-blood-theme"))
		.pipe(gulp.dest(`./build/ptkdev.dark-blood-theme/`));
});

gulp.task("build", gulp.series("build-js-themes", "build-js-syntaxes", "build-images", "build-manifest"));