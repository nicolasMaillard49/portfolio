<template>
  <main>
    <SectionHero />
    <SectionAbout />
    <SectionProjects />
    <SectionServices />
    <SectionStarterPack />
    <SectionPricing />
    <SectionContact />
    <SectionFAQ />
  </main>
</template>

<script setup lang="ts">
const { activeSection, init: initActiveSection } = useActiveSection([
  'hero',
  'about',
  'projects',
  'services',
  'pricing',
  'contact',
  'faq',
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
