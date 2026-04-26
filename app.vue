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

    <NuxtPage />

    <!-- Footer -->
    <AppFooter />

    <!-- Cookie banner -->
    <AppCookieBanner />
  </div>
</template>

<script setup lang="ts">
const activeSection = useNavActiveSection()
</script>
