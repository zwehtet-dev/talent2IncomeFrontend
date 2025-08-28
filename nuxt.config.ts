// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js'
  },

  typescript: {
    typeCheck: true
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})