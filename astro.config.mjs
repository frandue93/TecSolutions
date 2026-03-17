// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://alfarotec.com';

// https://astro.build/config
export default defineConfig({

  site,

  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    preact(), 
    sitemap(),

  ],
});