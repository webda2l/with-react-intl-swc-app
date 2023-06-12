// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  experimental: {
    swcPlugins: [
      [
        '@formatjs/swc-plugin-experimental',
        // {
        //   ast: true,
        // },
      ],
    ],
  },
}
