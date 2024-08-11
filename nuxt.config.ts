import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/mdc'],
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
      ],
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  compatibilityDate: '2024-08-10'
});