// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    includeWorkspace: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
