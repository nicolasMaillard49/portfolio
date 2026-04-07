// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 0,
  },

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
      title: 'NMF Agence — Agence Web Full-Stack Bordeaux',
      meta: [
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        {
          name: 'description',
          content:
            'NMF Agence, agence web full-stack basée à Bordeaux. Spécialisée Vue.js, Nuxt, TypeScript, NestJS. Création de sites vitrine, e-commerce et systèmes de réservation.',
        },
        { name: 'theme-color', content: '#6366F1' },
        { name: 'author', content: 'NMF Agence' },
        { name: 'geo.region', content: 'FR-NAQ' },
        { name: 'geo.placename', content: 'Bordeaux' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'NMF Agence' },
        {
          property: 'og:title',
          content: 'NMF Agence — Agence Web Full-Stack Bordeaux',
        },
        {
          property: 'og:description',
          content:
            'Agence web full-stack basée à Bordeaux. Création de sites vitrine, e-commerce et systèmes de réservation. Vue.js, Nuxt, TypeScript.',
        },
        { property: 'og:url', content: 'https://nicolasmaillard.dev' },
        { property: 'og:image', content: 'https://nicolasmaillard.dev/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'NMF Agence — Agence Web Full-Stack Bordeaux' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'NMF Agence — Agence Web Full-Stack Bordeaux',
        },
        {
          name: 'twitter:description',
          content:
            'Agence web full-stack basée à Bordeaux. Création de sites vitrine, e-commerce et systèmes de réservation.',
        },
        { name: 'twitter:image', content: 'https://nicolasmaillard.dev/og-image.png' },
        { name: 'twitter:image:alt', content: 'NMF Agence — Agence Web Full-Stack Bordeaux' },
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
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': 'https://nicolasmaillard.dev/#website',
                url: 'https://nicolasmaillard.dev',
                name: 'NMF Agence',
                description: 'Agence Web Full-Stack Bordeaux',
                inLanguage: 'fr-FR',
                publisher: { '@id': 'https://nicolasmaillard.dev/#organization' },
              },
              {
                '@type': ['Organization', 'LocalBusiness'],
                '@id': 'https://nicolasmaillard.dev/#organization',
                name: 'NMF Agence',
                url: 'https://nicolasmaillard.dev',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://nicolasmaillard.dev/og-image.png',
                  width: 1200,
                  height: 630,
                },
                image: 'https://nicolasmaillard.dev/og-image.png',
                description: 'Agence web full-stack basée à Bordeaux. Création de sites vitrine, e-commerce et systèmes de réservation.',
                founder: { '@type': 'Person', name: 'Nicolas Maillard' },
                sameAs: [
                  'https://github.com/nicolasMaillard49',
                  'https://www.linkedin.com/in/nicolas-maillard-dev/',
                ],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Bordeaux',
                  addressRegion: 'Nouvelle-Aquitaine',
                  addressCountry: 'FR',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 44.8378,
                  longitude: -0.5792,
                },
                areaServed: {
                  '@type': 'GeoCircle',
                  geoMidpoint: { '@type': 'GeoCoordinates', latitude: 44.8378, longitude: -0.5792 },
                  geoRadius: '50000',
                },
                priceRange: '€€',
                knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'TailwindCSS', 'NestJS', 'Prisma'],
              },
              {
                '@type': 'Service',
                name: 'Création de sites vitrine',
                description: 'Sites modernes, rapides et optimisés SEO pour présenter votre activité et attirer de nouveaux clients.',
                provider: { '@id': 'https://nicolasmaillard.dev/#organization' },
                areaServed: { '@type': 'City', name: 'Bordeaux' },
                serviceType: 'Développement web',
              },
              {
                '@type': 'Service',
                name: 'Création de sites e-commerce',
                description: 'Boutiques en ligne performantes avec gestion des stocks, paiements sécurisés et tunnel de conversion optimisé.',
                provider: { '@id': 'https://nicolasmaillard.dev/#organization' },
                areaServed: { '@type': 'City', name: 'Bordeaux' },
                serviceType: 'E-commerce',
              },
              {
                '@type': 'Service',
                name: 'Systèmes de réservation',
                description: 'Applications de réservation sur mesure pour salons, restaurants, coachs ou tout business nécessitant une gestion de créneaux.',
                provider: { '@id': 'https://nicolasmaillard.dev/#organization' },
                areaServed: { '@type': 'City', name: 'Bordeaux' },
                serviceType: 'Application web',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://nicolasmaillard.dev' },
                ],
              },
              {
                '@type': 'WebPage',
                '@id': 'https://nicolasmaillard.dev/#webpage',
                url: 'https://nicolasmaillard.dev',
                name: 'NMF Agence — Agence Web Full-Stack Bordeaux',
                description: 'NMF Agence, agence web full-stack basée à Bordeaux. Création de sites vitrine, e-commerce et systèmes de réservation.',
                isPartOf: { '@id': 'https://nicolasmaillard.dev/#website' },
                about: { '@id': 'https://nicolasmaillard.dev/#organization' },
                inLanguage: 'fr-FR',
              },
            ],
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
