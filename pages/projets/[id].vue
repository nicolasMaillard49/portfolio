<template>
  <div class="min-h-screen dark:bg-dark-bg bg-gray-50">
    <!-- Breadcrumb -->
    <div class="sticky top-16 z-40 dark:bg-dark-bg/80 bg-gray-50/80 backdrop-blur-md border-b dark:border-white/5 border-gray-200">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <NuxtLink
          to="/#projects"
          class="inline-flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-navy-900 transition-colors font-medium"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux projets
        </NuxtLink>
      </div>
    </div>

    <article v-if="project" class="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <!-- Hero -->
      <section class="space-y-8">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-[11px] dark:bg-[rgba(255,255,255,0.06)] bg-gray-100 dark:text-gray-300 text-gray-600 px-3 py-1 rounded-full font-medium">
            {{ project.type }}
          </span>
          <span v-if="project.featured" class="px-3 py-1 bg-electric-500 rounded-full text-white text-[11px] font-semibold tracking-wide">
            ⭐ Mis en avant
          </span>
          <span v-if="project.live" class="flex items-center gap-1.5 px-3 py-1 dark:bg-black/40 bg-green-100 backdrop-blur-sm rounded-full dark:text-white text-green-800 text-[11px] font-medium">
            <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        </div>

        <div class="space-y-4">
          <h1 class="font-display font-bold dark:text-white text-navy-900 text-4xl md:text-5xl leading-tight">
            {{ project.title }}
          </h1>
          <p class="dark:text-gray-400 text-gray-600 text-lg leading-relaxed max-w-3xl">
            {{ project.description }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-sm font-semibold shadow-glow-blue-sm hover:shadow-glow-blue transition-all"
          >
            Voir le site
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card dark:text-white text-navy-900 text-sm font-semibold hover:scale-[1.02] transition-all"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Code source
          </a>
        </div>

        <div class="glass-card rounded-2xl overflow-hidden shadow-glass relative">
          <img
            v-if="project.screenshot && !heroError"
            :src="project.screenshot"
            :alt="`Aperçu de ${project.title}`"
            class="w-full h-auto max-h-[600px] object-cover object-top"
            loading="eager"
            @error="heroError = true"
          />
          <div
            v-else
            class="w-full h-[320px] flex items-center justify-center"
            :style="`background: linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`"
          >
            <div class="text-center text-white/80">
              <div class="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center" v-html="project.icon" />
              <p class="text-sm font-medium">{{ project.type }}</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span v-for="t in project.tech" :key="t" class="tech-tag">{{ t }}</span>
        </div>
      </section>

      <!-- Contexte & Défis -->
      <section v-if="project.details" class="grid md:grid-cols-2 gap-10">
        <div class="space-y-4">
          <p class="text-electric-500 text-sm font-medium font-display tracking-widest uppercase">Contexte</p>
          <div class="section-sep" />
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-2xl leading-tight">
            Le besoin client
          </h2>
          <p class="dark:text-gray-400 text-gray-600 text-base leading-relaxed">
            {{ project.details.context }}
          </p>
        </div>
        <div class="space-y-4">
          <p class="text-electric-500 text-sm font-medium font-display tracking-widest uppercase">Défis</p>
          <div class="section-sep" />
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-2xl leading-tight">
            Ce qu'il fallait résoudre
          </h2>
          <ul class="space-y-3">
            <li v-for="(challenge, i) in project.details.challenges" :key="i" class="flex items-start gap-3">
              <span class="shrink-0 w-6 h-6 rounded-full bg-electric-500/10 flex items-center justify-center mt-0.5">
                <svg class="w-3.5 h-3.5 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="dark:text-gray-300 text-gray-700 text-sm leading-relaxed">{{ challenge }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Fonctionnalités -->
      <section v-if="project.details" class="space-y-8">
        <div class="space-y-3">
          <p class="text-electric-500 text-sm font-medium font-display tracking-widest uppercase">Fonctionnalités</p>
          <div class="section-sep" />
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-3xl leading-tight">
            Les points clés de la réalisation
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
          <div
            v-for="feature in project.details.features"
            :key="feature.title"
            class="glass-card rounded-2xl p-6 shadow-glass card-lift"
          >
            <div class="text-3xl mb-3">{{ feature.icon }}</div>
            <h3 class="font-display font-semibold dark:text-white text-navy-900 text-lg mb-2">{{ feature.title }}</h3>
            <p class="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section v-if="project.details" class="space-y-8">
        <div class="space-y-3">
          <p class="text-electric-500 text-sm font-medium font-display tracking-widest uppercase">Stack</p>
          <div class="section-sep" />
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-3xl leading-tight">
            Technologies utilisées
          </h2>
        </div>
        <div class="glass-card rounded-2xl p-6 md:p-8 shadow-glass space-y-4">
          <div
            v-for="(item, i) in project.details.stackDetails"
            :key="item.name"
            class="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 pb-4"
            :class="i < project.details.stackDetails.length - 1 ? 'border-b dark:border-white/5 border-gray-200' : ''"
          >
            <span class="font-display font-semibold text-electric-400 text-base md:w-40 shrink-0">{{ item.name }}</span>
            <span class="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">{{ item.reason }}</span>
          </div>
        </div>
      </section>

      <!-- Galerie -->
      <section v-if="project.url" class="space-y-8">
        <div class="space-y-3">
          <p class="text-electric-500 text-sm font-medium font-display tracking-widest uppercase">Galerie</p>
          <div class="section-sep" />
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-3xl leading-tight">
            Aperçus du projet
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <figure v-for="(shot, idx) in galleryShots" :key="shot.label" class="glass-card rounded-2xl overflow-hidden shadow-glass group">
            <div class="aspect-[4/3] overflow-hidden bg-gray-900 flex items-center justify-center relative">
              <img
                v-if="!galleryErrors[idx]"
                :src="shot.src"
                :alt="`${project.title} — ${shot.label}`"
                :class="[
                  'group-hover:scale-105 transition-transform duration-500',
                  shot.label === 'Mobile' ? 'h-full w-auto object-contain' : 'w-full h-full object-cover object-top'
                ]"
                loading="lazy"
                @error="galleryErrors[idx] = true"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center"
                :style="`background: linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`"
              >
                <span class="text-white/70 text-xs font-medium">Aperçu indisponible</span>
              </div>
            </div>
            <figcaption class="p-3 text-center text-xs dark:text-gray-400 text-gray-500 font-medium">{{ shot.label }}</figcaption>
          </figure>
        </div>
      </section>

      <!-- Projets similaires -->
      <section v-if="related.length" class="space-y-8">
        <div class="space-y-3">
          <p class="text-electric-500 text-sm font-medium font-display tracking-widest uppercase">Autres réalisations</p>
          <div class="section-sep" />
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-3xl leading-tight">
            Projets similaires
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <NuxtLink
            v-for="rel in related"
            :key="rel.id"
            :to="rel.details ? `/projets/${rel.id}` : '/#projects'"
            class="glass-card rounded-2xl overflow-hidden shadow-glass card-lift group block"
          >
            <div class="relative h-36 overflow-hidden bg-gray-900">
              <img v-if="rel.screenshot" :src="rel.screenshot" :alt="rel.title" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div v-else class="w-full h-full" :style="`background: linear-gradient(135deg, ${rel.gradient[0]} 0%, ${rel.gradient[1]} 100%)`" />
            </div>
            <div class="p-4 space-y-2">
              <h3 class="font-display font-semibold dark:text-white text-navy-900 text-sm group-hover:text-electric-400 transition-colors">
                {{ rel.title }}
              </h3>
              <p class="dark:text-gray-500 text-gray-500 text-xs leading-relaxed line-clamp-2">{{ rel.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- CTA -->
      <section class="glass-strong dark:border-electric-500/20 border-electric-500/20 border-2 rounded-2xl p-8 md:p-12 shadow-glass text-center space-y-5">
        <h2 class="font-display font-bold dark:text-white text-navy-900 text-2xl md:text-3xl leading-tight">
          Un projet similaire en tête ?
        </h2>
        <p class="dark:text-gray-400 text-gray-600 text-base max-w-xl mx-auto">
          Parlons-en. Nous vous accompagnons de l'idée à la mise en ligne.
        </p>
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-sm font-semibold shadow-glow-blue-sm hover:shadow-glow-blue transition-all"
        >
          Discutons-en
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { screenshotsFor } from '~/composables/useProjects'

const route = useRoute()
const { getBySlug, getRelated } = useProjects()

const project = computed(() => getBySlug(String(route.params.id)))

if (!project.value || !project.value.live) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' })
}

const related = computed(() => (project.value ? getRelated(project.value) : []))

const heroError = ref(false)
const galleryErrors = reactive<Record<number, boolean>>({})

const galleryShots = computed(() => {
  if (!project.value) return []
  const override = project.value.screenshots
  if (override) {
    const shots = [
      { label: 'Desktop', src: override.desktop },
      { label: 'Mobile', src: override.mobile },
    ]
    if (override.fullPage) shots.push({ label: 'Page complète', src: override.fullPage })
    return shots
  }
  if (!project.value.url) return []
  const shots = screenshotsFor(project.value.url)
  return [
    { label: 'Desktop', src: shots.desktop },
    { label: 'Mobile', src: shots.mobile },
    { label: 'Page complète', src: shots.fullPage },
  ]
})

useSeoMeta({
  title: () => `${project.value?.title ?? 'Projet'} — Réalisation NMF Agence`,
  description: () => project.value?.description ?? '',
  ogTitle: () => `${project.value?.title ?? 'Projet'} — NMF Agence`,
  ogDescription: () => project.value?.description ?? '',
  ogImage: () => project.value?.screenshot ?? '',
  ogType: 'article',
})
</script>
