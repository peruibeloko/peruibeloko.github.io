// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['~/assets/css/theme.css'],
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['typescript', 'javascript']
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://emoji.gg/assets/emoji/thonk.png'
        }
      ]
    }
  }
});
