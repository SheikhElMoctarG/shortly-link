// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['./assets/css/main.css'],
  modules: ['@nuxtjs/supabase', '@nuxt/ui'],
  supabase: {
    redirect: false
  },
  runtimeConfig: {
    public: {
      app_url: process.env.URL
    }
  }
})
