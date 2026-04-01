<template>
  <section id="projects" class="py-24 relative dark:bg-dark-surface/40 bg-gray-50/60">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-12 reveal">
        <p class="text-electric-500 text-sm font-medium font-display mb-3 tracking-widest uppercase">Portfolio</p>
        <div class="section-sep mb-5" />
        <div class="flex flex-wrap items-end justify-between gap-4">
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl leading-tight">
            Mes réalisations
          </h2>
          <a
            href="https://github.com/nicolasMaillard49"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 transition-colors"
          >
            Voir tout sur GitHub
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>

      <!-- Filter tabs -->
      <div class="reveal reveal-delay-1 flex flex-wrap gap-2 mb-10">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
          :class="activeFilter === filter
            ? 'bg-electric-500 text-white shadow-glow-blue-sm'
            : 'dark:bg-dark-card bg-white dark:text-gray-400 text-gray-600 dark:border-dark-border border-gray-200 border dark:hover:text-white hover:text-navy-900'"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup name="project-grid">
          <div
            v-for="(project, i) in filteredProjects"
            :key="project.id"
            class="reveal card-lift dark:bg-dark-card bg-white dark:border-dark-border border-gray-200 border rounded-2xl overflow-hidden group shadow-card-dark dark:hover:shadow-card-dark-hover hover:shadow-card-light-hover"
            :class="`reveal-delay-${Math.min(i + 1, 5)}`"
          >
            <!-- Screenshot preview -->
            <div class="relative h-44 overflow-hidden bg-gray-900">
              <img
                v-if="project.screenshot"
                :src="project.screenshot"
                :alt="`Aperçu de ${project.title}`"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <!-- Fallback gradient if no screenshot -->
              <div
                v-else
                class="w-full h-full flex items-center justify-center"
                :style="`background: linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`"
              >
                <div class="text-center">
                  <div class="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <component :is="'div'" v-html="project.icon" class="w-6 h-6 text-white" />
                  </div>
                  <span class="text-white/70 text-xs font-medium">{{ project.type }}</span>
                </div>
              </div>
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <a v-if="project.url" :href="project.url" target="_blank" rel="noopener"
                  class="px-4 py-2 bg-electric-500 text-white text-xs font-semibold rounded-lg hover:bg-electric-400 transition-colors">
                  Voir le site
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener"
                  class="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                  GitHub
                </a>
              </div>
              <!-- Featured badge -->
              <div v-if="project.featured" class="absolute top-3 left-3 px-2.5 py-1 bg-electric-500 rounded-full text-white text-[10px] font-semibold tracking-wide z-10">
                ⭐ Mis en avant
              </div>
              <!-- Live badge -->
              <div v-if="project.live" class="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-[10px] font-medium z-10">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Live
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 space-y-3">
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-display font-semibold dark:text-white text-navy-900 text-base leading-snug group-hover:text-electric-400 transition-colors">
                  {{ project.title }}
                </h3>
                <span class="shrink-0 text-[10px] dark:bg-dark-border bg-gray-100 dark:text-gray-400 text-gray-500 px-2 py-0.5 rounded-full">
                  {{ project.type }}
                </span>
              </div>
              <p class="dark:text-gray-400 text-gray-500 text-sm leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>
              <!-- Tech stack -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span v-for="t in project.tech" :key="t" class="tech-tag">{{ t }}</span>
              </div>
              <!-- Actions -->
              <div class="flex items-center gap-3 pt-2">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 text-xs dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 transition-colors font-medium"
                >
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  Code
                </a>
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 text-xs text-electric-400 hover:text-electric-300 transition-colors font-medium ml-auto"
                >
                  Voir le site
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeFilter = ref('Tous')

const filters = ['Tous', 'Vue.js', 'Nuxt', 'TypeScript', 'NestJS', 'E-commerce', 'WordPress']

// Microlink API pour screenshots live (gratuit, pas besoin de clé)
const screenshot = (url: string) => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

