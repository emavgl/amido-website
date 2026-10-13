import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://tippy.viglianisi.eu',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
