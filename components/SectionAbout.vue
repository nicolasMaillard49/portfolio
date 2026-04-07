<template>
  <section id="about" class="py-24 relative">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16 reveal">
        <p class="text-electric-500 text-sm font-medium font-display mb-3 tracking-widest uppercase">À propos</p>
        <div class="section-sep mb-5" />
        <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl leading-tight">
          Qui sommes-nous ?
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Bio -->
        <div class="space-y-8">
          <div class="reveal reveal-delay-1 space-y-5 dark:text-gray-300 text-gray-600 text-base leading-relaxed">
            <p>
              <strong class="dark:text-white text-navy-900 font-semibold">NMF Agence</strong> est une agence web full-stack basée à Bordeaux, spécialisée dans le développement de solutions digitales sur mesure.
            </p>
            <p>
              Passionnés par la création d'interfaces modernes et de systèmes robustes, nous concevons des sites web <strong class="dark:text-white text-navy-900 font-semibold">modernes et performants</strong>, avec une attention particulière portée à l'expérience utilisateur et aux bonnes pratiques.
            </p>
            <p>
              Notre philosophie : <em class="dark:text-gray-200 text-navy-800">"valoriser le savoir-faire français"</em> à travers des produits web qui allient esthétique, performance et accessibilité.
            </p>
          </div>

          <!-- Freelance card -->
          <div class="reveal reveal-delay-2 glass-card rounded-2xl p-5 flex items-start gap-4 shadow-glass">
            <div class="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <div>
              <h3 class="font-display font-semibold dark:text-white text-navy-900 mb-1">À votre service</h3>
              <p class="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">
                Disponibles pour vos projets web. Sites vitrines, e-commerce, applications sur mesure.
              </p>
              <a href="#contact" class="inline-flex items-center gap-1 mt-2 text-xs text-electric-400 hover:text-electric-300 font-medium transition-colors">
                Nous contacter
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

          <!-- Stats -->
          <div class="reveal reveal-delay-3 grid grid-cols-3 gap-4">
            <div v-for="stat in stats" :key="stat.label" class="glass-card rounded-xl p-4 text-center">
              <p class="font-display font-bold text-2xl dark:text-white text-navy-900">{{ stat.value }}</p>
              <p class="dark:text-gray-400 text-gray-500 text-xs mt-0.5">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: Skills -->
        <div class="space-y-6 reveal reveal-delay-2">
          <h3 class="font-display font-semibold dark:text-white text-navy-900 text-lg">Compétences techniques</h3>
          <div class="space-y-4">
            <div v-for="skill in skills" :key="skill.name" class="space-y-1.5">
              <div class="flex justify-between items-center">
                <span class="dark:text-gray-200 text-gray-700 text-sm font-medium">{{ skill.name }}</span>
                <span class="dark:text-gray-400 text-gray-500 text-xs">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 dark:bg-[rgba(255,255,255,0.06)] bg-gray-200 rounded-full overflow-hidden">
                <div class="skill-bar-fill" :data-width="skill.level" />
              </div>
            </div>
          </div>

          <!-- Other skills grid -->
          <div class="pt-4">
            <h4 class="dark:text-gray-400 text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Autres technologies</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="t in otherTech" :key="t" class="tech-tag">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Vue.js / Nuxt', level: 90 },
  { name: 'TypeScript', level: 82 },
  { name: 'TailwindCSS', level: 92 },
  { name: 'NestJS', level: 75 },
  { name: 'Prisma / PostgreSQL', level: 72 },
  { name: 'UI/UX Design', level: 78 },
]

const otherTech = ['Git', 'Docker', 'REST API', 'GraphQL', 'Vercel', 'RGPD', 'SEO', 'Figma']

const stats = [
  { value: '6+', label: 'Projets livrés' },
  { value: '3', label: 'Ans d\'expérience' },
  { value: '100%', label: 'Remote-ready' },
]
</script>
