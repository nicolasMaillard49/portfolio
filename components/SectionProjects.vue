<template>
  <section id="projects" class="py-24 relative dark:bg-[rgba(12,12,22,0.5)] bg-gray-50/60">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-12 reveal">
        <p class="text-electric-500 text-sm font-medium font-display mb-3 tracking-widest uppercase">Portfolio</p>
        <div class="section-sep mb-5" />
        <div class="flex flex-wrap items-end justify-between gap-4">
          <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl leading-tight">
            Nos réalisations
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
            : 'glass-card dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-navy-900'"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Grid -->
        <TransitionGroup name="project-grid" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <div
            v-for="(project, i) in displayedProjects"
            :key="project.id"
            class="tilt-card glass-card rounded-2xl overflow-hidden group shadow-glass dark:hover:shadow-glass-hover hover:shadow-card-light-hover"
            :style="{ animationDelay: `${i * 60}ms` }"
            @mousemove="onMouseMove"
            @mouseleave="onMouseLeave"
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
              <div class="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 flex-wrap px-3">
                <NuxtLink v-if="project.live && project.details" :to="`/projets/${project.id}`"
                  class="px-4 py-2 bg-electric-500 text-white text-xs font-semibold rounded-lg hover:bg-electric-400 transition-colors">
                  Détails
                </NuxtLink>
                <a v-if="project.url" :href="project.url" target="_blank" rel="noopener"
                  class="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
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
                <span class="shrink-0 text-[10px] dark:bg-[rgba(255,255,255,0.06)] bg-gray-100 dark:text-gray-400 text-gray-500 px-2 py-0.5 rounded-full">
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
              <div class="flex items-center gap-3 pt-2 flex-wrap">
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
                <NuxtLink
                  v-if="project.live && project.details"
                  :to="`/projets/${project.id}`"
                  class="flex items-center gap-1.5 text-xs text-electric-400 hover:text-electric-300 transition-colors font-medium ml-auto"
                >
                  Détails
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </NuxtLink>
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 text-xs dark:text-gray-400 text-gray-500 dark:hover:text-electric-300 hover:text-electric-600 transition-colors font-medium"
                  :class="!(project.live && project.details) ? 'ml-auto' : ''"
                >
                  Voir le site
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Voir plus -->
        <div
          v-if="filteredProjects.length > previewCount"
          class="mt-8 flex justify-center"
        >
          <button
            type="button"
            @click="showAll = !showAll"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card dark:text-white text-navy-900 text-sm font-semibold transition-all"
          >
            {{ showAll ? 'Voir moins' : 'Voir plus' }}
            <svg
              class="w-4 h-4 transition-transform duration-300"
              :class="showAll ? 'rotate-180' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

const { onMouseMove, onMouseLeave } = useTilt()
const { projects } = useProjects()
const activeFilter = ref('Tous')
const showAll = ref(false)

const filters = ['Tous', 'Vue.js', 'Nuxt', 'TypeScript', 'NestJS', 'E-commerce', 'WordPress']

const mobilePreviewCount = 4
const desktopPreviewCount = 3
const desktopPriorityIds = ['anthonyfrides', 'larencontre', 'restaurants-bordeaux', 'clipbag']
const mobilePriorityIds = ['larencontre', 'anthonyfrides', 'restaurants-bordeaux', 'clipbag']

const isMd = ref(false)
onMounted(() => {
  const mq = window.matchMedia('(min-width: 768px)')
  isMd.value = mq.matches
  const handler = (e: MediaQueryListEvent) => {
    isMd.value = e.matches
  }
  mq.addEventListener('change', handler)
  onBeforeUnmount(() => mq.removeEventListener('change', handler))
})

const activePriorityIds = computed(() =>
  isMd.value ? desktopPriorityIds : mobilePriorityIds,
)

const orderedProjects = computed<Project[]>(() => {
  const ids = activePriorityIds.value
  const priority = ids
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => !!p)
  const rest = projects.filter((p) => !ids.includes(p.id))
  return [...priority, ...rest]
})

const filteredProjects = computed<Project[]>(() => {
  if (activeFilter.value === 'Tous') return orderedProjects.value
  return orderedProjects.value.filter((p) => p.tags.includes(activeFilter.value))
})

const previewCount = computed(() =>
  isMd.value ? desktopPreviewCount : mobilePreviewCount,
)

const displayedProjects = computed<Project[]>(() =>
  showAll.value ? filteredProjects.value : filteredProjects.value.slice(0, previewCount.value),
)

watch(activeFilter, () => {
  showAll.value = false
})
</script>

<style scoped>
.project-grid-move { transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); }
.project-grid-enter-active { transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); }
.project-grid-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; position: absolute; width: calc(100% - 0px); }
.project-grid-enter-from { opacity: 0; transform: translateY(18px) scale(0.96); }
.project-grid-leave-to { opacity: 0; transform: translateY(-8px) scale(0.96); }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
</style>
