<template>
  <ClientOnly>
    <Transition name="cookie-pop">
      <aside
        v-if="visible"
        role="dialog"
        aria-live="polite"
        aria-label="Préférences cookies"
        class="cookie-banner fixed z-[80] left-4 right-4 bottom-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-[360px] rounded-2xl backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(15,23,42,0.45)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] dark:bg-[rgba(12,12,22,0.92)] bg-white/95 dark:border-[rgba(255,255,255,0.08)] border border-gray-200 overflow-hidden"
      >
        <!-- accent hairline top -->
        <div class="h-px w-full" style="background: linear-gradient(90deg, transparent, rgba(99,102,241,0.55) 40%, rgba(167,139,250,0.55) 60%, transparent);" aria-hidden="true" />

        <div class="p-5">
          <div class="flex items-start gap-3 mb-3">
            <div
              class="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center"
              style="background: linear-gradient(135deg, rgba(99,102,241,0.18), rgba(167,139,250,0.10)); border: 1px solid rgba(99,102,241,0.25);"
            >
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-electric-500 dark:text-electric-400" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"/>
                <circle cx="8.5" cy="10.5" r="0.7" fill="currentColor"/>
                <circle cx="15" cy="14" r="0.7" fill="currentColor"/>
                <circle cx="11" cy="16" r="0.7" fill="currentColor"/>
              </svg>
            </div>
            <div class="min-w-0">
              <p class="font-display font-semibold text-sm dark:text-white text-navy-900 leading-tight">
                Cookies &amp; confidentialité
              </p>
              <p class="text-[11px] font-mono tracking-[0.18em] uppercase mt-0.5 dark:text-gray-500 text-gray-500">
                Vie privée respectée
              </p>
            </div>
          </div>

          <p class="text-[13px] leading-relaxed dark:text-gray-300 text-gray-600 mb-4">
            Nous utilisons des cookies pour mesurer l'audience du site et améliorer votre expérience. Aucune donnée vendue, aucun pistage publicitaire.
          </p>

          <div class="flex items-center gap-2">
            <button
              type="button"
              @click="choose('declined')"
              class="flex-1 px-3 py-2 rounded-lg text-[12px] font-medium transition-colors dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-navy-900 dark:bg-[rgba(255,255,255,0.04)] bg-gray-50 dark:border-[rgba(255,255,255,0.08)] border border-gray-200 dark:hover:bg-[rgba(255,255,255,0.08)] hover:bg-gray-100"
            >
              Refuser
            </button>
            <button
              type="button"
              @click="choose('accepted')"
              class="flex-1 px-3 py-2 rounded-lg text-[12px] font-semibold text-white transition-colors bg-electric-500 hover:bg-electric-600 shadow-glow-blue-sm"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </aside>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
const STORAGE_KEY = 'nmf-cookie-consent'
const visible = ref(false)

onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      setTimeout(() => { visible.value = true }, 800)
    }
  } catch {
    visible.value = true
  }
})

const choose = (choice: 'accepted' | 'declined') => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }))
  } catch { /* localStorage unavailable */ }
  visible.value = false
}
</script>

<style scoped>
.cookie-pop-enter-active,
.cookie-pop-leave-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.cookie-pop-enter-from,
.cookie-pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  .cookie-pop-enter-active,
  .cookie-pop-leave-active {
    transition: opacity 0.2s ease;
  }
  .cookie-pop-enter-from,
  .cookie-pop-leave-to {
    transform: none;
  }
}
</style>
