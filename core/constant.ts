import {
  HomeOutlined, BookOutlined,
  CalendarOutlined,  
  SafetyOutlined, NotificationOutlined, SolutionOutlined, AimOutlined, HeartFilled, PushpinFilled, StarFilled, UsergroupAddOutlined, FileTextOutlined, ShareAltOutlined, TeamOutlined, RiseOutlined, PhoneOutlined,
} from "@ant-design/icons-vue";
import GoalIcon from '@/components/Svg/Goal.vue';


export const menuItems = [
  {
    name: 'nav.home',
    to: "/",
    icon: HomeOutlined,
    dropdown: null,
  },
  {
    name: "nav.association",
    icon: null,
    dropdown: [
      { name: "nav.role", to: "#", icon: GoalIcon },
      { name: "nav.defis", to: "#", icon: RiseOutlined },
      { name: "nav.squad", to: "#", icon: TeamOutlined },
    ],
  },
  {
    name: "nav.project",
    to: "#",
    icon: NotificationOutlined,
    dropdown: null,
  },
  {
    name: "nav.contact",
    to: "#",
    icon: PhoneOutlined,
    dropdown: null,
  },
];


// A traduire
export const actionButtons = [
  {
    label: 'Soutien & collaboration',
    icon: UsergroupAddOutlined,
    type: 'primary',
    showOnMobile: true,
    redirectButton: "#test",
    isTablette: false

  },
  {
    label: 'Participer à l\'élection',
    icon: FileTextOutlined,
    type: 'outline-vote',
    showOnMobile: true,
    isTablette: true,
    redirectButton: "/gg"
  },
  {
    label: 'Nous rejoindre',
    icon: ShareAltOutlined,
    type: 'outline',
    showOnMobile: false,
    redirectButton: "/",
    isTablette: false
  },
];

export const slides = [
  {
    badge: "Association officielle",
    icon: StarFilled,
    title: "Une voix. Trois campus. Une communauté étudiante unie.",
    subtitle:
      "Ensemble, nous représentons, soutenons et rassemblons les étudiants de l'Université de Hearst à travers nos trois campus, pour bâtir une expérience universitaire enrichissante.",
    actions: [
      {
        label: "Découvrir l'association",
        href: "#association",
        class: "outline-slide",
      },
      { label: "Nous rejoindre", href: "#rejoindre", class: "outline-slide-second-only" },
    ],
  },
  {
    badge: "Accompagnement",
    icon: HeartFilled,
    title: "Nous sommes là<br>pour vous accompagner",
    subtitle:
      "Subventions pour vos projets, aide académique, soutien social... Découvrez tous les services que nous offrons pour faciliter votre réussite.",
    actions: [
      { label: "Demander du soutien", href: "#soutien", class: "outline-slide" },
      { label: "Voir nos projets", href: "#projets", class: "outline-slide-second" },
    ],
  },
  {
    badge: "Rejoignez l'aventure",
    icon: PushpinFilled,
    title: "Faites la différence<br>dans votre communauté",
    subtitle:
      "Devenez membre actif de l'association, participez aux décisions qui façonnent votre vie étudiante et créez des souvenirs inoubliables avec des étudiants passionnés comme vous.",
    actions: [
      { label: "Devenir membre", href: "#rejoindre", class: "outline-slide" },
      { label: "Rencontrer l'équipe", href: "#equipe", class: "outline-slide-second" },
    ],
  },
];

export const cards = [
  {
    title: "body.presentation.card.title-one",
    text: "body.presentation.card.one",
    icon: SolutionOutlined,
    class: "icon-box-1"
  },
  {
    title: "body.presentation.card.title-second",
    text: "body.presentation.card.second",
    icon: AimOutlined,
    class: "icon-box-2"
  },
  {
    title: "body.presentation.card.title-three",
    text: "body.presentation.card.three",
    icon: HeartFilled,
    class: "icon-box-3"
  },
];

export const cardSecond = [
  {
    title: "body.goal.card.title-one",
    text:
      "body.goal.card.one",
    icon: TeamOutlined,
  },
  {
    title: "body.goal.card.title-second",
    text: "body.goal.card.second",
    icon: BookOutlined,
    active: true, // card mise en avant
  },
  {
    title: "body.goal.card.title-three",
    text: "body.goal.card.three",
    icon: CalendarOutlined,
  },
  {
    title: "body.goal.card.title-four",
    text: "body.goal.card.four",
    icon: SafetyOutlined
  },
];

