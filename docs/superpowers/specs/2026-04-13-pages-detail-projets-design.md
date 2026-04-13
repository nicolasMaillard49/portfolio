# Design — Pages détail des projets

## Objectif

Ajouter des pages détail pour chaque projet en ligne afin de présenter en profondeur le contexte, les défis, les fonctionnalités clés et la stack technique. Chaque projet actuellement "live" (7 projets) obtient sa propre page accessible via un bouton "Détails" depuis la grille `SectionProjects`.

Aucun backend, tout est front-end Nuxt 3, cohérent avec l'existant.

## Portée

**Inclus :**
- Page dynamique `/projets/[id]` pour les 7 projets `live: true`
- Bouton "Détails" sur chaque carte projet (grille + hover overlay)
- Composable partagé `composables/useProjects.ts` pour centraliser la source de vérité
- Galerie auto-générée via Microlink (desktop fullPage, mobile, tablet) sans action utilisateur
- Contenu des 7 fiches pré-rédigé puis relu

**Exclus (non-goals) :**
- Pages détail pour les projets archivés (`live: false`)
- CMS, Markdown, backend, base de données
- Système de commentaires, témoignages clients, analytics
- Galerie manuelle (photos uploadées) — report éventuel ultérieur

## Architecture

### Routing

```
pages/
  projets/
    [id].vue
```

Nuxt file-based routing génère `/projets/<id>` dynamiquement. Le paramètre `id` correspond au champ existant `project.id` dans le tableau `projects`.

Si l'`id` n'existe pas ou si le projet n'a pas `details`, la page renvoie un 404 via `throw createError({ statusCode: 404 })`.

### Données partagées

Extraire le tableau `projects` de `components/SectionProjects.vue` vers `composables/useProjects.ts` :

```ts
export type ProjectFeature = {
  icon: string        // emoji ou SVG inline
  title: string
  description: string
}

export type ProjectStackItem = {
  name: string
  reason: string      // pourquoi ce choix technique
}

export type ProjectDetails = {
  context: string                 // 2-3 phrases, qui/pourquoi
  challenges: string[]            // 3-5 défis rencontrés
  features: ProjectFeature[]      // 4 fonctionnalités clés
  stackDetails: ProjectStackItem[]
}

export type Project = {
  id: string
  title: string
  description: string
  type: string
  tech: string[]
  github: string | null
  url: string | null
  screenshot: string | null
  live: boolean
  featured: boolean
  gradient: [string, string]
  tags: string[]
  icon: string
  details?: ProjectDetails
}

export const useProjects = () => {
  const projects: Project[] = [ /* ... */ ]
  const getBySlug = (id: string) => projects.find(p => p.id === id)
  const getRelated = (current: Project, limit = 3) =>
    projects
      .filter(p => p.id !== current.id && p.live && p.type === current.type)
      .slice(0, limit)
  return { projects, getBySlug, getRelated }
}
```

`SectionProjects.vue` consomme `useProjects()` au lieu de définir le tableau localement.

### Galerie Microlink

Helper dans `useProjects.ts` :

```ts
export const screenshots = (url: string) => ({
  desktop: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440`,
  mobile: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=375&viewport.height=812&viewport.isMobile=true`,
  fullPage: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot.fullPage=true&meta=false&embed=screenshot.url&viewport.width=1440`,
})
```

La galerie affiche les 3 variantes avec label ("Desktop", "Mobile", "Page complète"). Pas de lightbox dans V1 (simple zoom au hover + lien vers image en grand).

## Structure de la page détail

Sections dans cet ordre :

### 1. Breadcrumb
Lien "← Retour aux projets" fixé en haut, scroll vers `/#projects`.

### 2. Hero
- Badges : type du projet, "⭐ Mis en avant" si featured, "● Live" animé
- Titre (h1) + description courte existante
- Boutons : "Voir le site ↗" (electric-500), "Code GitHub" (glass) si disponible
- Screenshot Microlink `fullPage` grand format dans une `glass-card` avec `shadow-glass`

### 3. Contexte & défis (2 colonnes desktop / stack mobile)
- Colonne gauche : `context` (paragraphe)
- Colonne droite : liste des `challenges` avec icône check electric-500

### 4. Fonctionnalités clés
- Grille 2×2 desktop / stack mobile
- Chaque feature : `glass-card` avec icône (emoji large), titre bold, description

