import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://myfutureurl.vercel.app'
    : 'http://localhost:4321',
  output: "hybrid",
  vite: {
    ssr: {
      noExternal: ["@radix-ui/*"],
    },
  },
  integrations: [
    react(),
    astroI18next(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: vercel(),
});