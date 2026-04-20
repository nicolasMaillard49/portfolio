<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'dark:bg-[rgba(6,6,12,0.7)] bg-white/80 backdrop-blur-2xl dark:border-[rgba(255,255,255,0.06)] border-gray-100 border-b shadow-glass'
      : 'bg-transparent border-transparent border-b'"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" @click.prevent="scrollTo('hero')" class="flex items-center gap-2.5 group">
        <img
          src="/logo-symbole.png"
          alt="NMF Agence"
          width="36"
          height="36"
          class="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_14px_rgba(192,81,255,0.35)]"
        />
        <span class="font-display font-semibold dark:text-white text-navy-900 text-base tracking-tight">NMF Agence</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          @click.prevent="scrollTo(link.id)"
          class="nav-link text-sm font-medium dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-navy-900 transition-colors"
          :class="{ active: activeSection === link.id }"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Right actions -->
      <div class="flex items-center gap-3">
        <!-- Dark mode toggle -->
        <button
          @click="toggleMode"
          class="w-9 h-9 rounded-lg flex items-center justify-center dark:bg-dark-card bg-gray-100 dark:hover:bg-dark-border hover:bg-gray-200 transition-colors"
          :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- CTA -->
        <a
          href="#contact"
          @click.prevent="scrollTo('contact')"
          class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500 dark:bg-electric-500 hover:bg-electric-600 text-white text-sm font-medium transition-all duration-200 shadow-glow-blue-sm hover:shadow-glow-blue btn-ripple"
          @click="createRipple"
        >
          Nous contacter
        </a>

        <!-- Hamburger -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center dark:bg-dark-card bg-gray-100"
          aria-label="Menu"
        >
          <svg class="w-5 h-5 dark:text-white text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="md:hidden dark:bg-[rgba(6,6,12,0.9)] bg-white backdrop-blur-2xl border-t dark:border-[rgba(255,255,255,0.06)] border-gray-100 px-6 py-4 flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          @click.prevent="scrollTo(link.id); menuOpen = false"
          class="text-sm font-medium dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-navy-900 transition-colors py-1"
          :class="{ 'text-electric-500 dark:text-electric-400': activeSection === link.id }"
        >
          {{ link.label }}
        </a>
        <a
          href="#contact"
          @click.prevent="scrollTo('contact'); menuOpen = false"
          class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-electric-500 dark:bg-electric-500 hover:bg-electric-600 text-white text-sm font-medium transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{ activeSection: string }>()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const scrolled = ref(false)
const menuOpen = ref(false)
const { createRipple } = useRipple()

const navLinks = [
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Tarifs' },
  { id: 'contact', label: 'Contact' },
]

const toggleMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const route = useRoute()
const router = useRouter()

const scrollTo = async (id: string) => {
  if (route.path !== '/') {
    await router.push(`/#${id}`)
    await nextTick()
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