const projects = [
  {
    id: 'purewebagency',
    title: 'Pure Web Agency',
    description: 'Site officiel de mon agence web. Présentation des services, hébergement France, conformité RGPD. Vitrine moderne construite avec Nuxt 3.',
    type: 'Agence Web',
    tech: ['Nuxt 3', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/purewebagency-nuxt',
    url: 'https://purewebagency.com',
    screenshot: screenshot('https://purewebagency.com'),
    live: true,
    featured: true,
    gradient: ['#1E3A5F', '#0F2044'],
    tags: ['Nuxt', 'TypeScript'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  },
  {
    id: 'anthonyfrides',
    title: 'Anthony Fridès',
    description: 'Site vitrine professionnel pour un expert en communication et relations publiques. Design moderne mettant en valeur son expertise et ses prestations.',
    type: 'Site Vitrine',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://www.anthonyfrides.fr/',
    screenshot: screenshot('https://www.anthonyfrides.fr/'),
    live: true,
    featured: true,
    gradient: ['#1E3A5F', '#2563EB'],
    tags: ['WordPress'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
  },
  {
    id: 'larencontre',
    title: 'Restaurant La Rencontre',
    description: 'Site vitrine pour un restaurant traditionnel. Menu en ligne, présentation du chef, prise de réservation. Design chaleureux et appétissant.',
    type: 'Restaurant',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://restaurantlarencontre.com/',
    screenshot: screenshot('https://restaurantlarencontre.com/'),
    live: true,
    featured: false,
    gradient: ['#92400E', '#78350F'],
    tags: ['WordPress'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
  },
  {
    id: 'lecoinburger',
    title: 'Le Coin Burger',
    description: 'Site vitrine pour un burger artisanal. Présentation de la carte, ambiance chaleureuse, commande en ligne. Design moderne et gourmand.',
    type: 'Restaurant',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://www.lecoinburger.fr/',
    screenshot: screenshot('https://www.lecoinburger.fr/'),
    live: true,
    featured: false,
    gradient: ['#DC2626', '#7F1D1D'],
    tags: ['WordPress'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
  },
  {
    id: 'cafebionature',
    title: 'Café Bio Nature',
    description: 'Site vitrine pour un café bio et naturel. Mise en avant des produits sains, ambiance zen et organic. Design épuré aux tons naturels.',
    type: 'Site Vitrine',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://www.purewebagency.com/cafebionature/',
    screenshot: screenshot('https://www.purewebagency.com/cafebionature/'),
    live: true,
    featured: false,
    gradient: ['#065F46', '#022C22'],
    tags: ['WordPress'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>',
  },
  {
    id: 'salon-booking',
    title: 'Salon Booking',
    description: 'Système de réservation complet pour salon de coiffure. Gestion des créneaux, profils clients, notifications, backend NestJS + Prisma.',
    type: 'Application Web',
    tech: ['Vue.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/nicolasMaillard49/salon-booking',
    url: null,
    screenshot: null,
    live: false,
    featured: true,
    gradient: ['#7C3AED', '#4C1D95'],
    tags: ['Vue.js', 'NestJS'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
  },
  {
    id: 'spuc-boxing',
    title: 'SPUC Boxing Club',
    description: 'Site vitrine pour le club de boxe de Pessac. Présentation des cours, horaires, galerie. Construit avec Vue/Nuxt pour des performances optimales.',
    type: 'Site Vitrine',
    tech: ['Vue.js', 'Nuxt', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/spuc-boxing-club',
    url: null,
    screenshot: null,
    live: false,
    featured: false,
    gradient: ['#DC2626', '#7F1D1D'],
    tags: ['Vue.js', 'Nuxt'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>',
  },
  {
    id: 'julien-perret',
    title: 'Julien Perret Charpentier',
    description: 'Site vitrine pour un artisan charpentier bordelais. Présentation des réalisations, devis en ligne, SEO local optimisé.',
    type: 'Site Vitrine',
    tech: ['Vue.js', 'Nuxt', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/julien-perret-charpentier',
    url: null,
    screenshot: null,
    live: false,
    featured: false,
    gradient: ['#92400E', '#451A03'],
    tags: ['Vue.js', 'Nuxt', 'TypeScript'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
  },
  {
    id: 'ecommerce',
    title: 'First E-commerce Site',
    description: 'Boutique e-commerce complète avec catalogue produits, panier, gestion des commandes. Premier projet e-commerce développé avec Vue.js.',
    type: 'E-commerce',
    tech: ['Vue.js', 'JavaScript', 'CSS3'],
    github: 'https://github.com/nicolasMaillard49/first-ecommerce-site',
    url: null,
    screenshot: null,
    live: false,
    featured: false,
    gradient: ['#065F46', '#022C22'],
    tags: ['Vue.js', 'E-commerce'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter((p) => p.tags.includes(activeFilter.value))
})
</script>

<style scoped>
.project-grid-enter-active { transition: all 0.35s ease; }
.project-grid-leave-active { transition: all 0.2s ease; }
.project-grid-enter-from { opacity: 0; transform: scale(0.95) translateY(10px); }
.project-grid-leave-to { opacity: 0; transform: scale(0.95); }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
</style>
