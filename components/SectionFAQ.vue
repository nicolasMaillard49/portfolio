<template>
  <section id="faq" class="py-24 relative dark:bg-[rgba(12,12,22,0.5)] bg-gray-50/60">
    <div class="max-w-3xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <p class="text-electric-500 text-sm font-medium font-display mb-3 tracking-widest uppercase">FAQ</p>
        <div class="section-sep mx-auto mb-5" />
        <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl leading-tight mb-4">
          Questions fréquentes
        </h2>
        <p class="dark:text-gray-400 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Tout ce qu'il faut savoir avant de démarrer votre projet. Une autre question ? N'hésitez pas à nous contacter.
        </p>
      </div>

      <!-- FAQ list -->
      <div class="space-y-3 reveal reveal-delay-1">
        <details
          v-for="(item, i) in faqs"
          :key="item.q"
          class="group glass-card rounded-xl overflow-hidden shadow-glass"
          :open="i === 0"
        >
          <summary class="flex items-center justify-between gap-4 p-5 cursor-pointer select-none list-none">
            <h3 class="font-display font-semibold dark:text-white text-navy-900 text-base leading-snug pr-2">
              {{ item.q }}
            </h3>
            <span class="shrink-0 w-8 h-8 rounded-lg dark:bg-[rgba(255,255,255,0.06)] bg-gray-100 flex items-center justify-center group-open:bg-electric-500 transition-colors duration-200">
              <svg class="w-4 h-4 dark:text-gray-300 text-gray-600 group-open:text-white group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div class="px-5 pb-5 pt-0">
            <p
              class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed whitespace-pre-line"
              v-html="item.a"
            />
          </div>
        </details>
      </div>

      <!-- CTA -->
      <div class="text-center mt-10 reveal reveal-delay-2">
        <p class="dark:text-gray-400 text-gray-500 text-sm mb-4">
          Vous ne trouvez pas la réponse à votre question ?
        </p>
        <a
          href="#contact"
          @click.prevent="scrollTo"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-sm font-semibold shadow-glow-blue-sm hover:shadow-glow-blue transition-all"
        >
          Posez-la nous directement
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const faqs = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "Pour un <strong>site vitrine</strong> ou un <strong>site avec réservation</strong> : environ <strong>48h</strong> après validation des maquettes.\n\nPour un <strong>site e-commerce</strong> : environ <strong>1 semaine</strong> après validation, le temps d'intégrer le catalogue, le paiement et les emails transactionnels.\n\nLes délais peuvent varier légèrement selon la complexité des demandes spécifiques.",
  },
  {
    q: "Comment se déroule un projet avec NMF Agence ?",
    a: "1. <strong>Premier échange gratuit</strong> en visio pour comprendre votre besoin.\n2. <strong>Proposition de devis</strong> clair et détaillé sous 48h.\n3. <strong>Création des maquettes</strong> pour validation par vos soins.\n4. <strong>Développement</strong> selon les délais annoncés.\n5. <strong>Mise en ligne</strong> et formation rapide à l'utilisation.",
  },
  {
    q: "Faut-il se déplacer pour travailler ensemble ?",
    a: "Non. Nous intervenons <strong>partout en France</strong> sans déplacement physique.\n\nUn simple <strong>appel visio</strong> pour le brief, la validation des maquettes en ligne, puis les échanges par email suffisent pour mener à bien votre projet.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le prix affiché ?",
    a: "Le prix couvre : la <strong>création des maquettes</strong>, le <strong>développement complet</strong>, la <strong>mise en ligne</strong>, la <strong>configuration du nom de domaine</strong>, le <strong>SEO de base</strong> et une <strong>formation</strong> à l'utilisation.\n\nLe prix ne couvre pas : l'achat du nom de domaine (~10€/an), l'hébergement (variable selon les besoins), ni la maintenance mensuelle.",
  },
  {
    q: "À quoi sert la maintenance mensuelle ?",
    a: "La maintenance garantit que votre site reste <strong>rapide, sécurisé et à jour</strong> dans le temps.\n\nElle inclut selon la formule : mises à jour de sécurité, sauvegardes régulières, monitoring, petites modifications de contenu, support technique prioritaire, et optimisations SEO continues.\n\nLe tarif est adapté à chaque projet et vous est communiqué sur devis.",
  },
  {
    q: "Puis-je modifier le contenu moi-même après la livraison ?",
    a: "Oui. Selon la technologie utilisée (WordPress ou site sur-mesure), nous vous fournissons un <strong>back-office simple</strong> vous permettant de modifier textes, images et produits en toute autonomie.\n\nUne <strong>formation</strong> est incluse à la livraison pour vous rendre indépendant.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Nous demandons un <strong>acompte de 30%</strong> à la signature du devis pour démarrer le projet. Le <strong>solde</strong> est à régler à la livraison, après validation du site.\n\nPaiement par virement bancaire ou carte bancaire. Tous nos tarifs s'entendent <strong>hors taxes</strong>.",
  },
  {
    q: "Et si j'ai besoin de modifications après la livraison ?",
    a: "Les petites modifications mineures sont incluses dans la maintenance mensuelle.\n\nPour des <strong>évolutions plus importantes</strong> (nouvelle fonctionnalité, refonte partielle), nous établissons un devis complémentaire adapté à votre demande.",
  },
  {
    q: "Mes données sont-elles bien protégées ?",
    a: "Oui. Tous nos sites sont <strong>conformes au RGPD</strong> : mentions légales, politique de confidentialité, bannière cookies, et hébergement en <strong>Europe</strong>.\n\nNous ne revendons jamais vos données ni celles de vos clients.",
  },
]
</script>

<style scoped>
summary::-webkit-details-marker { display: none; }
summary { list-style: none; }
details[open] summary { border-bottom: 1px solid rgba(99, 102, 241, 0.1); }
</style>
