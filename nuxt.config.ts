import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/mdc'],
  css: ['~/assets/css/theme.css'],

  content: {
    renderer: {
      anchorLinks: false
    },
    build: {
      markdown: {
        highlight: {
          theme: 'gruvbox-dark-hard',
          preload: ['typescript', 'javascript']
        }
      }
    }
  },

  app: {
    head: {
      title: 'Carlinhos',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://emoji.gg/assets/emoji/thonk.png'
        },
        {
          rel: 'me',
          href: 'https://mastodon.social/@peruibeloko'
        }
      ],
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  }
});
