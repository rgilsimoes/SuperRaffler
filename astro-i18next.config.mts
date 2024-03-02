/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es", "pt"],
  resourcesBasePath: "/i18n",
  i18nextServer: {
    debug: false,
    locales: ["en", "es", "pt"],
    defaultLocale: "en",

  },
  i18nextClient: {
    debug: false,
    detection: {},
  },
};