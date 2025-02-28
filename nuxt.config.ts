// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  fonts: {
    experimental: {
      processCSSVariables: true
    }
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  compatibilityDate: '2024-12-18',
})