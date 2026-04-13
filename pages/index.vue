<template>
  <main>
    <SectionHero />
    <SectionAbout />
    <SectionProjects />
    <SectionServices />
    <SectionContact />
  </main>
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

const nav = useNavActiveSection()
watchEffect(() => {
  nav.value = activeSection.value
})

onMounted(() => {
  initScrollReveal()
  initSkillBars()
  const cleanup = initActiveSection()
  onUnmounted(cleanup)
})
</script>
