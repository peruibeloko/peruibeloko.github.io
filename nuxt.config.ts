// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['~/assets/css/theme.css'],
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['typescript', 'javascript']
    }
  }
});
