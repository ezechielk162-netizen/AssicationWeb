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