export const filters = [
  "body.filters.all",
  "body.filters.kapuskasing",
  "body.filters.hearst",
  "body.filters.timmins"
];

export const campusValue = {
  KAPUSKASING: "Kapuskasing",
  HEARST: "Hearst",
  TIMMINS: "Timmins"
}

export const years = [
  { value: 2024, label: "2024-2025" },
  { value: 2023, label: "2023-2024" },
  { value: 2022, label: "2022-2023" },
  { value: 2021, label: "2021-2022" },
  { value: 2020, label: "2020-2021" },
];

export const members = ref([
  {
    id: 1,
    name: "Marc Zukenberg",
    role: "body.members.card.position.president.poste",
    campus: "body.filters.hearst",
    color: "white",
    background: "#10b981",
    photo: "https://i.pravatar.cc/246?img=68",
    description:
      "body.members.card.position.president.description",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "body.members.card.position.president.position_during" },
      { value: "3ᵉ année", label: "body.members.card.position.president.school_years" },
    ],
  },
  {
    id: 2,
    name: "Marc Leblanc",
    role: "body.members.card.position.vice_president.poste",
    campus: "body.filters.kapuskasing",
    photo: "https://i.pravatar.cc/246?img=33",
    color: "blue",
    background: "#2563eb",
    initials: "ML",
    description: "body.members.card.position.vice_president.description",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "body.members.card.position.president.position_during" },
      { value: "3ᵉ année", label: "body.members.card.position.president.school_years" },
    ],
  },
  {
    id: 3,
    name: "Camille Roy",
    role: "body.members.card.position.secretaire.poste",
    campus: "body.filters.timmins",
    photo: "https://i.pravatar.cc/246?img=55",
    color: "gold",
    background: "#f59e0b",
    initials: "CR",
    description: "body.members.card.position.secretaire.description",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "body.members.card.position.president.position_during" },
      { value: "3ᵉ année", label: "body.members.card.position.president.school_years" },
    ],
  },
  {
    id: 4,
    name: "Alexandre Tremblay",
    role: "body.members.card.position.tresorerie.poste",
    campus: "body.filters.kapuskasing",
    color: "blue",
    background: "#2563eb",
    photo: "https://i.pravatar.cc/246?img=56",
    initials: "AT",
    description: "body.members.card.position.tresorerie.description",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "body.members.card.position.president.position_during" },
      { value: "3ᵉ année", label: "body.members.card.position.president.school_years" },
    ],
  },
  {
    id: 5,
    name: "Alexandre Tremblay",
    role: "body.members.card.position.communication.poste",
    photo: "https://i.pravatar.cc/246?img=23",
    campus: "body.filters.hearst",
    color: "green",
    background: "#10b981",
    initials: "AT",
    description: "body.members.card.position.communication.description",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "body.members.card.position.president.position_during" },
      { value: "3ᵉ année", label: "body.members.card.position.president.school_years" },
    ],
  },
]);

export const statusProject = {
  IN_PROGRESS: "En cours",
  FINISHED: "Terminé",
  NOT_STARTED: "À venir"
}

