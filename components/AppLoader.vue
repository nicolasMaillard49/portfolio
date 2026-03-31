<template>
  <div id="page-loader" :class="{ hidden: done }" aria-hidden="true">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-lg bg-electric-500 flex items-center justify-center shadow-glow-blue">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="font-display font-semibold text-white text-lg tracking-tight">NM</span>
    </div>
    <div class="loader-track" />
  </div>
</template>

<script setup lang="ts">
const done = ref(false)

onMounted(() => {
  setTimeout(() => { done.value = true }, 1400)
})
</script>
