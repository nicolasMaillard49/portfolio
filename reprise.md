# Reprise — Avant mise en production

## Bloquants

- [x] **OG Image** — Screenshot 1200x630 sauvegardé en `public/og-image.png`
- [x] **Formulaire de contact** — Branché sur Formspree (fetch API). `SectionContact.vue` — **TODO: remplacer `xyzgobkl` par ton vrai ID Formspree**
- [x] **Installer le module sitemap** — Installé via `nuxt`
- [x] **Favicon.ico** — Généré via `scripts/generate-favicon.mjs` (sharp)

## Recommandé

- [x] **Formulaire de contact : choix du service** — Formspree choisi (simple, gratuit)
- [ ] **Screenshots projets** — Remplacer la dépendance Microlink API (rate limits, lent) par des screenshots statiques dans `public/`
- [x] **Email exposé** — Email supprimé partout (Contact, Footer, nuxt.config structured data). Remplacé par formulaire Formspree
- [x] **Design global** — Glassmorphism Nocturne appliqué (palette indigo/violet, glass-card, backdrop-blur, reflets)

## Problème PATH nvm4w

`npm install` échoue car `cmd.exe` ne trouve pas `node`. Solutions :
1. Vérifier que `C:\nvm4w\nodejs` est dans les variables d'environnement **système** (Path)
2. Ou relancer `nvm use 22.18.0` pour recréer le symlink
3. Redémarrer le terminal après modification

## Déjà corrigé

- [x] OG meta tags complétés (`twitter:description`, `og:url`, URL canonique) — `nuxt.config.ts`
- [x] Module `@nuxtjs/sitemap` configuré dans `nuxt.config.ts` (reste à installer le paquet npm)
- [x] Page 404 créée — `error.vue`
- [x] Curseur custom limité aux devices avec souris (`pointer: fine`) — `main.css`
- [x] Support `prefers-reduced-motion` ajouté — `main.css`
- [x] Références Pure Web Agency supprimées partout (Hero, About, Services, Contact, Footer, README)
- [x] Projets ajoutés : Restaurants Bordeaux + ClipBag Shop — `SectionProjects.vue`
- [x] Bug filtre projets corrigé (`TransitionGroup` tag + position absolute) — `SectionProjects.vue`
- [x] Référence `favicon.ico` ajoutée dans le head — `nuxt.config.ts`
