<template>
  <section id="contact" class="py-24 relative dark:bg-[rgba(12,12,22,0.5)] bg-gray-50/60">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <p class="text-electric-500 text-sm font-medium font-display mb-3 tracking-widest uppercase">Contact</p>
        <div class="section-sep mx-auto mb-5" />
        <h2 class="font-display font-bold dark:text-white text-navy-900 text-4xl leading-tight mb-4">
          Travaillons ensemble
        </h2>
        <p class="dark:text-gray-400 text-gray-500 text-base max-w-md mx-auto leading-relaxed">
          Un projet en tête ? Une question ? Nous sommes disponibles pour en discuter.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 items-start">
        <!-- Left: Contact info -->
        <div class="space-y-6 reveal reveal-delay-1">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4 glass-card rounded-xl p-4 shadow-glass card-lift"
          >
            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              :style="`background: ${info.color}`">
              <div v-html="info.icon" class="w-5 h-5 text-white" />
            </div>
            <div>
              <p class="dark:text-gray-400 text-gray-500 text-xs mb-1">{{ info.label }}</p>
              <a
                v-if="info.href"
                :href="info.href"
                :target="info.external ? '_blank' : undefined"
                :rel="info.external ? 'noopener' : undefined"
                class="dark:text-white text-navy-900 text-sm font-medium dark:hover:text-electric-400 hover:text-electric-600 transition-colors"
              >
                {{ info.value }}
              </a>
              <p v-else class="dark:text-white text-navy-900 text-sm font-medium">{{ info.value }}</p>
            </div>
          </div>

          <!-- Availability info -->
          <div class="glass-strong dark:border-electric-500/20 border-electric-500/20 border-2 rounded-xl p-5 shadow-glass">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span class="dark:text-gray-300 text-gray-600 text-xs font-medium">Disponible pour de nouveaux projets</span>
            </div>
            <p class="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">
              N'hésitez pas à nous contacter pour discuter de votre projet. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <!-- Secteur d'intervention -->
          <div class="glass-card rounded-xl p-5 shadow-glass">
            <div class="flex items-start gap-3 mb-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background: linear-gradient(135deg, #6366F1, #A78BFA)">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="dark:text-white text-navy-900 text-sm font-semibold mb-0.5">Secteur d'intervention : toute la France 🇫🇷</p>
                <p class="dark:text-gray-400 text-gray-500 text-xs leading-relaxed">
                  Aucun déplacement physique nécessaire. Un appel visio ou une validation des maquettes en ligne suffit pour mener à bien votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="reveal reveal-delay-2">
          <form @submit.prevent="handleSubmit" class="glass-card rounded-2xl p-6 shadow-glass space-y-4">
            <div class="space-y-1.5">
              <label for="contact-name" class="dark:text-gray-300 text-gray-700 text-sm font-medium">Nom</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                autocomplete="name"
                placeholder="Votre nom"
                required
                class="w-full px-4 py-2.5 rounded-xl text-sm glass-input dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-500/40 transition-all"
              />
            </div>
            <div class="space-y-1.5">
              <label for="contact-email" class="dark:text-gray-300 text-gray-700 text-sm font-medium">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="votre@email.com"
                required
                class="w-full px-4 py-2.5 rounded-xl text-sm glass-input dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-500/40 transition-all"
              />
            </div>
            <div class="space-y-1.5">
              <label for="contact-subject" class="dark:text-gray-300 text-gray-700 text-sm font-medium">Sujet</label>
              <select
                id="contact-subject"
                v-model="form.subject"
                class="w-full px-4 py-2.5 rounded-xl text-sm glass-input dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-electric-500/40 transition-all"
              >
                <option value="" class="bg-white text-gray-900 dark:bg-navy-900 dark:text-white">Sélectionner...</option>
                <option value="Site Vitrine" class="bg-white text-gray-900 dark:bg-navy-900 dark:text-white">Site Vitrine</option>
                <option value="Site E-commerce" class="bg-white text-gray-900 dark:bg-navy-900 dark:text-white">Site E-commerce</option>
                <option value="Système de réservation" class="bg-white text-gray-900 dark:bg-navy-900 dark:text-white">Système de réservation</option>
                <option value="Autre projet" class="bg-white text-gray-900 dark:bg-navy-900 dark:text-white">Autre projet</option>
              </select>
            </div>
            <div class="space-y-1.5">
              <label for="contact-message" class="dark:text-gray-300 text-gray-700 text-sm font-medium">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="4"
                placeholder="Décrivez votre projet..."
                required
                class="w-full px-4 py-2.5 rounded-xl text-sm glass-input dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-500/40 transition-all resize-none"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="sending || sent"
              class="btn-ripple w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              :class="sent
                ? 'bg-green-500 text-white'
                : 'bg-electric-500 hover:bg-electric-600 text-white shadow-glow-blue-sm hover:shadow-glow-blue'"
              @click="createRipple"
            >
              <svg v-if="sent" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <svg v-else-if="sending" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              {{ sent ? 'Message envoyé !' : sending ? 'Envoi...' : 'Envoyer le message' }}
            </button>
            <p v-if="error" class="text-red-400 text-xs text-center">
              Une erreur est survenue. Veuillez réessayer.
            </p>
            <p class="dark:text-gray-500 text-gray-400 text-xs text-center">
              En envoyant ce message, vos données seront uniquement utilisées pour vous répondre.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { createRipple } = useRipple()

