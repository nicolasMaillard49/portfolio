# Reprise — Avant mise en production

## Bloquants

- [ ] **OG Image** — Ouvrir `scripts/generate-og-image.html` dans le navigateur, screenshot 1200x630 et sauvegarder en `public/og-image.png`
- [ ] **Formulaire de contact** — Brancher sur un vrai service (Formspree, EmailJS ou Resend). Actuellement le formulaire ouvre juste un `mailto:` (`SectionContact.vue:142`)
- [ ] **Installer le module sitemap** — `npm install @nuxtjs/sitemap --save-dev` (échoue à cause du PATH nvm4w, voir section PATH ci-dessous)
- [ ] **Favicon.ico** — Générer un `public/favicon.ico` (32x32) à partir de `public/favicon.svg`

## Recommandé

- [ ] **Formulaire de contact : choix du service** — Décider entre Formspree (simple, gratuit), EmailJS (côté client) ou Resend (API, plus pro)
- [ ] **Screenshots projets** — Remplacer la dépendance Microlink API (rate limits, lent) par des screenshots statiques dans `public/`
- [ ] **Email exposé** — `nico39320@gmail.com` est en clair dans le code, les bots vont le scraper. Envisager un formulaire backend à la place du mailto
- [ ] **Design global** — 3 directions proposées (Editorial Bordelais, Néo-Brutalist, Glassmorphism Nocturne), choix à faire

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
