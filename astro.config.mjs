import { defineConfig, envField, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://maxencelav.dev',
  base: '/',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/cv': '/assets/docs/Maxence_Lavenu_CV.pdf'
  },
  env: {
    schema: {
      PUBLIC_EMAIL: envField.string({ context: 'client', access: 'public' })
    }
  },
  // https://docs.astro.build/en/guides/fonts/
  // Self-hosts Google Fonts at build time instead of loading them from
  // fonts.googleapis.com/fonts.gstatic.com on every page request.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
      weights: ["100 900"],
      styles: ["normal", "italic"],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Color Emoji",
      cssVariable: "--font-noto-color-emoji",
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});