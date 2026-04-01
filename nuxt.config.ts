// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://nicolasmaillard.dev',
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nicolas Maillard — Développeur Web Full-Stack Bordeaux',
      meta: [
        {
          name: 'description',
          content:
            'Nicolas Maillard, développeur web full-stack basé à Bordeaux. Spécialisé Vue.js, Nuxt, TypeScript, NestJS. Création de sites vitrine, e-commerce et systèmes de réservation.',
        },
        { name: 'theme-color', content: '#6366F1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        {
          property: 'og:title',
          content: 'Nicolas Maillard — Développeur Web Full-Stack Bordeaux',
        },
        {
          property: 'og:description',
          content:
            'Développeur web full-stack basé à Bordeaux. Vue.js, Nuxt, TypeScript, NestJS, Prisma.',
        },
        { property: 'og:url', content: 'https://nicolasmaillard.dev' },
        { property: 'og:image', content: 'https://nicolasmaillard.dev/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Nicolas Maillard — Développeur Web Full-Stack Bordeaux',
        },
        {
          name: 'twitter:description',
          content:
            'Développeur web full-stack basé à Bordeaux. Vue.js, Nuxt, TypeScript, NestJS, Prisma.',
        },
      ],
      link: [
        { rel: 'canonical', href: 'https://nicolasmaillard.dev' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Nicolas Maillard',
            jobTitle: 'Développeur Web Full-Stack',
            url: 'https://nicolasmaillard.dev',
            sameAs: ['https://github.com/nicolasMaillard49'],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bordeaux',
              addressCountry: 'FR',
            },
            knowsAbout: [
              'Vue.js',
              'Nuxt',
              'TypeScript',
              'TailwindCSS',
              'NestJS',
              'Prisma',
            ],
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Studi.fr',
              description: 'Bachelor Développement Web',
            },
          }),
        },
      ],
    },
  },

  routeRules: {
    '/': { prerender: true },
  },

  nitro: {
    compressPublicAssets: true,
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
  },

  compatibilityDate: '2024-11-01',
})