### 5. Stack technique
- Liste verticale
- Chaque item : nom de la techno en electric-400 + raison du choix

### 6. Galerie
- 3 captures Microlink (Desktop / Mobile / Page complète)
- Grille responsive : 3 colonnes desktop, 1 colonne mobile
- Loading lazy, placeholder gradient pendant chargement

### 7. Autres réalisations
- 3 cartes projets similaires (même `type`, `live: true`, différent du courant)
- Réutilise le design des cartes de `SectionProjects` (extrait en `components/ProjectCard.vue` si besoin)
- Fallback : si < 3 projets du même type, remplit avec d'autres projets live

### 8. CTA final
- `glass-strong` avec bordure electric-500/20
- Titre : "Un projet similaire en tête ?"
- Bouton "Discutons-en →" qui route vers `/#contact`

## Modifications sur la grille existante

Dans `SectionProjects.vue` :

1. **Overlay hover** (ligne 72-81) : ajouter un bouton "Détails" en première position
   ```
   [Détails]  [Voir le site]  [GitHub]
   ```
   Le bouton "Détails" utilise `NuxtLink :to="\`/projets/${project.id}\`"`, visible uniquement si `project.live && project.details`.

2. **Footer de la carte** (ligne 111-132) : ajouter un lien "Détails →" à côté de "Voir le site →" (même style, mais texte électrique différent).

## Données — contenu des 7 fiches

Le composable `useProjects.ts` inclut `details` pour chacun des 7 projets live :

- `purewebagency` (Site Vitrine)
- `anthonyfrides` (Site Vitrine)
- `larencontre` (Restaurant)
- `lecoinburger` (Restaurant)
- `cafebionature` (Site Vitrine)
- `restaurants-bordeaux` (Application Web)
- `clipbag` (E-commerce)

Le contenu est rédigé par Claude à partir des `description` actuelles et de l'inspection des sites live, puis relu par Nicolas avant publication.

## Style

Aucun nouveau composant CSS. Réutilisation des classes du design system existant :
- `glass-card`, `glass-strong`, `glass-input`
- `text-electric-400`, `text-electric-500`, `shadow-glow-blue`
- `font-display`, `section-sep`
- Dark mode via `dark:` preservé partout

Layout via Tailwind uniquement. Transitions `reveal` réutilisées pour l'animation d'apparition au scroll.

## SEO

Chaque page `/projets/[id]` définit :
- `useSeoMeta({ title, description, ogImage: screenshot fullPage, ogUrl })`
- Titre : `${project.title} — Réalisation NMF Agence`
- Description : dérivée de `project.description`
- Ajout des 7 URLs au `sitemap.xml` (le module `@nuxtjs/sitemap` devrait le faire automatiquement pour les routes dynamiques si configuré ; sinon ajouter manuellement dans `nuxt.config.ts`)

## Accessibilité

- Chaque image `<img>` a un `alt` explicite
- Les boutons/liens ont `aria-label` quand le contenu textuel seul est ambigu
- Contraste testé en dark et light mode
- Navigation clavier : tous les liens focalisables avec `focus:ring-electric-500/40`

## Plan d'implémentation (vue d'ensemble)

À détailler dans la phase `writing-plans` :

1. Créer `composables/useProjects.ts` avec types + data des 12 projets (migration depuis `SectionProjects.vue`)
2. Refactorer `SectionProjects.vue` pour consommer `useProjects()`
3. Créer `pages/projets/[id].vue` avec les 8 sections
4. Ajouter helper `screenshots()` multi-vues Microlink
5. Ajouter boutons "Détails" sur la grille (hover overlay + footer de carte)
6. Rédiger le contenu `details` pour les 7 projets live
7. Vérifier SEO (meta tags + sitemap)
8. Test manuel en dev server sur `/projets/clipbag`, `/projets/purewebagency`, etc.
9. Commit + push

## Risques & mitigations

| Risque | Mitigation |
|---|---|
| Microlink lent ou indisponible sur galerie | Loading lazy + placeholder gradient ; cache HTTP côté navigateur |
| Quota Microlink gratuit dépassé | Fallback visuel si l'image échoue (gradient + icône) ; envisager l'option A (captures manuelles) si le problème survient |
| Contenu inexact rédigé par Claude | Phase de relecture obligatoire par Nicolas avant commit |
| Duplication des cartes projet (section + "Autres réalisations") | Extraire `components/ProjectCard.vue` si la duplication est réelle (>2 usages) |
