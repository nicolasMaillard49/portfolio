<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-6">
    <div class="text-center max-w-md space-y-6">
      <p class="text-electric-500 text-8xl font-display font-bold">{{ error?.statusCode || 404 }}</p>
      <h1 class="text-white font-display font-semibold text-2xl">
        {{ error?.statusCode === 404 ? 'Page introuvable' : 'Une erreur est survenue' }}
      </h1>
      <p class="text-gray-400 text-sm leading-relaxed">
        {{ error?.statusCode === 404
          ? 'La page que vous recherchez n\'existe pas ou a été déplacée.'
          : 'Quelque chose s\'est mal passé. Veuillez réessayer.'
        }}
      </p>
      <a
        href="/"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-medium text-sm transition-colors"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Retour à l'accueil
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError()
</script>
