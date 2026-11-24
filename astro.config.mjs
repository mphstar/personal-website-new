// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mphstar.my.id',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
    },
  },
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const { pathname } = new URL(item.url);
        const path = pathname.replace(/\/+$/, "") || "/";

        if (path === "/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (path === "/portfolio" || path === "/achievements") {
          item.priority = 0.8;
          item.changefreq = "monthly";
        } else if (path.startsWith("/notes")) {
          item.priority = 0.5;
          item.changefreq = "monthly";
        }

        return item;
      },
    }),
  ],
});