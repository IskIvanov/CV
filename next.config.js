const withNextEnv = require('next-env');
const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

const app = Object.assign(withNextra({
  i18n: {
    locales: ['en', 'bg', 'nl'],
    defaultLocale: 'en',
  },
}), withNextEnv());

module.exports = app;