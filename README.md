# 🚀 Portfolio — Nicolas Maillard

> Développeur Web Full-Stack · Bordeaux, France  
> Fondateur de [Pure Web Agency](https://purewebagency.com)

Portfolio personnel ultra-moderne construit avec **Nuxt 3 + Vue 3 + TypeScript + TailwindCSS**.

---

## ✨ Features

- **Dark / Light mode** — toggle avec animation smooth, préférence persistée
- **Cursor personnalisé** — dot + ring avec effet hover
- **Typewriter** — animation de titre avec plusieurs rôles
- **Scroll reveals** — apparition fluide des sections (IntersectionObserver)
- **Skill bars animées** — déclenchées à l'entrée de la section
- **Filtres projets** — par technologie, avec transitions
- **Loader initial** — barre de chargement animée
- **Formulaire contact** — avec validation + ouverture mailto
- **SEO complet** — `useSeoMeta()`, JSON-LD Person schema, Open Graph
- **Vercel-ready** — `nuxt generate` → déploiement statique

---

## 🛠 Stack

| Outil | Usage |
|-------|-------|
| Nuxt 3 | Framework SSG |
| Vue 3 | Réactivité + composants |
| TypeScript | Typage strict |
| TailwindCSS | Styles utilitaires + tokens |
| @nuxtjs/color-mode | Dark/Light mode |
| @vueuse/nuxt | Composables utilitaires |

---

## 🏃 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Développement (HMR)
npm run dev

# Build production (SSR)
npm run build

# Générer statique (pour Vercel/Netlify)
npm run generate
```

Ouvre [http://localhost:3000](http://localhost:3000).

---

## 🌍 Déploiement Vercel

1. Push sur GitHub
2. Importer le repo sur [vercel.com](https://vercel.com)
3. Framework preset : **Nuxt.js**
4. Build command : `npm run generate`
5. Output dir : `.output/public`

Ou via CLI :
```bash
npm i -g vercel
vercel --prod
```

---

## 📁 Structure

```
portfolio-nicolas/
├── app.vue                    # Root + layout
├── nuxt.config.ts             # Config Nuxt (SEO, modules, routeRules)
├── tailwind.config.ts         # Design tokens (couleurs, animations, shadows)
├── assets/css/main.css        # Styles globaux (cursor, animations, scroll reveal)
├── components/
│   ├── AppCursor.vue          # Cursor dot + ring personnalisé
│   ├── AppLoader.vue          # Loader animé initial
│   ├── AppNav.vue             # Navigation sticky + dark mode toggle
│   ├── AppFooter.vue          # Pied de page
│   ├── SectionHero.vue        # Hero : typewriter, floating badges
│   ├── SectionAbout.vue       # À propos : bio, skill bars, stats
│   ├── SectionProjects.vue    # Projets : grid filtrable
│   ├── SectionServices.vue    # Services + Pure Web Agency CTA
│   └── SectionContact.vue     # Formulaire + infos contact
├── composables/
│   ├── useScrollReveal.ts     # IntersectionObserver pour animations scroll
│   ├── useActiveSection.ts    # Section active pour nav
│   ├── useRipple.ts           # Effet ripple sur les boutons
│   └── useSkillBars.ts        # Animation des barres de compétences
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── vercel.json
```

---

## 🎨 Design System

**Palette dark mode :**
- Fond : `#0A0A0A`
- Surface : `#111111`
- Card : `#161616`
- Accent : `#3B82F6` → `#60A5FA`

**Palette light mode :**
- Fond : `#FFFFFF`
- Navy : `#0F2044` → `#1E3A5F`
- Accent : `#3B82F6`

**Typographie :**
- Titres : Space Grotesk
- Corps : Inter

---

## 📬 Contact

- **Email** : nico39320@gmail.com
- **GitHub** : [nicolasMaillard49](https://github.com/nicolasMaillard49)
- **Agence** : [purewebagency.com](https://purewebagency.com)

---

*Portfolio généré avec ❤️ — Nicolas Maillard, Bordeaux*
