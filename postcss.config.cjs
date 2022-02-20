const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')


const config = {
	plugins: [autoprefixer, purgecss({content: ['./lib/**/*.svelte', './lib/**/*.html']})]
};

module.exports = config;
