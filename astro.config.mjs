// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({

  ...(site ? { site } : {}),

  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    preact(), 
    sitemap(),

  ],
});