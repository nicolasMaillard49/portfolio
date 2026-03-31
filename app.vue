<template>
  <div>
    <!-- Noise overlay -->
    <div class="noise-overlay" aria-hidden="true" />

    <!-- Loader -->
    <AppLoader />

    <!-- Custom cursor (desktop only) -->
    <ClientOnly>
      <AppCursor />
    </ClientOnly>

    <!-- Navigation -->
    <AppNav :active-section="activeSection" />

    <!-- Main content -->
    <main>
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionServices />
      <SectionContact />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { activeSection, init: initActiveSection } = useActiveSection([
  'hero',
  'about',
  'projects',
  'services',
  'contact',
])
const { init: initScrollReveal } = useScrollReveal()
const { init: initSkillBars } = useSkillBars()

onMounted(() => {
  initScrollReveal()
  initSkillBars()
  const cleanup = initActiveSection()
  onUnmounted(cleanup)
})
</script>
