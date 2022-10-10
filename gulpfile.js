const { src, dest, series, watch } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

const styles = () => {
	return src('./src/scss/**/*.scss')
		.pipe(scss())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(cssMinify())
		.pipe(dest('./docs/css/'));
};

const html = () => {
	return src('./src/index.html').pipe(dest('./docs/'));
};

const watchTask = () => {
	watch(['./src/scss/**/*.scss', './src/index.html'], series(styles, html));
};

exports.default = series(styles, html, watchTask);
