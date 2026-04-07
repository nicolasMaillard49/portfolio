<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <!-- Mesh background -->
    <div class="absolute inset-0 dark:bg-mesh-dark bg-mesh-light pointer-events-none" />

    <!-- Floating accent orbs (parallax) -->
    <div class="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-electric-500/10 blur-[100px] pointer-events-none animate-float" :style="orbStyle1" />
    <div class="absolute bottom-1/4 left-[10%] w-56 h-56 rounded-full bg-accent-violet/8 blur-[80px] pointer-events-none" :style="orbStyle2" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-cyan/[0.03] blur-[120px] pointer-events-none" :style="orbStyle3" />

    <div class="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left: Text content -->
      <div class="space-y-8">
        <!-- Status badge -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[rgba(99,102,241,0.08)] bg-electric-500/8 dark:border-[rgba(99,102,241,0.2)] border-electric-500/20 border dark:backdrop-blur-xl text-xs font-medium dark:text-electric-400 text-electric-600 animate-fade-in">
          <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponible pour des projets
        </div>

        <!-- Name + role -->
        <div class="space-y-3">
          <h1 class="font-display font-bold dark:text-white text-navy-900 leading-tight" style="font-size: clamp(2.4rem, 5vw, 3.6rem);">
            NMF <span class="gradient-text">Agence</span>
          </h1>
          <div class="flex items-center gap-2 dark:text-gray-300 text-gray-600 text-xl font-display font-medium">
            <span class="dark:text-gray-400 text-gray-400">&lt;</span>
            <span>{{ typewriterText }}</span>
            <span class="typewriter-cursor" />
            <span class="dark:text-gray-400 text-gray-400">/&gt;</span>
          </div>
        </div>

        <!-- Description -->
        <p class="dark:text-gray-400 text-gray-500 text-base leading-relaxed max-w-md">
          Agence web full-stack basée à <span class="dark:text-gray-300 text-gray-700 font-medium">Bordeaux</span>, spécialisée dans la création de sites modernes et performants.
        </p>

        <!-- Stack badges -->
        <div class="flex flex-wrap gap-2 stagger-children">
          <span v-for="tech in stack" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            @click.prevent="scrollTo('projects')"
            class="btn-ripple flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-medium text-sm transition-all duration-200 shadow-glow-blue-sm hover:shadow-glow-blue"
            @click="createRipple"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
            Voir nos projets
          </a>
          <a
            href="#contact"
            @click.prevent="scrollTo('contact')"
            class="btn-ripple flex items-center gap-2 px-6 py-3 rounded-xl glass-card dark:text-white text-navy-900 font-medium text-sm transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]"
            @click="createRipple"
          >
            Me contacter
          </a>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-4 pt-1">
          <a href="https://github.com/nicolasMaillard49" target="_blank" rel="noopener"
            class="flex items-center gap-2 dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-navy-900 text-sm transition-colors"
            aria-label="GitHub de NMF Agence"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          <span class="w-px h-4 dark:bg-dark-border bg-gray-300" />
          <span class="flex items-center gap-1.5 dark:text-gray-400 text-gray-500 text-sm">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Bordeaux, France
          </span>
        </div>
      </div>

      <!-- Right: Avatar + floating card -->
      <div class="relative flex justify-center items-center">
        <!-- Glow ring -->
        <div class="absolute w-72 h-72 rounded-full bg-electric-500/10 blur-2xl" />

        <!-- Avatar circle -->
        <div class="relative z-10 animate-float">
          <div class="w-64 h-64 rounded-2xl glass-card overflow-hidden shadow-glass">
            <!-- Placeholder avatar -->
            <div class="w-full h-full flex flex-col items-center justify-center dark:bg-gradient-to-br from-[rgba(99,102,241,0.08)] to-[rgba(167,139,250,0.04)] bg-gradient-to-br from-gray-100 to-gray-200">
              <div class="w-24 h-24 rounded-full bg-electric-500/15 border-2 border-electric-500/25 flex items-center justify-center mb-3 backdrop-blur-sm">
                <span class="font-display font-bold text-electric-400 text-3xl">NMF</span>
              </div>
              <span class="dark:text-gray-400 text-gray-500 text-xs">NMF Agence</span>
            </div>
          </div>

          <!-- Floating badge: studi -->
          <div class="absolute -bottom-4 -left-6 glass-card bg-white/[0.02] rounded-xl px-3 py-2 shadow-glass flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-electric-500/15 flex items-center justify-center">
              <svg class="w-4 h-4 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            <div>
              <p class="dark:text-white text-gray-900 text-xs font-semibold">Bachelor Dev Web</p>
              <p class="dark:text-gray-400 text-gray-500 text-[10px]">Studi.fr</p>
            </div>
          </div>

          <!-- Floating badge: agency -->
          <div class="absolute -top-4 -right-6 glass-card bg-white/[0.02] rounded-xl px-3 py-2 shadow-glass flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center">
              <svg class="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="dark:text-white text-gray-900 text-xs font-semibold">Agence Web</p>
              <p class="dark:text-gray-400 text-gray-500 text-[10px]">Bordeaux</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <button
      @click="scrollTo('about')"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer group"
      aria-label="Défiler vers la section À propos"
    >
      <span class="dark:text-gray-600 text-gray-400 text-xs group-hover:text-electric-400 transition-colors">Scroll</span>
      <svg class="w-4 h-4 dark:text-gray-600 text-gray-400 group-hover:text-electric-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
const { createRipple } = useRipple()
const { init: initParallax, parallaxStyle } = useParallax()

const orbStyle1 = parallaxStyle(25)
const orbStyle2 = parallaxStyle(-18)
const orbStyle3 = parallaxStyle(12)

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const stack = ['Vue.js', 'Nuxt', 'TypeScript', 'TailwindCSS', 'NestJS', 'Prisma']

const roles = ['Agence Web Full-Stack', 'Passionnés d\'UI/UX', 'Experts Vue.js', 'Basés à Bordeaux']
const typewriterText = ref('')
let roleIndex = 0
let charIndex = 0
let deleting = false

const typeEffect = () => {
  const current = roles[roleIndex]
  if (!deleting) {
    typewriterText.value = current.slice(0, ++charIndex)
    if (charIndex === current.length) {
      deleting = true
      setTimeout(typeEffect, 1800)
      return
    }
  } else {
    typewriterText.value = current.slice(0, --charIndex)
    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  setTimeout(typeEffect, deleting ? 45 : 80)
}

onMounted(() => {
  setTimeout(typeEffect, 600)
  initParallax()
})
</script>
