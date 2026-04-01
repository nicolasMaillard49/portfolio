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
          Un projet en tête ? Une question ? Je suis disponible pour en discuter.
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
              N'hésitez pas à me contacter pour discuter de votre projet. Je vous répondrai dans les plus brefs délais.
            </p>
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
                <option value="">Sélectionner...</option>
                <option value="vitrine">Site Vitrine</option>
                <option value="ecommerce">Site E-commerce</option>
                <option value="booking">Système de réservation</option>
                <option value="autre">Autre projet</option>
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

const FORMSPREE_ID = 'xyzgobkl' // TODO: remplacer par ton vrai ID Formspree (formspree.io)
const error = ref(false)

const handleSubmit = async () => {
  sending.value = true
  error.value = false
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    })
    if (!res.ok) throw new Error('Erreur envoi')
    sent.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
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
    label: 'GitHub',
    value: 'github.com/nicolasMaillard49',
    href: 'https://github.com/nicolasMaillard49',
    external: true,
    color: 'linear-gradient(135deg, #374151, #111827)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  },
  {
    label: 'LinkedIn',
    value: 'Nicolas Maillard',
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
