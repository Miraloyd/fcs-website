// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://miraloyd.github.io',
  base: '/fcs-website/',
  vite: {
    plugins: [tailwindcss()]
  }
});
