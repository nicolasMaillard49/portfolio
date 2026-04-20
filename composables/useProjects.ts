export type ProjectFeature = {
  icon: string
  title: string
  description: string
}

export type ProjectStackItem = {
  name: string
  reason: string
}

export type ProjectDetails = {
  context: string
  challenges: string[]
  features: ProjectFeature[]
  stackDetails: ProjectStackItem[]
}

export type ProjectScreenshots = {
  desktop: string
  mobile: string
  fullPage?: string
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
  screenshots?: ProjectScreenshots
  live: boolean
  featured: boolean
  gradient: [string, string]
  tags: string[]
  icon: string
  details?: ProjectDetails
}

const screenshot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

export const screenshotsFor = (url: string) => ({
  desktop: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440`,
  mobile: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=375&viewport.height=812&viewport.isMobile=true`,
  fullPage: `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot.fullPage=true&meta=false&embed=screenshot.url&viewport.width=1440`,
})

const icons = {
  building: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
  cart: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
  coffee: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>',
  bag: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
}

const projects: Project[] = [
  {
    id: 'purewebagency',
    title: 'Pure Web Agency',
    description: 'Site vitrine pour une agence web. Présentation des services, hébergement France, conformité RGPD. Construit avec Nuxt 3.',
    type: 'Site Vitrine',
    tech: ['Nuxt 3', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/purewebagency-nuxt',
    url: 'https://purewebagency.com',
    screenshot: screenshot('https://purewebagency.com'),
    live: true,
    featured: true,
    gradient: ['#1E3A5F', '#0F2044'],
    tags: ['Nuxt', 'TypeScript'],
    icon: icons.building,
    details: {
      context: "Pure Web Agency est une agence web française proposant des sites sur-mesure avec hébergement souverain et conformité RGPD. Le site vitrine devait refléter cette positionnement premium, inspirer confiance, et convertir les visiteurs en prospects qualifiés.",
      challenges: [
        "Communiquer le positionnement 'hébergement France + RGPD' sans tomber dans le jargon",
        "Obtenir un score Lighthouse élevé pour le SEO et la crédibilité technique",
        "Mettre en place un formulaire de contact efficace sans backend",
        "Design moderne mais professionnel, adapté à une cible B2B",
      ],
      features: [
        { icon: '🎯', title: 'Présentation des services', description: "Catalogue clair des prestations avec tarifs indicatifs et CTA de devis pour chaque offre." },
        { icon: '📬', title: 'Formulaire de contact', description: "Envoi d'email direct via service tiers, aucune gestion backend nécessaire, réponse sous 24h garantie." },
        { icon: '🛡️', title: 'Conformité RGPD', description: "Bannière cookies, mentions légales et politique de confidentialité rédigées sur-mesure." },
        { icon: '⚡', title: 'Performance Nuxt 3', description: "SSR natif, images optimisées, score Lighthouse > 95 sur toutes les métriques." },
      ],
      stackDetails: [
        { name: 'Nuxt 3', reason: "SSR natif pour un SEO optimal et un time-to-first-byte minimal." },
        { name: 'TypeScript', reason: "Sécurise le code, évite les régressions et documente les intentions." },
        { name: 'TailwindCSS', reason: "Design system cohérent, responsive sans CSS custom fastidieux." },
      ],
    },
  },
  {
    id: 'anthonyfrides',
    title: 'Anthony Fridès',
    description: 'Site vitrine professionnel pour un expert en communication et relations publiques. Design moderne mettant en valeur son expertise et ses prestations.',
    type: 'Site Vitrine',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://www.anthonyfrides.fr/',
    screenshot: screenshot('https://www.anthonyfrides.fr/'),
    live: true,
    featured: true,
    gradient: ['#1E3A5F', '#2563EB'],
    tags: ['WordPress'],
    icon: icons.user,
    details: {
      context: "Anthony Fridès, expert en communication et relations publiques, avait besoin d'un site vitrine reflétant son expertise et attirant des clients exigeants. L'enjeu : se positionner comme référence sur son domaine sans tomber dans le site générique.",
      challenges: [
        "Retranscrire la personnalité et le storytelling d'Anthony à travers le design",
        "Autonomie complète pour la mise à jour des contenus par le client",
        "SEO local optimisé pour capter une clientèle ciblée",
        "Temps de chargement rapide malgré la richesse visuelle",
      ],
      features: [
        { icon: '✍️', title: 'Édition autonome', description: "Back-office WordPress permettant au client de modifier textes et images sans technique." },
        { icon: '🎨', title: 'Design sur-mesure', description: "Typographie éditoriale, palette raffinée et mises en page éditoriales." },
        { icon: '🔍', title: 'SEO optimisé', description: "Structure sémantique, balises meta personnalisées et maillage interne pensé." },
        { icon: '📱', title: 'Responsive premium', description: "Expérience mobile soignée, avec transitions fluides et lisibilité parfaite." },
      ],
      stackDetails: [
        { name: 'WordPress', reason: "Autonomie éditoriale du client, écosystème mature, coûts maîtrisés." },
        { name: 'CSS3 custom', reason: "Design unique qui s'affranchit des thèmes standards." },
        { name: 'SEO on-page', reason: "Optimisation des balises, performances et contenus pour le référencement naturel." },
      ],
    },
  },
  {
    id: 'larencontre',
    title: 'Restaurant La Rencontre',
    description: 'Site vitrine pour un restaurant traditionnel. Menu en ligne, présentation du chef, prise de réservation. Design chaleureux et appétissant.',
    type: 'Restaurant',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://restaurantlarencontre.com/',
    screenshot: screenshot('https://restaurantlarencontre.com/'),
    live: true,
    featured: false,
    gradient: ['#92400E', '#78350F'],
    tags: ['WordPress'],
    icon: icons.cart,
    details: {
      context: "La Rencontre est un restaurant traditionnel qui souhaitait digitaliser sa présence et faciliter les réservations en ligne. Le site devait donner envie de venir dîner et transmettre l'ambiance chaleureuse du lieu.",
      challenges: [
        "Transmettre l'émotion et l'atmosphère du restaurant via le visuel",
        "Intégrer un système de réservation simple pour les clients",
        "Mise à jour facile du menu par l'équipe du restaurant",
        "Référencement local pour capter les recherches 'restaurant + ville'",
      ],
      features: [
        { icon: '🍽️', title: 'Menu dynamique', description: "Carte éditable depuis WordPress, avec photos appétissantes pour chaque plat." },
        { icon: '📅', title: 'Réservation en ligne', description: "Formulaire de réservation intégré, envoi direct au restaurant par email." },
        { icon: '👨‍🍳', title: 'Présentation du chef', description: "Histoire et philosophie culinaire mises en avant pour créer du lien." },
        { icon: '📍', title: 'SEO local', description: "Optimisation Google My Business et balises géolocalisées pour attirer les locaux." },
      ],
      stackDetails: [
        { name: 'WordPress', reason: "Le client peut mettre à jour le menu et les horaires en toute autonomie." },
        { name: 'CSS3 custom', reason: "Ambiance visuelle chaleureuse et typographie travaillée." },
        { name: 'SEO local', reason: "Priorité donnée aux requêtes géolocalisées à fort potentiel." },
      ],
    },
  },
  {
    id: 'lecoinburger',
    title: 'Le Coin Burger',
    description: 'Site vitrine pour un burger artisanal. Présentation de la carte, ambiance chaleureuse, commande en ligne. Design moderne et gourmand.',
    type: 'Restaurant',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://www.lecoinburger.fr/',
    screenshot: '/projets/lecoinburger-desktop.png',
    screenshots: {
      desktop: '/projets/lecoinburger-desktop.png',
      mobile: '/projets/lecoinburger-mobile.png',
    },
    live: true,
    featured: false,
    gradient: ['#DC2626', '#7F1D1D'],
    tags: ['WordPress'],
    icon: icons.cart,
    details: {
      context: "Le Coin Burger, spécialiste du burger artisanal, voulait un site moderne et gourmand pour mettre en valeur sa carte et inciter à la commande. L'enjeu : donner faim dès la homepage.",
      challenges: [
        "Mise en avant visuelle forte des produits avec photos de qualité",
        "Intégration d'un système de commande en ligne simple",
        "Design chaleureux mais moderne, sans cliché fast-food",
        "Performances mobile optimales (majorité du trafic restauration)",
      ],
      features: [
        { icon: '🍔', title: 'Carte visuelle', description: "Chaque burger présenté avec photo HD, ingrédients détaillés et prix." },
        { icon: '🛒', title: 'Commande en ligne', description: "Processus de commande simplifié, retrait en boutique ou livraison." },
        { icon: '📍', title: 'Localisation', description: "Carte intégrée, horaires et numéro de téléphone cliquable en mobile." },
        { icon: '⭐', title: 'Avis clients', description: "Intégration des avis Google pour rassurer et convertir." },
      ],
      stackDetails: [
        { name: 'WordPress', reason: "Mise à jour rapide de la carte et des promotions par l'équipe." },
        { name: 'CSS3 custom', reason: "Identité visuelle forte, typographie gourmande et palette chaleureuse." },
        { name: 'SEO local', reason: "Capter les recherches 'burger + quartier' à fort volume." },
      ],
    },
  },
  {
    id: 'cafebionature',
    title: 'Café Bio Nature',
    description: 'Site vitrine pour un café bio et naturel. Mise en avant des produits sains, ambiance zen et organic. Design épuré aux tons naturels.',
    type: 'Site Vitrine',
    tech: ['WordPress', 'CSS3', 'SEO'],
    github: null,
    url: 'https://www.purewebagency.com/cafebionature/',
    screenshot: '/projets/cafebionature-desktop.png',
    screenshots: {
      desktop: '/projets/cafebionature-desktop.png',
      mobile: '/projets/cafebionature-mobile.png',
    },
    live: true,
    featured: false,
    gradient: ['#065F46', '#022C22'],
    tags: ['WordPress'],
    icon: icons.coffee,
    details: {
      context: "Café Bio Nature est un café 100% bio souhaitant affirmer ses valeurs écologiques à travers un site au design organic et épuré. Le site devait être un prolongement de l'expérience en boutique.",
      challenges: [
        "Retranscrire l'univers 'bio & naturel' sans tomber dans le cliché",
        "Mise en avant de la traçabilité et des producteurs partenaires",
        "Design épuré tout en restant engageant et commercial",
        "Accessibilité et performances pour tous les visiteurs",
      ],
      features: [
        { icon: '🌿', title: 'Design organic', description: "Palette végétale, typographie douce, éléments visuels inspirés de la nature." },
        { icon: '🥬', title: 'Produits bio', description: "Présentation détaillée des produits, origines et certifications bio." },
        { icon: '🤝', title: 'Producteurs locaux', description: "Section dédiée aux partenariats avec les producteurs de la région." },
        { icon: '💚', title: 'Engagement éco', description: "Mise en avant des initiatives écologiques et zero-waste du café." },
      ],
      stackDetails: [
        { name: 'WordPress', reason: "Gestion de contenu simple pour une équipe non technique." },
        { name: 'CSS3 custom', reason: "Ambiance visuelle unique, éloignée des templates génériques." },
        { name: 'SEO', reason: "Optimisation sur les requêtes bio, éco-responsable et local." },
      ],
    },
  },
  {
    id: 'restaurants-bordeaux',
    title: 'Restaurants Bordeaux',
    description: 'Annuaire des meilleurs restaurants de Bordeaux. Recherche par quartier, type de cuisine, avis clients. Design moderne et responsive.',
    type: 'Application Web',
    tech: ['Nuxt', 'TailwindCSS', 'SEO'],
    github: null,
    url: 'https://www.restaurants-bordeaux.com/',
    screenshot: screenshot('https://www.restaurants-bordeaux.com/'),
    live: true,
    featured: true,
    gradient: ['#B45309', '#78350F'],
    tags: ['Nuxt'],
    icon: icons.cart,
    details: {
      context: "Restaurants Bordeaux est un annuaire local qui référence et met en avant les meilleurs restaurants de la ville. L'objectif : devenir la référence web pour les bordelais et les touristes en quête d'une bonne adresse.",
      challenges: [
        "Gérer une base de données importante de restaurants avec filtres multiples",
        "Optimiser le SEO pour capter les recherches 'restaurant Bordeaux + cuisine'",
        "Design moderne et responsive pour un usage majoritairement mobile",
        "Temps de chargement ultra rapide malgré la richesse des données",
      ],
      features: [
        { icon: '🔍', title: 'Recherche avancée', description: "Filtres par quartier, type de cuisine, budget et note moyenne." },
        { icon: '📍', title: 'Carte interactive', description: "Visualisation des restaurants sur une carte Bordeaux avec clustering." },
        { icon: '⭐', title: 'Avis & notes', description: "Système de notation et avis clients pour guider la décision." },
        { icon: '📱', title: 'Mobile-first', description: "Expérience optimisée mobile : 80% du trafic vient du smartphone." },
      ],
      stackDetails: [
        { name: 'Nuxt 3', reason: "SSR pour un SEO maximal et performances sur toutes les pages restaurants." },
        { name: 'TailwindCSS', reason: "Design system rapide et responsive, cohérent sur toutes les pages." },
        { name: 'SEO', reason: "Stratégie de contenu et structure sémantique pour dominer les SERP locales." },
      ],
    },
  },
  {
    id: 'pawly',
    title: 'Pawly Shopping',
    description: "Boutique e-commerce dédiée aux accessoires pour animaux. Catalogue riche, parcours d'achat fluide et paiement sécurisé.",
    type: 'E-commerce',
    tech: ['Nuxt', 'Stripe', 'TailwindCSS'],
    github: null,
    url: 'https://pawly.shopping',
    screenshot: screenshot('https://pawly.shopping'),
    live: true,
    featured: true,
    gradient: ['#F472B6', '#8B5CF6'],
    tags: ['Nuxt', 'E-commerce'],
    icon: icons.bag,
    details: {
      context: "Pawly.shopping est une boutique en ligne spécialisée dans les accessoires et produits pour animaux de compagnie. Le projet visait une plateforme e-commerce moderne, rassurante et optimisée pour la conversion, avec un parcours d'achat simple et efficace.",
      challenges: [
        "Concevoir un catalogue clair avec filtres pertinents (type d'animal, catégorie, prix)",
        "Intégrer un paiement sécurisé Stripe avec gestion des commandes",
        "Optimiser les performances mobile pour une cible majoritairement smartphone",
        "Soigner le SEO produit pour capter les recherches longue traîne",
      ],
      features: [
        { icon: '🐾', title: 'Catalogue segmenté', description: "Filtres par animal et catégorie, recherche rapide et mise en avant des produits phares." },
        { icon: '💳', title: 'Paiement Stripe', description: "Checkout sécurisé PCI-DSS, Apple Pay et Google Pay supportés nativement." },
        { icon: '📦', title: 'Suivi de commande', description: "Emails transactionnels automatiques et statut de commande accessible au client." },
        { icon: '⚡', title: 'Performance Nuxt', description: "SSR, images optimisées et lazy loading pour un time-to-interactive minimal." },
      ],
      stackDetails: [
        { name: 'Nuxt 3', reason: "SSR pour un SEO e-commerce optimal et une UX fluide entre fiches produits." },
        { name: 'Stripe', reason: "Paiement sécurisé avec intégration rapide et frais compétitifs." },
        { name: 'TailwindCSS', reason: "Design system cohérent, responsive et maintenable." },
      ],
    },
  },
  {
    id: 'clipbag',
    title: 'ClipBag Shop',
    description: 'E-commerce pour un sac magnétique innovant destiné aux sportifs. Paiement sécurisé Stripe, backend sur Railway. Application sur-mesure Nuxt.',
    type: 'E-commerce',
    tech: ['Nuxt', 'Stripe', 'TailwindCSS'],
    github: null,
    url: 'https://clipbag.shop',
    screenshot: screenshot('https://clipbag.shop'),
    live: true,
    featured: true,
    gradient: ['#0F766E', '#134E4A'],
    tags: ['Nuxt', 'E-commerce'],
    icon: icons.bag,
    details: {
      context: "ClipBag est un sac magnétique innovant destiné aux sportifs. Le client cherchait une boutique sur-mesure pour lancer son produit, avec paiement sécurisé et expérience premium reflétant l'identité de la marque.",
      challenges: [
        "Créer une boutique e-commerce complète sans plateforme type Shopify",
        "Intégrer Stripe pour des paiements sécurisés et conformes PCI-DSS",
        "Garantir des performances optimales, surtout sur mobile",
        "SEO dès le départ pour un lancement produit visible sur Google",
      ],
      features: [
        { icon: '🛒', title: 'Panier intelligent', description: "Gestion du panier persistant, calcul automatique des frais de port." },
        { icon: '💳', title: 'Paiement Stripe', description: "Checkout sécurisé, Apple Pay et Google Pay supportés nativement." },
        { icon: '📦', title: 'Suivi de commande', description: "Emails transactionnels automatiques et page de suivi personnalisée." },
        { icon: '⚡', title: 'Performance Nuxt', description: "Score Lighthouse > 95, images optimisées, lazy loading partout." },
      ],
      stackDetails: [
        { name: 'Nuxt 3', reason: "SSR + SEO optimal pour un lancement produit visible dès le jour 1." },
        { name: 'Stripe', reason: "Paiement PCI-DSS sécurisé, intégration fluide et frais compétitifs." },
        { name: 'Railway', reason: "Hébergement backend simple, scalable et coût maîtrisé." },
        { name: 'TailwindCSS', reason: "Design system rapide, responsive et cohérent sur toutes les pages." },
      ],
    },
  },
  {
    id: 'spuc-boxing',
    title: 'SPUC Boxing Club',
    description: 'Site vitrine pour le club de boxe de Pessac. Présentation des cours, horaires, galerie. Construit avec Nuxt 3 pour des performances optimales.',
    type: 'Site Vitrine',
    tech: ['Nuxt 3', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/spuc-boxing-club',
    url: null,
    screenshot: '/projets/spuc-boxing-desktop.png',
    screenshots: {
      desktop: '/projets/spuc-boxing-desktop.png',
      mobile: '/projets/spuc-boxing-mobile.png',
    },
    live: false,
    featured: false,
    gradient: ['#DC2626', '#7F1D1D'],
    tags: ['Nuxt', 'TypeScript'],
    icon: icons.shield,
    details: {
      context: "SPUC Boxing Club à Pessac avait besoin d'un site vitrine moderne pour affirmer son identité, présenter ses disciplines (boxe anglaise, kickboxing, Muay Thaï, fitness boxing) et faciliter l'inscription de nouveaux membres. Esthétique sombre, rouge sang, énergique — à l'image du club.",
      challenges: [
        "Transmettre l'intensité du club via le design sans tomber dans le cliché",
        "Gérer un planning hebdomadaire lisible avec filtres par discipline",
        "SEO local solide pour capter les recherches 'boxe Pessac' et 'club de boxe Bordeaux'",
        "Performances Lighthouse élevées malgré la richesse visuelle",
      ],
      features: [
        { icon: '🥊', title: 'Disciplines détaillées', description: "Pages dédiées par discipline avec visuels et niveaux d'exigence clairs." },
        { icon: '📅', title: 'Planning interactif', description: "Tableau des cours filtrable, consultable en un coup d'œil sur mobile." },
        { icon: '🏆', title: 'Coaches & valeurs', description: "Pages 'À propos' mettant en avant l'équipe et l'histoire du club." },
        { icon: '📨', title: 'Formulaire de contact', description: "Prise de contact simple pour nouveaux adhérents et questions pratiques." },
      ],
      stackDetails: [
        { name: 'Nuxt 3', reason: "SSG pour un SEO optimal et un time-to-interactive minimal." },
        { name: 'TypeScript', reason: "Fiabilise le code et documente les intentions." },
        { name: 'TailwindCSS', reason: "Design system cohérent et responsive sans CSS custom lourd." },
      ],
    },
  },
  {
    id: 'julien-perret',
    title: 'Julien Perret Charpentier',
    description: "Site vitrine pour un artisan charpentier bordelais. Design système bois chaleureux, galerie masonry, SEO local optimisé.",
    type: 'Site Vitrine',
    tech: ['Nuxt 3', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/julien-perret-charpentier',
    url: null,
    screenshot: '/projets/julien-perret-desktop.png',
    screenshots: {
      desktop: '/projets/julien-perret-desktop.png',
      mobile: '/projets/julien-perret-mobile.png',
    },
    live: false,
    featured: false,
    gradient: ['#92400E', '#451A03'],
    tags: ['Nuxt', 'TypeScript'],
    icon: icons.home,
    details: {
      context: "Julien Perret, artisan charpentier à Bordeaux, souhaitait une vitrine premium mettant en avant la noblesse du bois et la précision du geste artisanal. Le site devait transmettre le savoir-faire, présenter les réalisations et générer des demandes de devis qualifiées.",
      challenges: [
        "Retranscrire la chaleur du bois dans le design sans tomber dans le rustique",
        "Galerie masonry performante avec lightbox fluide sur mobile",
        "Animations scroll et compteurs animés sans plomber le Lighthouse",
        "SEO local sur 'charpentier Bordeaux' et requêtes longue traîne",
      ],
      features: [
        { icon: '🏗️', title: 'Services détaillés', description: "Présentation claire des prestations (charpente, menuiserie, escaliers sur-mesure)." },
        { icon: '🖼️', title: 'Galerie masonry', description: "Réalisations mises en valeur dans une grille dynamique avec lightbox." },
        { icon: '📞', title: 'Devis en ligne', description: "Formulaire de contact avec qualification du besoin pour gagner du temps." },
        { icon: '🔍', title: 'SEO local', description: "JSON-LD LocalBusiness, sitemap et balises optimisés pour Bordeaux." },
      ],
      stackDetails: [
        { name: 'Nuxt 3', reason: "SSG + SEO natif pour un référencement local maximal." },
        { name: 'TypeScript', reason: "Documente les intentions et évite les régressions." },
        { name: 'TailwindCSS', reason: "Design system bois chaleureux déployé rapidement." },
      ],
    },
  },
  {
    id: 'kraft',
    title: 'KRAFT Fleuriste',
    description: "Site vitrine pour un fleuriste artisan bordelais. Ambiance botanique minimaliste, illustrations SVG, Next.js 14 avec App Router.",
    type: 'Site Vitrine',
    tech: ['Next.js 14', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/kraft-fleuriste',
    url: null,
    screenshot: '/projets/kraft-desktop.png',
    screenshots: {
      desktop: '/projets/kraft-desktop.png',
      mobile: '/projets/kraft-mobile.png',
    },
    live: false,
    featured: false,
    gradient: ['#7C9A7E', '#3F5A45'],
    tags: ['TypeScript'],
    icon: icons.building,
    details: {
      context: "KRAFT est un fleuriste artisan installé 278 Cours de la Somme à Bordeaux. Le site vitrine devait refléter l'univers botanique minimaliste de la boutique, mettre en avant les créations florales (bouquets, compositions, événements) et faciliter la prise de contact.",
      challenges: [
        "Créer une esthétique botanique épurée sans iconographie stock",
        "Illustrations florales 100% SVG inline pour préserver les performances",
        "Smooth scroll et micro-animations sans sacrifier le Lighthouse",
        "SEO local sur 'fleuriste Bordeaux' et requêtes événements (mariage, cérémonies)",
      ],
      features: [
        { icon: '💐', title: 'Créations mises en avant', description: "Bouquets, compositions et arrangements événementiels dans des cards soignées." },
        { icon: '🌿', title: 'Illustrations botaniques', description: "Motifs floraux SVG dessinés à la main, zéro image stock." },
        { icon: '📍', title: 'Infos boutique', description: "Adresse, horaires détaillés, téléphone cliquable et intégration Google Places." },
        { icon: '✨', title: 'Animations subtiles', description: "Framer-motion + Lenis pour un smooth scroll naturel sans verbosité." },
      ],
      stackDetails: [
        { name: 'Next.js 14', reason: "App Router + SSR pour un SEO local optimal et une DX moderne." },
        { name: 'TypeScript', reason: "Typage strict pour sécuriser l'évolution du site." },
        { name: 'TailwindCSS', reason: "Design system crème / vert sauge / marron kraft déployé rapidement." },
        { name: 'framer-motion + lenis', reason: "Animations et smooth scroll calibrés sans impact perf." },
      ],
    },
  },
]

export const useProjects = () => {
  const getBySlug = (id: string) => projects.find((p) => p.id === id)
  const getRelated = (current: Project, limit = 3) => {
    const sameType = projects.filter((p) => p.id !== current.id && p.live && p.type === current.type)
    if (sameType.length >= limit) return sameType.slice(0, limit)
    const others = projects.filter(
      (p) => p.id !== current.id && p.live && p.type !== current.type && !sameType.includes(p),
    )
    return [...sameType, ...others].slice(0, limit)
  }
  return { projects, getBySlug, getRelated }
}
