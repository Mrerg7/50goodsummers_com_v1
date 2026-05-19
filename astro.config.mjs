import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://50goodsummers.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.9,
    }),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
