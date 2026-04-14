<template>
  <section id="ai-assistant" class="py-24 relative overflow-hidden">
    <!-- Gold ambient glow backgrounds -->
    <div class="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
      <div class="absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl" style="background: radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 70%)" />
      <div class="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl" style="background: radial-gradient(circle, rgba(234,179,8,0.10) 0%, transparent 70%)" />
    </div>

    <div class="relative max-w-6xl mx-auto px-6 pt-6">
      <div class="reveal relative">
        <!-- Badge NEW (sibling, not clipped) -->
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-10 max-w-[90vw]">
          <span class="inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-widest uppercase text-white shadow-lg whitespace-nowrap"
            style="background: linear-gradient(135deg, #D97706, #F59E0B); box-shadow: 0 0 20px rgba(234,179,8,0.4);"
          >
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.39 7.36H22l-6.2 4.5 2.39 7.36L12 16.72l-6.19 4.5 2.39-7.36L2 9.36h7.61z" />
            </svg>
            Nouveau
          </span>
        </div>

        <div class="rounded-3xl p-[2px] overflow-hidden"
          style="background: linear-gradient(135deg, #FDE68A 0%, #D97706 25%, #F59E0B 50%, #D97706 75%, #FDE68A 100%); background-size: 300% 300%; animation: goldShine 8s ease-in-out infinite;"
        >
        <div class="relative rounded-[22px] dark:bg-[rgba(12,12,22,0.92)] bg-white/95 backdrop-blur-xl p-8 md:p-14">

          <div class="grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <!-- Left: content -->
            <div class="space-y-6">
              <div class="space-y-3">
                <p class="text-sm font-medium font-display tracking-widest uppercase" style="background: linear-gradient(90deg, #D97706, #F59E0B); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;">
                  Service exclusif — IA téléphonique
                </p>
                <h2 class="font-display font-bold dark:text-white text-navy-900 text-3xl md:text-4xl leading-tight">
                  Passez votre activité à la
                  <span class="relative inline-block">
                    <span style="background: linear-gradient(90deg, #D97706, #F59E0B, #FDE68A); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">vitesse supérieure</span>
                  </span>
                </h2>
              </div>

              <p class="dark:text-gray-300 text-gray-700 text-base leading-relaxed">
                Une <strong class="dark:text-white text-navy-900">intelligence artificielle connectée à votre téléphone</strong> qui répond à vos clients 24h/24, prend les commandes, gère les réservations et programme vos interventions — <strong class="dark:text-white text-navy-900">sans que vous ayez à lever le petit doigt</strong>.
              </p>

              <!-- Benefits -->
              <div class="space-y-3">
                <div
                  v-for="benefit in benefits"
                  :key="benefit.title"
                  class="flex items-start gap-3 glass-card rounded-xl p-3.5 border-l-4"
                  style="border-left-color: #F59E0B"
                >
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white [&_svg]:w-5 [&_svg]:h-5" style="background: linear-gradient(135deg, #D97706, #F59E0B)" v-html="benefit.icon" />
                  <div>
                    <p class="dark:text-white text-navy-900 text-sm font-semibold mb-0.5">{{ benefit.title }}</p>
                    <p class="dark:text-gray-400 text-gray-600 text-xs leading-relaxed">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="flex flex-wrap gap-3 pt-2">
                <a
                  href="#contact"
                  @click.prevent="scrollTo"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                  style="background: linear-gradient(135deg, #D97706, #F59E0B); box-shadow: 0 10px 30px -10px rgba(234,179,8,0.5);"
                >
                  Découvrir le service
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <span class="inline-flex items-center gap-1.5 text-xs dark:text-gray-500 text-gray-500 font-medium px-3">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" style="color: #F59E0B">
                    <path d="M12 2l2.39 7.36H22l-6.2 4.5 2.39 7.36L12 16.72l-6.19 4.5 2.39-7.36L2 9.36h7.61z" />
                  </svg>
                  Démo gratuite sur simple demande
                </span>
              </div>
            </div>

            <!-- Right: use cases -->
            <div class="space-y-4">
              <p class="dark:text-gray-400 text-gray-500 text-sm font-medium font-display tracking-widest uppercase text-center md:text-left">
                Parfait pour
              </p>
              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="useCase in useCases"
                  :key="useCase.label"
                  class="glass-card rounded-xl p-4 text-center card-lift relative overflow-hidden group"
                >
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: linear-gradient(135deg, rgba(234,179,8,0.08) 0%, transparent 100%)" />
                  <div class="relative">
                    <div class="text-3xl mb-2">{{ useCase.emoji }}</div>
                    <p class="dark:text-white text-navy-900 text-xs font-semibold mb-1">{{ useCase.label }}</p>
                    <p class="dark:text-gray-400 text-gray-500 text-[10px] leading-relaxed">{{ useCase.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Key stat -->
              <div class="glass-strong rounded-xl p-4 text-center" style="border: 1px solid rgba(234,179,8,0.3)">
                <p class="text-2xl md:text-3xl font-display font-bold mb-1" style="background: linear-gradient(90deg, #D97706, #F59E0B); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">
                  +40% de clients
                </p>
                <p class="dark:text-gray-400 text-gray-500 text-xs leading-relaxed">
                  captés en moyenne grâce aux appels manqués désormais pris en charge automatiquement
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const benefits = [
  {
    title: "Disponible 24h/24, 7j/7",
    description: "Plus jamais d'appel manqué. Votre IA répond à toute heure, même pendant les repas ou les nuits.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  {
    title: "Gain de temps colossal",
    description: "Concentrez-vous sur votre métier. L'IA gère commandes, réservations et prises de rendez-vous à votre place.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
  },
  {
    title: "Plus de clients rapportés",
    description: "Chaque appel converti en commande, réservation ou intervention. Aucune opportunité perdue.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
  },
]

const useCases = [
  {
    emoji: '🍔',
    label: 'Restaurants',
    description: 'Commandes à emporter, réservations de table, menus du jour.',
  },
  {
    emoji: '🔧',
    label: 'Artisans',
    description: 'Plombiers, dépanneurs, électriciens — prise de RDV automatique.',
  },
  {
    emoji: '💇',
    label: 'Salons & soins',
    description: 'Réservation de créneaux coiffure, esthétique, massage.',
  },
  {
    emoji: '🚕',
    label: 'Services & taxis',
    description: 'Réservations, VTC, transports, livraisons express.',
  },
]
</script>

<style scoped>
@keyframes goldShine {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>
