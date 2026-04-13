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
    screenshot: screenshot('https://www.lecoinburger.fr/'),
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
    screenshot: screenshot('https://www.purewebagency.com/cafebionature/'),
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
    id: 'salon-booking',
    title: 'Salon Booking',
    description: 'Système de réservation complet pour salon de coiffure. Gestion des créneaux, profils clients, notifications, backend NestJS + Prisma.',
    type: 'Application Web',
    tech: ['Vue.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/nicolasMaillard49/salon-booking',
    url: null,
    screenshot: null,
    live: false,
    featured: true,
    gradient: ['#7C3AED', '#4C1D95'],
    tags: ['Vue.js', 'NestJS'],
    icon: icons.calendar,
  },
  {
    id: 'spuc-boxing',
    title: 'SPUC Boxing Club',
    description: 'Site vitrine pour le club de boxe de Pessac. Présentation des cours, horaires, galerie. Construit avec Vue/Nuxt pour des performances optimales.',
    type: 'Site Vitrine',
    tech: ['Vue.js', 'Nuxt', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/spuc-boxing-club',
    url: null,
    screenshot: null,
    live: false,
    featured: false,
    gradient: ['#DC2626', '#7F1D1D'],
    tags: ['Vue.js', 'Nuxt'],
    icon: icons.shield,
  },
  {
    id: 'julien-perret',
    title: 'Julien Perret Charpentier',
    description: 'Site vitrine pour un artisan charpentier bordelais. Présentation des réalisations, devis en ligne, SEO local optimisé.',
    type: 'Site Vitrine',
    tech: ['Vue.js', 'Nuxt', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/nicolasMaillard49/julien-perret-charpentier',
    url: null,
    screenshot: null,
    live: false,
    featured: false,
    gradient: ['#92400E', '#451A03'],
    tags: ['Vue.js', 'Nuxt', 'TypeScript'],
    icon: icons.home,
  },
  {
    id: 'ecommerce',
    title: 'First E-commerce Site',
    description: 'Boutique e-commerce complète avec catalogue produits, panier, gestion des commandes. Premier projet e-commerce développé avec Vue.js.',
    type: 'E-commerce',
    tech: ['Vue.js', 'JavaScript', 'CSS3'],
    github: 'https://github.com/nicolasMaillard49/first-ecommerce-site',
    url: null,
    screenshot: null,
    live: false,
    featured: false,
    gradient: ['#065F46', '#022C22'],
    tags: ['Vue.js', 'E-commerce'],
    icon: icons.bag,
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