const form = reactive({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const sent = ref(false)
const error = ref(false)

const CONTACT_EMAIL = 'contact@nmf-agence.com'

const prefill = useContactPrefill()

watch(
  prefill,
  (val) => {
    if (val.subject) form.subject = val.subject
    if (val.message) form.message = val.message
  },
  { immediate: true, deep: true },
)

const handleSubmit = async () => {
  sending.value = true
  error.value = false
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        '👤 Nom': form.name,
        '📧 Email': form.email,
        '🎯 Type de projet': form.subject || 'Non précisé',
        '💬 Message': form.message,
        '📅 Reçu le': new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' }),
        _subject: `[NMF Agence] ${form.subject || 'Nouveau message'} — ${form.name}`,
        _replyto: form.email,
        _template: 'table',
        _captcha: 'true',
      }),
    })
    if (!res.ok) throw new Error('Erreur envoi')
    sent.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    prefill.value = { subject: '', message: '' }
    setTimeout(() => { sent.value = false }, 4000)
  } catch {
    error.value = true
    setTimeout(() => { error.value = false }, 4000)
  } finally {
    sending.value = false
  }
}

const contactInfo = [
  {
    label: 'Instagram',
    value: '@nmfagence',
    href: 'https://www.instagram.com/nmfagence/',
    external: true,
    color: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.142 0-3.511.011-4.75.068-1.03.047-1.59.217-1.96.361-.494.192-.846.421-1.216.791-.37.37-.599.722-.791 1.216-.144.37-.314.93-.361 1.96C2.85 8.489 2.838 8.858 2.838 12c0 3.142.011 3.511.068 4.75.047 1.03.217 1.59.361 1.96.192.494.421.846.791 1.216.37.37.722.599 1.216.791.37.144.93.314 1.96.361 1.239.057 1.608.068 4.75.068s3.511-.011 4.75-.068c1.03-.047 1.59-.217 1.96-.361.494-.192.846-.421 1.216-.791.37-.37.599-.722.791-1.216.144-.37.314-.93.361-1.96.057-1.239.068-1.608.068-4.75s-.011-3.511-.068-4.75c-.047-1.03-.217-1.59-.361-1.96-.192-.494-.421-.846-.791-1.216-.37-.37-.722-.599-1.216-.791-.37-.144-.93-.314-1.96-.361C15.511 4.012 15.142 4.001 12 4.001zm0 3.131a4.868 4.868 0 1 1 0 9.736 4.868 4.868 0 0 1 0-9.736zm0 8.03a3.162 3.162 0 1 0 0-6.324 3.162 3.162 0 0 0 0 6.324zm6.188-8.248a1.137 1.137 0 1 1-2.274 0 1.137 1.137 0 0 1 2.274 0z"/></svg>',
  },
  {
    label: 'GitHub',
    value: 'github.com/nicolasMaillard49',
    href: 'https://github.com/nicolasMaillard49',
    external: true,
    color: 'linear-gradient(135deg, #374151, #111827)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  },
  {
    label: 'LinkedIn',
    value: 'NMF Agence',
    href: 'https://www.linkedin.com/in/nicolas-maillard-dev/',
    external: true,
    color: 'linear-gradient(135deg, #0077B5, #004182)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    label: 'Localisation',
    value: 'Bordeaux, France 🇫🇷',
    href: null,
    external: false,
    color: 'linear-gradient(135deg, #DC2626, #7F1D1D)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  },
]
</script>
