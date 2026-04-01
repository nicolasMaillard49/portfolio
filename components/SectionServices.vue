<template>
  <section id="services" class="py-24 relative">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16 reveal">
        <p class="text-electric-500 text-sm font-medium font-display mb-3 tracking-widest uppercase">Services</p>
        <div class="section-sep mb-5" />
        <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl leading-tight">
          Ce que je propose
        </h2>
        <p class="dark:text-gray-400 text-gray-500 mt-4 max-w-xl text-base leading-relaxed">
          Je crée des produits web qui allient esthétique, performance et respect de vos utilisateurs.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="reveal card-lift dark:bg-dark-card bg-white dark:border-dark-border border-gray-200 border rounded-2xl p-6 space-y-4 shadow-card-dark dark:hover:shadow-card-dark-hover hover:shadow-card-light-hover group"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            :style="`background: ${service.bgColor}`">
            <div v-html="service.icon" class="w-6 h-6 text-white" />
          </div>

          <div>
            <h3 class="font-display font-semibold dark:text-white text-navy-900 text-lg mb-2">{{ service.title }}</h3>
            <p class="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">{{ service.description }}</p>
          </div>

          <ul class="space-y-2">
            <li v-for="feat in service.features" :key="feat" class="flex items-center gap-2 text-sm dark:text-gray-300 text-gray-600">
              <svg class="w-4 h-4 text-electric-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              {{ feat }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA banner -->
      <div class="reveal dark:bg-gradient-to-r from-navy-900 to-navy-700 bg-gradient-to-r from-navy-900 to-navy-700 rounded-2xl p-8 md:p-10 relative overflow-hidden">
        <!-- Background glow -->
        <div class="absolute right-0 top-0 w-64 h-64 rounded-full bg-electric-500/15 blur-3xl pointer-events-none" />

        <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-electric-500/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span class="text-xs font-semibold text-electric-400 uppercase tracking-widest">Freelance</span>
            </div>
            <h3 class="font-display font-bold text-white text-2xl leading-tight">
              Vous avez un projet web ?
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed max-w-md">
              Performances optimales, design soigné, code maintenable. Je crée des sites modernes et durables adaptés à vos besoins.
            </p>
            <div class="flex flex-wrap gap-3 pt-1">
              <span v-for="tag in ctaTags" :key="tag" class="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium">{{ tag }}</span>
            </div>
          </div>
          <div class="shrink-0">
            <a
              href="#contact"
              @click.prevent="scrollTo('contact')"
              class="btn-ripple flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-medium text-sm transition-all shadow-glow-blue-sm hover:shadow-glow-blue whitespace-nowrap"
            >
              Demander un devis
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const ctaTags = ['Vue.js / Nuxt', 'Performance', 'SEO', 'Responsive', 'UI/UX']

const services = [
  {
    title: 'Sites Vitrine',
    description: 'Sites modernes, rapides et optimisés SEO pour présenter votre activité et attirer de nouveaux clients.',
    bgColor: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    features: [
      'Design sur mesure & responsive',
      'SEO local optimisé',
      'Hébergement France inclus',
      'RGPD & accessibilité',
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    title: 'E-commerce',
    description: 'Boutiques en ligne performantes avec gestion des stocks, paiements sécurisés et tunnel de conversion optimisé.',
    bgColor: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
    features: [
      'Catalogue & panier',
      'Paiement Stripe intégré',
      'Gestion des commandes',
      'Performance e-commerce',
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
  },
  {
    title: 'Systèmes de Réservation',
    description: 'Applications de réservation sur mesure pour salons, restaurants, coachs ou tout business nécessitant une gestion de créneaux.',
    bgColor: 'linear-gradient(135deg, #059669, #065F46)',
    features: [
      'Gestion des créneaux',
      'Notifications automatiques',
      'Interface admin intuitive',
      'Intégration agenda',
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
  },
]
</script>
