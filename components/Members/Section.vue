<template>
  <div class="container py-5">
    <!-- FILTRES -->
    <div class="d-flex gap-3 justify-content-center mb-5 flex-wrap">
      <a-button
        v-for="filter in filters"
        :key="filter"
        :type="activeFilter === filter ? 'primary' : 'default'"
        shape="round"
        size="large"
        @click="activeFilter = t(filter)"
      >
        {{ t(filter) }}
      </a-button>
    </div>

    <!-- CARDS -->
    <div class="row g-4">
      <div
        v-for="member in filteredMembers"
        :key="member.id"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <a-card class="member-card">
          <!-- HEADER -->
          <div class="card-header">
            <div class="w-100">
              <img :src="member.photo" alt="photo membre" />
            </div>
          </div>

          <!-- BODY -->
          <h4 class="mt-4 mb-1 team-name">{{ member.name }}</h4>
          <p class="role">{{ member.role }}</p>
          <div class="pb-2">
            <a-tag class="campus-tag" :style="{ backgroundColor: member.background }">
              <span class="tag-dot"></span>
              {{ member.campus }}
            </a-tag>
          </div>
          <p class="description">{{ member.description }}</p>

          <!-- SOCIALS -->
          <div class="socials d-flex gap-3 mt-4">
            <div v-for="social in member.socials" :key="social" class="social-icon">
              <component :is="getIcon(social)" />
            </div>
          </div>

          <!-- STATS -->
          <div class="stats-divider"></div>

          <div class="stats d-flex justify-content-between text-center">
            <div
              v-for="(stat, index) in member.stats"
              :key="index"
              class="stat-item flex-fill"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { filters } from "~/core/constant";
const { t } = useI18n();

import {
  LinkedinOutlined,
  MailOutlined,
  InstagramOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons-vue";

/* FILTRE */
const activeFilter = ref("Tous les membres");

/* FILTRAGE */
const filteredMembers = computed(() => {
  if (activeFilter.value === "Tous les membres") {
    return members.value;
  }
  return members.value.filter((m) => m.campus === activeFilter.value);
});

/* ICONS */
const getIcon = (name) => {
  const icons = {
    linkedin: LinkedinOutlined,
    mail: MailOutlined,
    instagram: InstagramOutlined,
    twitter: TwitterOutlined,
    github: GithubOutlined,
  };
  return icons[name];
};

/* MEMBRES */
const members = ref([
  {
    id: 1,
    name: "Hans Edoh Daye",
    role: "Président de l'Association",
    campus: "Campus de Hearst",
    color: "white",
    background: "#10b981",
    photo: "https://i.pravatar.cc/246?img=47",
    initials: "SD",
    description:
      "Étudiante en administration, Sophie est passionnée par l'engagement étudiant.",
    socials: ["linkedin", "mail", "instagram"],
    stats: [
      { value: "3", label: "ANNÉES" },
      { value: "45+", label: "PROJETS" },
    ],
  },
  {
    id: 2,
    name: "Marc Leblanc",
    role: "Vice-président",
    campus: "Campus de Kapuskasing",
    photo: "https://i.pravatar.cc/246?img=49",
    color: "blue",
    initials: "ML",
    description: "Responsable des partenariats et des collaborations stratégiques.",
    socials: ["linkedin", "mail"],
    stats: [
      { value: "2", label: "ANNÉES" },
      { value: "25+", label: "PARTENAIRES" },
    ],
  },
  {
    id: 3,
    name: "Camille Roy",
    role: "Secrétaire Générale",
    campus: "Campus de Timmins",
    photo: "https://i.pravatar.cc/246?img=55",
    color: "gold",
    initials: "CR",
    description: "Organisée et méticuleuse, elle coordonne les activités.",
    socials: ["linkedin", "mail", "twitter"],
    stats: [
      { value: "2", label: "ANNÉES" },
      { value: "100+", label: "RÉUNIONS" },
    ],
  },
  {
    id: 4,
    name: "Alexandre Tremblay",
    role: "Trésorier",
    campus: "Campus de Kapuskasing",
    color: "blue",
    initials: "AT",
    description: "Étudiant en informatique, il organise des événements technologiques.",
    socials: ["github", "mail"],
    stats: [
      { value: "1", label: "ANNÉE" },
      { value: "15+", label: "ÉVÉNEMENTS" },
    ],
  },
  {
    id: 5,
    name: "Alexandre Tremblay",
    role: "Responsable général des communications ",
    campus: "Campus de Hearst",
    color: "green",
    initials: "AT",
    description: "Étudiant en informatique, il organise des événements technologiques.",
    socials: ["github", "mail"],
    stats: [
      { value: "1", label: "ANNÉE" },
      { value: "15+", label: "ÉVÉNEMENTS" },
    ],
  },
]);
</script>

<style scoped>
.member-card {
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.35s ease;
  cursor: pointer;
  height: 100%;
}

/* Barre bleue en haut */
.member-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  transition: width 0.4s ease;
}

