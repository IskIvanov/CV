const withNextEnv = require('next-env');
const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra({
    i18n: {
        locales: ['en', 'bg', 'nl'],
        defaultLocale: 'en',
    },
})

module.exports = withNextEnv();