export const allProjects = [
  {
    id: 1,
    title: "Semaine de la santé mentale",
    excerpt: "Une semaine dédiée au bien-être étudiant avec ateliers et conférences.",
    status: "En cours",
    campus: "Kapuskasing",
    tagColor: "blue",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
    publishDate: "01/02/2025",
    organizer: "Association BVE",
    location: "Campus principal – Auditorium A & Salle B2",
    description:
      "La Semaine de la santé mentale est une initiative phare organisée chaque année pour sensibiliser les étudiants à l'importance du bien-être psychologique. À travers une série d'ateliers interactifs, de conférences avec des experts en santé mentale et de moments de partage, cette semaine vise à créer un environnement safe et inclusif où chacun peut exprimer ses ressentis. En 2025, nous mettons l'accent sur la déstigmatisation et l'accessibilité aux ressources d'aide.",
    programme: [
      {
        time: "Lundi 03/02 – 10h00",
        event: "Ouverture & Conférence plénière",
        description:
          "Discours d'ouverture par le directeur académique suivi d'une conférence sur les enjeux actuels de la santé mentale étudiant.",
      },
      {
        time: "Mardi 04/02 – 14h00",
        event: "Atelier : Gestion du stress",
        description:
          "Atelier pratique animé par une psychologue spécialisée, avec des techniques de relaxation et de pleine conscience.",
      },
      {
        time: "Mercredi 05/02 – 16h00",
        event: "Table ronde : Paroles d'étudiants",
        description:
          "Témoignages d'étudiants ayant traversé des difficultés et qui partagent leur parcours de guérison.",
      },
      {
        time: "Jeudi 06/02 – 09h00",
        event: "Journée du silence & méditation",
        description:
          "Une journée dédiée à la réflexion intérieure avec des séances de méditation guidées toutes les 2 heures.",
      },
      {
        time: "Vendredi 07/02 – 18h00",
        event: "Soirée de clôture & bilan",
        description:
          "Bilan de la semaine, présentation des ressources disponibles et cocktail de networking.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&q=80",
      "https://images.unsplash.com/photo-1522493152489-df4e799d70da?w=400&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
      "https://images.unsplash.com/photo-1517559469138-a4cc30b04971?w=400&q=80",
    ],
    stats: [
      { value: "580+", label: "Participants attendus" },
      { value: "12", label: "Ateliers prévus" },
      { value: "8", label: "Experts invités" },
      { value: "5", label: "Jours d'événement" },
    ],
    team: [
      { name: "Clara Dupont", role: "Coordinatrice principale", initials: "CD" },
      { name: "Maxime Renard", role: "Logistique", initials: "MR" },
      { name: "Sophie Amara", role: "Communication", initials: "SA" },
      { name: "Lucas Petit", role: "Design & Visuels", initials: "LP" },
    ],
  },
  {
    id: 2,
    title: "Campus vert",
    status: "À venir",
    tagColor: "green",
    campus: "Hearst",
    excerpt: "Initiative écologique pour réduire notre empreinte carbone.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80",
    publishDate: "01/02/2025",
    organizer: "Club Environnement",
    location: "Espaces verts du campus & Salle des ateliers",
    description:
      "Campus Vert est une initiative écologique ambitieuse qui vise à réduire l'empreinte carbone de notre campus d'au moins 30% en 2025. Le projet regroupe des actions concrètes : mise en place de points de compost, installation de panneaux solaires sur les bâtiments principaux, sensibilisation aux gestes zéro déchét, et la création d'un jardin participatif. Cette initiative est le résultat d'un engagement collectif entre étudiants, enseignants et administration.",
    programme: [
      {
        time: "Samedi 15/03 – 08h30",
        event: "Journée nettoyage du campus",
        description:
          "Grande opération de nettoyage collective avec tri des déchets et sensibilisation aux gestes écologiques.",
      },
      {
        time: "Lundi 17/03 – 10h00",
        event: "Inauguration du jardin participatif",
        description:
          "Ouverture officielle du jardin avec un atelier de plantation pour tous les volontaires.",
      },
      {
        time: "Mercredi 19/03 – 14h00",
        event: "Conférence : Énergie renouvelable",
        description:
          "Présentation du projet d'installation de panneaux solaires et impact attendu sur la consommation.",
      },
      {
        time: "Vendredi 21/03 – 16h00",
        event: "Marché local & bio",
        description:
          "Marché organisé avec des producteurs locaux pour encourager une alimentation durable.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518774219225-1894de6c34d1?w=400&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
      "https://images.unsplash.com/photo-1441309983176-3cadeeac7f4c?w=400&q=80",
      "https://images.unsplash.com/photo-1518536317-3e3d7fd7b6bc?w=400&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80",
    ],
    stats: [
      { value: "340+", label: "Volontaires inscrits" },
      { value: "30%", label: "Réduction carbone cible" },
      { value: "4", label: "Événements planifiés" },
      { value: "2", label: "Partenaires locaux" },
    ],
    team: [
      { name: "Amina Sellami", role: "Présidente du club", initials: "AS" },
      { name: "Kevin Moreau", role: "Coordinateur logistique", initials: "KM" },
      { name: "Jade Li", role: "Comm & Réseaux sociaux", initials: "JL" },
    ],
  },
  {
    id: 3,
    title: "Festival inter-campus",
    status: "Terminé",
    tagColor: "orange",
    campus: "Timmins",
    excerpt: "Un grand rassemblement culturel réunissant plus de 800 étudiants.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=80",
    publishDate: "01/02/2025",
    organizer: "BDE – Bureau des Étudiants",
    location: "Place centrale du campus & Gymnase principal",
    description:
      "Le Festival Inter-Campus a été un événement culturel historique réunissant plus de 800 étudiants provenant de 5 campus différents. Pendant deux jours, les participants ont pu profiter de concerts en plein air, de ateliers artistiques, de shows de comédie et d'expositions de projets étudiant. Le festival a été un succès considérable, avec un taux de satisfaction de 94% parmi les attendees et une couverture médiatique nationale.",
    programme: [
      {
        time: "Samedi 10h00",
        event: "Ouverture du festival",
        description:
          "Discours d'ouverture, présentation du programme et première série de stands culturels.",
      },
      {
        time: "Samedi 13h00",
        event: "Concerts & Performances",
        description:
          "3 groupes musicaux étudiant se sont succédé sur la scène principale devant plus de 500 personnes.",
      },
      {
        time: "Samedi 17h00",
        event: "Ateliers artistiques",
        description:
          "Ateliers de peinture, sculpture et photographie ouverts à tous les niveaux.",
      },
      {
        time: "Dimanche 09h00",
        event: "Exposition de projets",
        description:
          "Les étudiants ont présenté leurs projets innovants devant un jury composé de professionnels.",
      },
      {
        time: "Dimanche 16h00",
        event: "Cérémonie de clôture",
        description:
          "Remise des prix, bilan du festival et promesse de la prochaine édition.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
      "https://images.unsplash.com/photo-1470243482013-51b35fa7d089?w=400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
      "https://images.unsplash.com/photo-1517547820940-7a08e5e3fd16?w=400&q=80",
      "https://images.unsplash.com/photo-1491951392869-31898d8b0d8e?w=400&q=80",
    ],
    stats: [
      { value: "832", label: "Participants" },
      { value: "94%", label: "Taux de satisfaction" },
      { value: "5", label: "Campus impliqués" },
      { value: "15", label: "Ateliers animés" },
    ],
    team: [
      { name: "Noah Bernard", role: "Président du BDE", initials: "NB" },
      { name: "Léa Fontaine", role: "Directrice artistique", initials: "LF" },
      { name: "Hugo Martin", role: "Responsable sécurité", initials: "HM" },
      { name: "Camille Roux", role: "Trésorière", initials: "CR" },
      { name: "Ethan Dubois", role: "Scénographie", initials: "ED" },
    ],
  },
];

export const allMembers = [
  // 2024-2025
  {
    id: 1,
    name: "Sophie Martin",
    role: "Présidente",
    year: 2024,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    tags: "body.filters.kapuskasing",
    highlight: true,
    bio:
      "Sophie a dirigé l'association avec passion et détermination, initiant plusieurs projets innovants pour améliorer la vie étudiante sur le campus.",
    achievements: [
      "Organisation du premier Festival Inter-Campus (800+ participants)",
      "Augmentation de 40% du budget de l'association",
      "Mise en place d'un programme de mentorat étudiant",
      "Création de 5 nouveaux partenariats avec des entreprises locales",
    ],
    skills: ["Gestion de projet", "Communication", "Négociation", "Stratégie"],
    quote:
      "Être présidente m'a appris que l'impact vient de l'écoute et de l'action collective.",
    email: "sophie.martin@campus.edu",
    linkedin: "https://linkedin.com/in/sophiemartin",
  },
  {
    id: 2,
    name: "Lucas Dubois",
    role: "Vice-Président",
    year: 2024,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    tags: "body.filters.hearst",
    bio:
      "Lucas a supervisé la gestion administrative et financière de l'association, assurant une transparence totale et une optimisation des ressources.",
    achievements: [
      "Restructuration du système comptable de l'association",
      "Obtention d'une subvention de 15 000€ de la région",
      "Création d'un tableau de bord financier en temps réel",
      "Organisation de 12 événements budgétairement équilibrés",
    ],
    skills: ["Gestion financière", "Administration", "Planification", "Excel"],
    quote: "La rigueur financière permet la créativité dans les projets.",
    email: "lucas.dubois@campus.edu",
    linkedin: "https://linkedin.com/in/lucasdubois",
  },
  {
    id: 3,
    name: "Emma Leroy",
    role: "Secrétaire Générale",
    year: 2024,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    tags: "body.filters.kapuskasing",
    bio:
      "Emma a géré toute la communication interne et externe de l'association avec professionnalisme et créativité.",
    achievements: [
      "Refonte complète du site web de l'association",
      "Croissance de 200% de la communauté Instagram (5000+ followers)",
      "Création d'une newsletter mensuelle (1200 abonnés)",
      "Rédaction de 30+ communiqués de presse",
    ],
    skills: ["Rédaction", "Réseaux sociaux", "Design graphique", "Relations presse"],
    email: "emma.leroy@campus.edu",
  },
  {
    id: 4,
    name: "Maxime Bernard",
    role: "Trésorier",
    year: 2024,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    tags: "body.filters.timmins",
    bio:
      "Maxime a assuré une gestion rigoureuse des finances avec des rapports mensuels détaillés pour tous les membres.",
    achievements: [
      "Zéro déficit sur l'année fiscale",
      "Création d'un fonds d'urgence de 5000€",
      "Négociation de tarifs préférentiels avec 8 fournisseurs",
      "Formation de 15 étudiants à la gestion budgétaire",
    ],
    skills: ["Comptabilité", "Budget", "Audit", "Négociation"],
    email: "maxime.bernard@campus.edu",
  },

  // 2023-2024
  {
    id: 5,
    name: "Clara Fontaine",
    role: "Présidente",
    year: 2023,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80",
    tags: "body.filters.timmins",
    highlight: true,
    bio:
      "Clara a transformé l'association en lançant des initiatives écologiques et en modernisant les processus internes.",
    achievements: [
      "Lancement du projet Campus Vert (réduction de 30% de l'empreinte carbone)",
      "Digitalisation complète des processus administratifs",
      "Organisation de 18 événements majeurs",
      "Mise en place d'un système de vote électronique",
    ],
    skills: ["Transformation digitale", "Écologie", "Leadership", "Innovation"],
    quote: "Chaque petit geste écologique compte pour construire le campus de demain.",
    email: "clara.fontaine@campus.edu",
    linkedin: "https://linkedin.com/in/clarafontaine",
  },
  {
    id: 6,
    name: "Thomas Petit",
    role: "Vice-Président",
    year: 2023,
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&q=80",
    tags: "body.filters.kapuskasing",
    bio:
      "Thomas a développé un réseau solide de partenaires et coordonné tous les événements majeurs de l'année.",
    achievements: [
      "Signature de 12 nouveaux partenariats stratégiques",
      "Coordination de la Semaine d'Intégration (900 participants)",
      "Création d'un programme de sponsors récurrents",
      "Organisation du premier Hackathon étudiant",
    ],
    skills: ["Networking", "Négociation", "Event Management", "Partenariats"],
    email: "thomas.petit@campus.edu",
  },
  {
    id: 7,
    name: "Julie Moreau",
    role: "Responsable Communication",
    year: 2023,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    tags: "body.filters.hearst",
    bio:
      "Julie a révolutionné l'identité visuelle de l'association avec des campagnes créatives qui ont marqué les esprits.",
    achievements: [
      "Refonte de la charte graphique de l'association",
      "Campagne virale #NotreVoixCampus (100K+ impressions)",
      "Création de 50+ visuels pour les réseaux sociaux",
      "Prix de la meilleure communication étudiante régionale",
    ],
    skills: ["Photoshop", "Illustrator", "Marketing digital", "Branding"],
    email: "julie.moreau@campus.edu",
  },

  // 2022-2023
  {
    id: 8,
    name: "Antoine Roux",
    role: "Président",
    year: 2022,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    tags: "body.filters.hearst",
    highlight: true,
    bio:
      "Antoine a œuvré pour une association plus inclusive et accessible, en créant des programmes pour tous les profils étudiants.",
    achievements: [
      "Programme d'aide aux étudiants en difficulté (150 bénéficiaires)",
      "Création du Fonds Solidarité Étudiante (8000€ distribués)",
      "Mise en place d'ateliers de bien-être mental",
      "Augmentation de 35% de la participation étudiante",
    ],
    skills: ["Empathie", "Inclusion", "Gestion de crise", "Médiation"],
    quote: "Une association forte est une association qui n'oublie personne.",
    email: "antoine.roux@campus.edu",
    linkedin: "https://linkedin.com/in/antoineroux",
  },
  {
    id: 9,
    name: "Léa Girard",
    role: "Secrétaire Générale",
    year: 2022,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    tags: "body.filters.timmins",
    bio:
      "Léa a structuré toute la documentation de l'association et créé des processus clairs pour faciliter le travail de tous.",
    achievements: [
      "Création d'un manuel de procédures complet (120 pages)",
      "Archivage numérique de 10 ans d'historique de l'association",
      "Mise en place d'un CRM pour la gestion des membres",
      "Organisation de 24 réunions de comité productives",
    ],
    skills: ["Documentation", "Gestion de projet", "Archivage", "Process"],
    email: "lea.girard@campus.edu",
  },

  // 2021-2022
  {
    id: 10,
    name: "Hugo Laurent",
    role: "Président",
    year: 2021,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80",
    tags: "body.filters.kapuskasing",
    highlight: true,
    bio:
      "Hugo a dirigé l'association pendant la période post-COVID, adaptant tous les événements au contexte sanitaire.",
    achievements: [
      "Transition réussie vers des événements hybrides (présentiel + virtuel)",
      "Maintien de l'engagement étudiant malgré les restrictions",
      "Organisation de 15 webinaires de qualité",
      "Création d'une plateforme de networking en ligne",
    ],
    skills: ["Adaptabilité", "Gestion de crise", "Digital", "Résilience"],
    quote: "Les contraintes sont des opportunités déguisées.",
    email: "hugo.laurent@campus.edu",
    linkedin: "https://linkedin.com/in/hugolaurent",
  },
  {
    id: 11,
    name: "Camille Dupont",
    role: "Vice-Présidente",
    year: 2021,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80",
    tags: "body.filters.kapuskasing",
    bio:
      "Camille a piloté la transformation digitale de l'association avec des outils modernes et efficaces.",
    achievements: [
      "Implémentation de Slack pour la communication interne",
      "Création d'une app mobile pour les membres (2000+ téléchargements)",
      "Automatisation de 60% des tâches administratives",
      "Formation de 50 membres aux outils digitaux",
    ],
    skills: ["Product Management", "UX/UI", "Automation", "Formation"],
    email: "camille.dupont@campus.edu",
  },

  // 2020-2021
  {
    id: 12,
    name: "Nicolas Blanc",
    role: "Président",
    year: 2020,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&q=80",
    tags: "body.filters.kapuskasing",
    highlight: true,
    bio:
      "Nicolas a piloté l'association durant la première année de COVID, maintenant le lien social malgré la distance.",
    achievements: [
      "Création d'une cellule de soutien psychologique étudiant",
      "Organisation de 30+ événements en ligne",
      "Distribution de 500 colis alimentaires aux étudiants",
      "Maintien de la cohésion malgré le confinement",
    ],
    skills: ["Empathie", "Leadership de crise", "Solidarité", "Communication"],
    quote: "La distance physique ne doit jamais créer une distance humaine.",
    email: "nicolas.blanc@campus.edu",
    linkedin: "https://linkedin.com/in/nicolasblanc",
  },
  {
    id: 13,
    name: "Sarah Cohen",
    role: "Trésorière",
    year: 2020,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80",
    tags: "body.filters.hearst",
    bio:
      "Sarah a maintenu la stabilité financière de l'association malgré l'annulation de nombreux événements payants.",
    achievements: [
      "Réduction des coûts opérationnels de 45%",
      "Négociation de reports de paiement avec les fournisseurs",
      "Création d'un budget d'urgence COVID",
      "Bilan financier positif malgré la crise",
    ],
    skills: ["Gestion de crise", "Finance", "Négociation", "Optimisation"],
    email: "sarah.cohen@campus.edu",
  },
  {
    id: 14,
    name: "Alexandre Martin",
    role: "Secrétaire Général",
    year: 2020,
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&q=80",
    tags: "body.filters.timmins",
    bio:
      "Alexandre a assuré la communication continue avec tous les membres via des canaux digitaux innovants.",
    achievements: [
      "Lancement d'un podcast étudiant hebdomadaire (25 épisodes)",
      "Création d'une newsletter quotidienne durant le confinement",
      "Mise en place de 'Virtual Coffee Breaks' (500+ participants)",
      "Animation de la communauté sur Discord (800+ membres)",
    ],
    skills: ["Podcast", "Community Management", "Storytelling", "Discord"],
    email: "alexandre.martin@campus.edu",
  },
];