.member-card:hover::before {
  width: 100%;
}

.member-card:hover {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.08);
}
.member-card-kap:hover {
  /* ⬅️ comme demandé */
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.25);
}

.member-card-hearst:hover {
  /* ⬅️ comme demandé */
  box-shadow: 0 20px 50px rgba(92, 221, 146, 0.25);
}

.member-card-timmins:hover {
  /* ⬅️ comme demandé */
  box-shadow: 0 20px 50px rgba(92, 221, 146, 0.25);
}

.social-icon:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-6px) scale(1.05);
}

.initials {
  font-size: 96px; /* PLUS GRAND */
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 4px;
}

/* CAMPUS TAG */
.campus-tag {
  top: 1rem;
  right: 1rem;
  z-index: 3; /* 🔥 IMPORTANT */
  border-radius: 20px;
  gap: 0.5rem;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: var(--font-display) !important;
  padding: 4px 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  font-weight: 600;
}

/* DOT DANS LE TAG */
.tag-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  margin-right: 8px;
}

/* couleurs selon member.color */

/* BODY */
.role {
  color: var(--campus-green) !important;
  font-family: var(--font-body) !important;
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.description {
  font-size: 15px;
  color: #6b7280;
  margin-bottom: 0;
}

/* SOCIALS */
.socials {
  margin-top: 20px;
}

.social-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  transition: all 0.3s ease;
}

/* STATS */
.stats-divider {
  margin: 28px 0 18px;
  height: 1px;
  background: #e5e7eb;
}

.stat-item {
  transition: transform 0.3s ease;
}

.member-card:hover .stat-item {
  transform: translateY(-4px);
}

.stat-value {
  font-size: 28px;
  font-weight: 800;
  color: #2563eb;
}

.stat-label {
  font-size: 12px;
  letter-spacing: 1.2px;
  color: #6b7280;
}

.team-name {
  font-family: var(--font-display) !important;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

/* HEADER */
.card-header {
  height: 300px; /* ⬅️ plus grand */
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 0;
}

/* Wrapper image */
.card-header .w-100 {
  width: 100%;
  height: 100%;
  position: relative;
}

/* IMAGE FULL COVER */
.card-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


@media (max-width: 768px) {

    .member-card {
  border-radius: 24px;
  overflow: hidden;
  border-color: #d0d5dc;
  transition: all 0.35s ease;
  cursor: pointer;
  height: 100%;
}

.campus-tag {
  top: 1rem;
  right: 1rem;
  z-index: 3; /* 🔥 IMPORTANT */
  border-radius: 20px;
  gap: 0.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-display) !important;
  padding: 4px 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  font-weight: 600;
}

.role {
  color: var(--campus-green) !important;
  font-family: var(--font-body) !important;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
    }
</style>
