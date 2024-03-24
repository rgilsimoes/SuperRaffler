/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es", "pt"],
  resourcesBasePath: "/i18n",
  i18nextServer: {
    debug: true,
    detection: {},
  },
  i18nextClient: {
    debug: true,
    detection: {},
  },
};