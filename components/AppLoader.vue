<template>
  <div id="page-loader" :class="{ hidden: done }" aria-hidden="true">
    <div class="flex items-center gap-3">
      <img
        src="/logo-symbole.png"
        alt="NMF Agence"
        width="40"
        height="40"
        class="w-10 h-10 object-contain logo-pulse drop-shadow-[0_0_20px_rgba(192,81,255,0.45)]"
      />
      <span class="font-display font-semibold text-white text-lg tracking-tight">NMF Agence</span>
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
