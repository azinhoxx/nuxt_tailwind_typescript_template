import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
  // @ts-expect-error eslint-configuration
  eslint: {
    config: {
      standalone: false,
    },
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  compatibilityDate: '2024-12-18',
})