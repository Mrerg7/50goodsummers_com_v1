import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://50goodsummers.com',
  trailingSlash: 'never',
  integrations: [
    tailwind(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
