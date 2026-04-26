<template>
  <section id="pricing" class="py-24 relative">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <p class="text-electric-500 text-sm font-medium font-display mb-3 tracking-widest uppercase">Tarifs</p>
        <div class="section-sep mx-auto mb-5" />
        <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl leading-tight mb-4">
          Des prix clairs, sans surprise
        </h2>
        <p class="dark:text-gray-400 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Choisissez la formule qui correspond à votre projet. Maintenance mensuelle sur devis, adaptée à vos besoins.
        </p>
      </div>

      <!-- Pricing grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          class="reveal relative glass-card rounded-2xl p-8 shadow-glass card-lift flex flex-col"
          :class="[
            plan.featured ? 'dark:border-electric-500/40 border-electric-500/40 border-2 shadow-glow-blue-sm' : '',
          ]"
          :style="{ animationDelay: `${i * 80}ms` }"
        >
          <!-- Badge -->
          <div
            v-if="plan.featured"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-electric-500 rounded-full text-white text-[11px] font-semibold tracking-wide whitespace-nowrap"
          >
            ⭐ Le plus populaire
          </div>

          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            :style="`background: linear-gradient(135deg, ${plan.gradient[0]}, ${plan.gradient[1]})`"
          >
            <div v-html="plan.icon" class="w-6 h-6 text-white" />
          </div>

          <!-- Name + desc -->
          <h3 class="font-display font-semibold dark:text-white text-navy-900 text-xl mb-2">
            {{ plan.name }}
          </h3>
          <p class="dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-6">
            {{ plan.description }}
          </p>

          <!-- Price -->
          <div class="mb-5">
            <div class="flex items-baseline gap-1">
              <span class="font-display font-bold dark:text-white text-navy-900 text-4xl">
                {{ plan.price }}€
              </span>
              <span class="dark:text-gray-500 text-gray-400 text-sm">HT</span>
            </div>
            <p class="dark:text-gray-500 text-gray-500 text-xs mt-1">Paiement unique à la livraison</p>
          </div>

          <!-- Maintenance -->
          <div class="glass-strong rounded-xl p-3 mb-6 flex items-center gap-2">
            <svg class="w-4 h-4 text-electric-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div class="flex-1 min-w-0">
              <p class="dark:text-gray-300 text-gray-700 text-xs font-medium">
                + Maintenance {{ plan.maintenance }}
              </p>
              <p class="dark:text-gray-500 text-gray-500 text-[10px]">
                Tarif sur devis
              </p>
            </div>
          </div>

          <!-- Features -->
          <ul class="space-y-2.5 mb-6 flex-1">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2">
              <svg class="w-4 h-4 text-electric-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="dark:text-gray-300 text-gray-700 text-sm leading-relaxed">{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <a
            href="#contact"
            @click.prevent="openQuote(plan)"
            class="btn-ripple block text-center px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200"
            :class="plan.featured
              ? 'bg-electric-500 hover:bg-electric-600 text-white shadow-glow-blue-sm hover:shadow-glow-blue'
              : 'glass-card dark:text-white text-navy-900'"
          >
            Demander un devis
          </a>
        </div>
      </div>

      <!-- Note -->
      <p class="text-center dark:text-gray-500 text-gray-500 text-xs mt-8 max-w-2xl mx-auto">
        Tous nos tarifs s'entendent hors taxes. Un premier échange gratuit permet de cadrer précisément votre projet et de vous proposer un devis définitif.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const prefill = useContactPrefill()

const subjectForPlan = (name: string) => {
  if (/vitrine/i.test(name)) return 'Site Vitrine'
  if (/réservation|reservation/i.test(name)) return 'Système de réservation'
  if (/e-?commerce/i.test(name)) return 'Site E-commerce'
  return 'Autre projet'
}

const openQuote = (plan: { name: string; price: number }) => {
  prefill.value = {
    subject: subjectForPlan(plan.name),
    message: `Bonjour,\n\nJe suis intéressé(e) par la formule « ${plan.name} » (${plan.price}€ HT) et souhaiterais recevoir un devis détaillé.\n\nMon projet : `,
  }
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const plans = [
  {
    name: 'Site Vitrine',
    description: 'Un site professionnel pour présenter votre activité et gagner en visibilité.',
    price: 299,
    maintenance: 'standard',
    featured: true,
    gradient: ['#6366F1', '#A78BFA'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
    features: [
      'Design moderne et responsive',
      'Jusqu\'à 5 pages sur-mesure',
      'Formulaire de contact',
      'SEO de base inclus',
      'Conformité RGPD',
      'Mise en ligne + nom de domaine',
    ],
  },
  {
    name: 'Site Réservation',
    description: 'Un site vitrine avec module de réservation pour automatiser vos prises de rendez-vous.',
    price: 499,
    maintenance: 'premium',
    featured: false,
    gradient: ['#2563EB', '#1E3A8A'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    features: [
      'Tout ce qui est inclus dans Site Vitrine',
      'Module de réservation en ligne',
      'Gestion des créneaux disponibles',
      'Notifications email automatiques',
      'Espace client personnalisé',
      'Tableau de bord simplifié',
    ],
  },
  {
    name: 'Site E-commerce',
    description: 'Une boutique en ligne complète pour vendre vos produits en toute autonomie.',
    price: 499,
    maintenance: 'prestige',
    featured: false,
    gradient: ['#0F766E', '#134E4A'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
    features: [
      'Catalogue produits illimité',
      'Paiement sécurisé Stripe',
      'Gestion des commandes',
      'Emails transactionnels',
      'Suivi des stocks',
      'Back-office autonome',
    ],
  },
]
</script>
