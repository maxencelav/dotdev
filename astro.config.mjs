import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: 'https://maxencelav.github.io',
  base: '/dotpro',
  integrations: [tailwind(), mdx()]
});