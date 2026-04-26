<template>
  <section id="starter-pack" class="py-24 relative overflow-hidden">
    <!-- Ambient glows -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-12 left-[12%] w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40"
        style="background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)"
      />
      <div
        class="absolute bottom-8 right-[8%] w-96 h-96 rounded-full blur-3xl opacity-50"
        style="background: radial-gradient(circle, rgba(52,168,83,0.14) 0%, transparent 70%)"
      />
    </div>

    <!-- Subtle grid pattern overlay -->
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
      aria-hidden="true"
      style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);"
    />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Section eyebrow -->
      <div class="text-center mb-12 reveal">
        <p class="text-[11px] font-display font-semibold tracking-[0.32em] uppercase mb-3" style="color: #6366F1">
          Offre lancement · 2026
        </p>
        <div class="section-sep mx-auto mb-5" />
        <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl md:text-5xl leading-[1.05] tracking-tight">
          Le pack qu'on offre <span class="italic font-light">d'office</span>
          <br class="hidden md:block" />
          quand on construit votre vitrine.
        </h2>
      </div>

      <!-- Ticket -->
      <div class="reveal relative">
        <!-- Outer frame with hairline + subtle gradient -->
        <div
          class="rounded-[28px] p-[1.5px] relative overflow-hidden"
          style="background: linear-gradient(135deg, rgba(99,102,241,0.55) 0%, rgba(34,211,238,0.25) 30%, rgba(52,168,83,0.5) 65%, rgba(99,102,241,0.5) 100%);"
        >
          <!-- Inner card -->
          <div
            class="relative rounded-[26px] dark:bg-[rgba(10,10,18,0.92)] bg-white backdrop-blur-xl overflow-hidden dark:shadow-none shadow-[0_4px_14px_rgba(15,23,42,0.04),0_28px_70px_-22px_rgba(99,102,241,0.18)]"
          >
            <!-- Perforation notches (left/right) -->
            <span class="ticket-notch ticket-notch--left" aria-hidden="true" />
            <span class="ticket-notch ticket-notch--right" aria-hidden="true" />

            <!-- Top bar : reference + status -->
            <div class="flex items-center justify-between gap-4 px-7 md:px-10 pt-6 pb-4 border-b dark:border-[rgba(255,255,255,0.06)] border-gray-200/70">
              <div class="flex items-center gap-3 min-w-0">
                <span class="w-2 h-2 rounded-full shrink-0" style="background: #34A853; box-shadow: 0 0 12px rgba(52,168,83,0.7);" />
                <p class="text-[11px] tracking-[0.2em] uppercase font-mono dark:text-gray-400 text-gray-500 truncate">
                  REF · NMF-LAUNCH-299 · vitrine complète
                </p>
              </div>
              <p class="hidden sm:block text-[11px] tracking-[0.2em] uppercase font-mono dark:text-gray-500 text-gray-400 shrink-0">
                Délai 48h
              </p>
            </div>

            <!-- Main grid : price (left) / pillars (right) -->
            <div class="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              <!-- LEFT — Price column -->
              <div class="relative px-7 md:px-10 py-10 lg:border-r dark:border-[rgba(255,255,255,0.06)] border-gray-200/70">
                <!-- Vertical dotted divider (desktop only) -->
                <span class="hidden lg:block absolute right-0 top-8 bottom-8 w-px" style="background-image: linear-gradient(to bottom, rgba(148,163,184,0.5) 50%, transparent 50%); background-size: 1px 6px;" aria-hidden="true" />

                <p class="text-xs font-mono tracking-[0.2em] uppercase dark:text-gray-500 text-gray-500 mb-2">
                  Prix tout compris
                </p>

                <div class="flex items-start gap-2 mb-8">
                  <span class="font-display font-black leading-[0.9] text-[clamp(5.5rem,15vw,9rem)] tracking-[-0.04em] price-number">
                    299
                  </span>
                  <div class="flex flex-col pt-3 gap-1">
                    <span class="font-display font-bold text-3xl md:text-4xl dark:text-white text-navy-900">€</span>
                    <span class="text-[11px] tracking-[0.2em] uppercase font-mono dark:text-gray-500 text-gray-500">HT</span>
                  </div>
                </div>

                <!-- SEAL — Validé Google -->
                <div class="flex items-center gap-5 mb-8">
                  <div class="seal relative w-24 h-24 shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full seal-rotate">
                      <defs>
                        <path id="seal-arc" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                      </defs>
                      <text font-family="Montserrat, sans-serif" font-size="9.5" font-weight="700" letter-spacing="3" fill="currentColor" class="text-[#34A853] dark:text-[#34A853]">
                        <textPath href="#seal-arc" startOffset="0">
                          ✦ VALIDÉ GOOGLE ✦ SEO PARFAIT ✦ VALIDÉ GOOGLE ✦ SEO PARFAIT
                        </textPath>
                      </text>
                    </svg>
                    <div class="absolute inset-[14%] rounded-full flex items-center justify-center" style="background: rgba(52,168,83,0.08); border: 1px dashed rgba(52,168,83,0.45);">
                      <svg viewBox="0 0 24 24" class="w-7 h-7" style="color: #34A853">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" opacity="0.85" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" opacity="0.7" d="M5.84 14.1c-.22-.66-.35-1.37-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"/>
                        <path fill="currentColor" opacity="0.85" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="min-w-0">
                    <p class="text-[11px] font-mono tracking-[0.2em] uppercase mb-1" style="color: #34A853">
                      Référencement validé
                    </p>
                    <p class="dark:text-white text-navy-900 font-display font-semibold text-lg leading-tight mb-1">
                      SEO 100&nbsp;% conforme
                    </p>
                    <p class="dark:text-gray-400 text-gray-600 text-xs leading-relaxed">
                      Score parfait Lighthouse SEO · Schema.org validé Rich Results Test · indexation Google Search Console.
                    </p>
                  </div>
                </div>

                <!-- CTA -->
                <div class="space-y-3">
                  <a
                    href="#contact"
                    @click.prevent="claimOffer()"
                    class="group block w-full text-center px-6 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 bg-electric-500 hover:bg-electric-600 text-white shadow-glow-blue-sm hover:shadow-glow-blue"
                  >
                    <span class="inline-flex items-center gap-2">
                      Réserver le pack 299€
                      <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>
                  <button
                    type="button"
                    @click="claimOffer('sea')"
                    class="block w-full text-center px-5 py-2.5 rounded-xl font-medium text-xs glass-card dark:text-gray-200 text-navy-900 hover:border-electric-500/40 transition-colors"
                  >
                    Demander un devis SEA Google Ads →
                  </button>
                </div>
              </div>

              <!-- RIGHT — Pillars column -->
              <div class="px-7 md:px-10 py-10">
                <div class="flex items-center justify-between mb-6">
                  <p class="text-[11px] font-mono tracking-[0.2em] uppercase dark:text-gray-500 text-gray-500">
                    Inclus d'office · 4 piliers
                  </p>
                  <span class="hidden sm:inline-block text-[11px] font-mono tracking-[0.2em] uppercase dark:text-gray-500 text-gray-500">
                    04 / 04
                  </span>
                </div>

                <ul class="divide-y dark:divide-[rgba(255,255,255,0.06)] divide-gray-200/70">
                  <li
                    v-for="(pillar, i) in pillars"
                    :key="pillar.title"
                    class="pillar group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 py-5"
                    :style="{ animationDelay: `${120 + i * 90}ms` }"
                  >
                    <span
                      class="font-display font-black leading-none text-2xl md:text-3xl tabular-nums tracking-tight transition-colors duration-300 dark:text-gray-600 text-gray-400 group-hover:text-electric-500 dark:group-hover:text-electric-400"
                    >
                      {{ String(i + 1).padStart(2, '0') }}
                    </span>
                    <div class="min-w-0">
                      <p class="font-display font-semibold dark:text-white text-navy-900 text-base md:text-lg leading-tight mb-1.5">
                        {{ pillar.title }}
                      </p>
                      <p class="dark:text-gray-400 text-gray-600 text-[13px] leading-relaxed">
                        {{ pillar.description }}
                      </p>
                      <div class="mt-2 flex flex-wrap gap-1.5">
                        <span
                          v-for="tag in pillar.tags"
                          :key="tag"
                          class="text-[10px] font-mono tracking-wider uppercase px-1.5 py-0.5 rounded dark:bg-[rgba(99,102,241,0.12)] dark:text-electric-300 bg-electric-500/8 text-electric-600"
                          style="border: 1px solid rgba(99,102,241,0.18);"
                        >
                          {{ tag }}
                        </span>
                      </div>
                    </div>
                    <div
                      class="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center shrink-0 [&_svg]:w-5 [&_svg]:h-5 dark:text-electric-300 text-electric-600 transition-all duration-300 group-hover:scale-105"
                      style="background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(34,211,238,0.06)); border: 1px solid rgba(99,102,241,0.22);"
                      v-html="pillar.icon"
                    />
                  </li>
                </ul>

                <!-- SEA highlight -->
                <div
                  class="mt-7 rounded-xl p-4 flex items-start gap-3 relative overflow-hidden"
                  style="background: linear-gradient(135deg, rgba(52,168,83,0.06) 0%, rgba(99,102,241,0.04) 100%); border: 1px dashed rgba(52,168,83,0.35);"
                >
                  <div class="shrink-0 mt-0.5">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #34A853">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="font-display font-semibold dark:text-white text-navy-900 text-sm leading-snug mb-0.5">
                      Campagnes Google&nbsp;Ads · sur devis
                    </p>
                    <p class="dark:text-gray-400 text-gray-600 text-[12px] leading-relaxed">
                      Audit mots-clés, structure de compte, rédaction d'annonces RSA, tracking conversions GA4. Budget recommandé selon votre marché.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom strip -->
            <div class="px-7 md:px-10 py-4 border-t dark:border-[rgba(255,255,255,0.06)] border-gray-200/70 flex flex-wrap items-center justify-between gap-3">
              <p class="text-[11px] font-mono tracking-[0.2em] uppercase dark:text-gray-500 text-gray-500">
                Hébergement France · RGPD · accessibilité AA
              </p>
              <p class="text-[11px] font-mono tracking-[0.2em] uppercase dark:text-gray-500 text-gray-500">
                NMF · Bordeaux
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tiny footnote -->
      <p class="text-center dark:text-gray-500 text-gray-500 text-xs mt-7 max-w-2xl mx-auto leading-relaxed">
        Validation SEO réalisée à la livraison via Google Search Console, Lighthouse et Rich Results Test. SEA / Google Ads sur devis personnalisé selon objectifs et budget.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const prefill = useContactPrefill()

