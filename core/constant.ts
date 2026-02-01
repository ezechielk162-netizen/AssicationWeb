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

export const members = ref([
  {
    id: 1,
    name: "Marc Zukenberg",
    role: "Président de l'Association",
    campus: "Campus de Hearst",
    color: "white",
    background: "#10b981",
    photo: "https://i.pravatar.cc/246?img=68",
    initials: "SD",
    description:
      "Étudiante en administration, Sophie est passionnée par l'engagement étudiant.",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "En poste depuis :" },
      { value: "3ᵉ année", label: "Niveau scolaire :" },
    ],
  },
  {
    id: 2,
    name: "Marc Leblanc",
    role: "Vice-président",
    campus: "Campus de Kapuskasing",
    photo: "https://i.pravatar.cc/246?img=33",
    color: "blue",
    background: "#2563eb",
    initials: "ML",
    description: "Responsable des partenariats et des collaborations stratégiques.",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "En poste depuis :" },
      { value: "3ᵉ année", label: "Niveau scolaire :" },
    ],
  },
  {
    id: 3,
    name: "Camille Roy",
    role: "Secrétaire Générale",
    campus: "Campus de Timmins",
    photo: "https://i.pravatar.cc/246?img=55",
    color: "gold",
    background: "#f59e0b",
    initials: "CR",
    description: "Organisée et méticuleuse, elle coordonne les activités.",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "En poste depuis :" },
      { value: "3ᵉ année", label: "Niveau scolaire :" },
    ],
  },
  {
    id: 4,
    name: "Alexandre Tremblay",
    role: "Trésorier",
    campus: "Campus de Kapuskasing",
    color: "blue",
    background: "#2563eb",
    photo: "https://i.pravatar.cc/246?img=56",
    initials: "AT",
    description: "Étudiant en informatique, il organise des événements technologiques.",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "En poste depuis :" },
      { value: "3ᵉ année", label: "Niveau scolaire :" },
    ],
  },
  {
    id: 5,
    name: "Alexandre Tremblay",
    role: "Responsable général des communications ",
    photo: "https://i.pravatar.cc/246?img=23",
    campus: "Campus de Hearst",
    color: "green",
    background: "#10b981",
    initials: "AT",
    description: "Étudiant en informatique, il organise des événements technologiques.",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "1 année", label: "En poste depuis :" },
      { value: "3ᵉ année", label: "Niveau scolaire :" },
    ],
  },
]);

export const allProjects = [
  {
    id: 1,
    title: "Semaine de la santé mentale",
    excerpt: "Une semaine dédiée au bien-être étudiant avec ateliers et conférences.",
    status: "En cours",
    campus: "Campus de Kapuskasing",
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
    campus: "Campus de Hearst",
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
    status: "Réalisé",
    tagColor: "orange",
    campus: "Campus de Timmins",
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