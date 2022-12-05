const withNextEnv = require('next-env');
const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

const app = {
	...withNextEnv(),
	...withNextra({
		i18n: {
			locales: ['en', 'bg', 'nl'],
			defaultLocale: 'en',
		},
	}),
};

module.exports = app;
