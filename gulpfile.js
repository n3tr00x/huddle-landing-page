const { src, dest, series, watch } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

const styles = () => {
	return src('./scss/**/*.scss')
		.pipe(scss())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(cssMinify())
		.pipe(dest('./css/'));
};

const watchTask = () => {
	watch('./scss/**/*.scss', series(styles));
};

exports.default = series(styles, watchTask);