const claimOffer = (variant: 'pack' | 'sea' = 'pack') => {
  if (variant === 'sea') {
    prefill.value = {
      subject: 'Devis SEA · Google Ads',
      message: `Bonjour,\n\nJe souhaite recevoir un devis pour des campagnes Google Ads (SEA) en complément du pack vitrine 299€.\n\nMon activité : \nMon objectif (visites, leads, ventes) : \nBudget mensuel envisagé : \n`,
    }
  } else {
    prefill.value = {
      subject: 'Pack Lancement Vitrine 299€',
      message: `Bonjour,\n\nJe souhaite réserver le pack lancement à 299€ HT (vitrine complète + suivi des visites + SEO validé Google).\n\nMon activité : \nMon délai souhaité : \n`,
    }
  }
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const pillars = [
  {
    title: 'Vitrine complète, sur-mesure',
    description: "Jusqu'à 5 pages pensées pour votre métier. Design responsive, animations soignées, mise en ligne et nom de domaine inclus.",
    tags: ['Nuxt 3', 'Responsive', 'RGPD'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 9h18M7 7v0M10 7v0"/></svg>',
  },
  {
    title: 'Suivi des visites en temps réel',
    description: 'Plausible / GA4 configuré, tableau de bord prêt à l\'emploi. Vous voyez d\'où viennent vos visiteurs, ce qu\'ils cherchent, ce qui convertit.',
    tags: ['GA4', 'Plausible', 'Consent v2'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18"/><path stroke-linecap="round" stroke-linejoin="round" d="M7 14l4-4 4 4 5-6"/></svg>',
  },
  {
    title: 'SEO parfait validé par Google',
    description: 'Score Lighthouse SEO 100/100, Core Web Vitals dans le vert, schema.org Product/LocalBusiness/FAQ, sitemap et robots.txt soumis à Google Search Console.',
    tags: ['Lighthouse', 'Schema.org', 'Sitemap'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5-5"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 11l2 2 4-4"/></svg>',
  },
  {
    title: 'Google Ads · SEA sur devis',
    description: 'Option recommandée pour les lancements rapides : campagnes Search ciblées, mots-clés validés, suivi des conversions intégré au site.',
    tags: ['Search', 'Conversions', 'Remarketing'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5 5-5M6 12h13"/><path stroke-linecap="round" stroke-linejoin="round" d="M19 7v10"/></svg>',
  },
]
</script>

<style scoped>
/* Price number — gradient ink (light default, dark override) */
.price-number {
  background: linear-gradient(180deg, #1E3A5F 0%, #0F2044 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}
:global(html.dark) .price-number {
  background: linear-gradient(180deg, #6366F1 0%, #4F46E5 55%, #312E81 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Ticket perforation notches — light by default, dark when .dark on html */
.ticket-notch {
  position: absolute;
  top: 50%;
  width: 28px;
  height: 28px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #FFFFFF;
  pointer-events: none;
  display: none;
}
@media (min-width: 1024px) {
  .ticket-notch { display: block; }
}
.ticket-notch--left {
  left: -14px;
  box-shadow: inset -1px 0 0 rgba(99,102,241,0.35);
}
.ticket-notch--right {
  right: -14px;
  box-shadow: inset 1px 0 0 rgba(52,168,83,0.35);
}
:global(html.dark) .ticket-notch {
  background: #06060C;
}

/* Seal slow rotation */
.seal-rotate {
  animation: sealSpin 22s linear infinite;
  transform-origin: center;
}
@keyframes sealSpin {
  to { transform: rotate(360deg); }
}

/* Pillar hairline reveal */
.pillar {
  opacity: 0;
  transform: translateY(8px);
  animation: pillarIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes pillarIn {
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .seal-rotate, .pillar {
    animation: none !important;
  }
  .pillar { opacity: 1; transform: none; }
}
</style>
