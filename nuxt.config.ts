import tailwindcss from '@tailwindcss/vite';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
    includeWorkspace: true,
  },

  modules: ['@nuxt/eslint'],
  // @ts-expect-error eslint-configuration
  eslint: {
    config: {
      standalone: false,
    },
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    },
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  compatibilityDate: '2024-12-18'
})