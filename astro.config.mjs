import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: 'https://maxencelav.dev',
  base: '/',
  integrations: [tailwind(), mdx()]
});