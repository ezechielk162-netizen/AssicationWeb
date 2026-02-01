<template>
  <div class="container py-5">
    <!-- FILTRES -->
    <div
      ref="target"
      class="d-flex gap-3 justify-content-center mb-5 flex-wrap pill-fade"
      :class="{ show: isVisible }"
    >
      <a-button
        v-for="filter in filters"
        :key="filter"
        :type="activeFilter === filter ? 'primary' : 'default'"
        :class="
          activeFilter === t(filter) && t(filter).includes(t('body.filters.kapuskasing'))
            ? 'button-style filter-active'
            : activeFilter === t(filter) && t(filter).includes(t('body.filters.hearst'))
            ? 'button-style filter-active-hearst'
            : activeFilter === t(filter) && t(filter).includes(t('body.filters.timmins'))
            ? 'button-style filter-active-timmins'
            : activeFilter === t(filter) && t(filter).includes(t('body.filters.all'))
            ? 'button-style filter-active-all'
            : ''
        "
        shape="round"
        size="large"
        @click="activeFilter = t(filter)"
      >
        {{ t(filter) }}
      </a-button>
    </div>

    <!-- CARDS -->
    <TransitionGroup class="row g-4" name="fade-slide" mode="out-in" tag="div">
      <div
        v-for="member in filteredMembers"
        :key="member.id"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <a-card
          :class="
            member.campus.includes(campusValue?.HEARST)
              ? 'member-card-hearst'
              : member.campus.includes(campusValue?.KAPUSKASING)
              ? 'member-card-kap'
              : 'member-card-timmins'
          "
        >
          <!-- HEADER -->
          <div class="card-header">
            <div class="w-100">
              <img :src="member.photo" alt="photo membre" />
            </div>
          </div>

          <!-- BODY -->
          <h4 class="mt-4 mb-1 team-name">{{ member.name }}</h4>
          <p
            class="role"
            :style="{
              color: member.campus.includes(campusValue?.HEARST)
                ? 'var(--campus-green)'
                : member.campus.includes(campusValue?.KAPUSKASING)
                ? 'var(--campus-blue)'
                : 'var(--campus-yellow)',
            }"
          >
            {{ member.role }}
          </p>
          <div class="pb-2">
            <a-tag class="campus-tag" :style="{ backgroundColor: member.background }">
              <EnvironmentOutlined class="fix-icon tag-dot" />
              {{ member.campus }}
            </a-tag>
          </div>
          <p class="description">{{ member.description }}</p>

          <!-- SOCIALS -->
          <div class="socials d-flex gap-3 mt-4">
            <div
              v-for="social in member.socials"
              :key="social"
              :class="
                member.campus.includes(campusValue?.HEARST)
                  ? 'social-icon-hearst'
                  : member.campus.includes(campusValue?.KAPUSKASING)
                  ? 'social-icon'
                  : 'social-icon-timmins'
              "
            >
              <component :is="getIcon(social)" />
            </div>
          </div>

          <!-- STATS -->
          <div class="stats-divider"></div>

          <div
            v-for="(stat, index) in member.stats"
            :key="index"
            class="flex-fill stats d-flex justify-content-around text-center"
            :style="{
              border: member.campus.includes(campusValue?.HEARST)
                ? '2px solid var(--campus-green)'
                : member.campus.includes(campusValue?.KAPUSKASING)
                ? '2px solid var(--campus-blue)'
                : '2px solid var(--campus-yellow)',
            }"
          >
            <div
              class="stat-label"
              :style="{
                color: member.campus.includes(campusValue?.HEARST)
                  ? 'var(--campus-green)'
                  : member.campus.includes(campusValue?.KAPUSKASING)
                  ? 'var(--campus-blue)'
                  : 'var(--campus-yellow)',
              }"
            >
              {{ stat.label }}
            </div>
            <div
              class="stat-label"
              :style="{
                color: member.campus.includes(campusValue?.HEARST)
                  ? 'var(--campus-green)'
                  : member.campus.includes(campusValue?.KAPUSKASING)
                  ? 'var(--campus-blue)'
                  : 'var(--campus-yellow)',
              }"
            >
              {{ stat.value }}
            </div>
          </div>
        </a-card>
      </div>
    </TransitionGroup>

    <perso-div :padding-value="4" class="text-center">
        <a-button size="large" class="outline-slide-team"><UserAddOutlined class="fix-icon"/> Rejoindre notre équipe </a-button>
    </perso-div>

    <!-- Voir si je met les trucs en haut des cards sans hover ca sera joli ou pas -->

  </div>
</template>

<script setup>
import { filters, members, campusValue } from "~/core/constant";
const { t } = useI18n();

const isVisible = ref(false);
const target = ref(null);

let observer;

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

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  if (target.value) observer.observe(target.value);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.member-card-kap {
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.35s ease;
  cursor: pointer;
  height: 100%;
}

/* Barre bleue en haut */
.member-card-kap::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  transition: width 0.4s ease;
}

.member-card-kap:hover {
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.25);
}

.member-card-kap:hover::before {
  width: 100%;
  box-shadow: 0 20px 50px rgba(37, 99, 235, 25);
}

.member-card-hearst {
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.35s ease;
  cursor: pointer;
  height: 100%;
}

/* Barre bleue en haut */
.member-card-hearst::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, #10b981, #34d399);
  transition: width 0.4s ease;
}

.member-card-hearst:hover {
  box-shadow: 0 20px 50px rgba(92, 221, 146, 0.25);
}

.member-card-hearst:hover::before {
  width: 100%;
  box-shadow: 0 20px 50px rgba(37, 99, 235, 25);
}

.member-card-timmins {
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.35s ease;
  cursor: pointer;
  height: 100%;
}

/* Barre bleue en haut */
.member-card-timmins::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
  transition: width 0.4s ease;
}

.member-card-timmins:hover {
  box-shadow: 0 20px 50px rgba(221, 204, 92, 0.25);
}

.member-card-timmins:hover::before {
  width: 100%;
  box-shadow: 0 20px 50px rgba(92, 221, 146, 0.25);
}

.social-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #2563eb;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-6px) scale(1.05);
}

.social-icon-hearst {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  color: #10b981;

  justify-content: center;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-icon-hearst:hover {
  background: #10b981;
  color: white;

  transform: translateY(-6px) scale(1.05);
}

.social-icon-timmins {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f59e0b;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-icon-timmins:hover {
  background: #f59e0b;
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
  margin-right: 4px;
}

/* couleurs selon member.color */

/* BODY */
.role {
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

/* STATS */
.stats-divider {
  margin-top: 30px;
  height: 1px;
  background: #e5e7eb;
}

.stats {
  margin: 10px;
  padding: 10px;
  border-radius: 25px;
}

.stat-value {
  font-size: 28px;
  font-weight: 800;
  color: #2563eb;
}

.stat-label {
  font-size: 0.9rem;
  letter-spacing: 1.2px;
  font-weight: 600;
  font-family: var(--font-display) !important;
}

.filter-active-all {
  background-color: var(--dark-bg) !important;
  color: white !important;
}

.filter-active {
  border-color: #60a5fa !important;
  color: #2563eb !important;
}

.filter-active-timmins {
  border-color: #fbbf24 !important;
  color: #f59e0b !important;
}

.filter-active-hearst {
  border-color: #34d399 !important;
  color: #10b981 !important;
}
.button-style {
  border-radius: 50px;
  border: 2px solid rgba(37, 99, 235, 0.2);
  background: transparent;
  color: var(--dark-bg);
  font-family: var(--font-display) !important;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-16px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(16px);
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

@media (max-width: 1024px) {
  .stat-label {
    font-size: 0.8rem;
    letter-spacing: 1.2px;
    font-weight: 600;
    font-family: var(--font-display) !important;
  }
}

@media (max-width: 768px) {
  .description {
    font-size: 15px;
    color: #6b7280;
    font-weight: 600;
    margin-bottom: 0;
  }

  .member-card-kap .member-card-hearst .member-card-timmins {
    position: relative; /* OBLIGATOIRE pour ::before */
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.35s ease;
  cursor: pointer;
  height: 100%;
  }

/* Barre bleue en haut */
.member-card-kap::before {
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%; /* visible par défaut */
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  z-index: 2;
}
.member-card-kap:focus {
  box-shadow: 0 10px 10px rgba(37, 99, 235, 0.25) !important;
}

.member-card-hearst:focus {
  box-shadow: 0 10px 10px rgba(92, 221, 146, 0.25) !important;
}

.member-card-timmins:hover {
  box-shadow: 0 10px 10px rgba(221, 204, 92, 0.25) !important;
}

.member-card-hearst::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, #10b981, #34d399);
  z-index: 2;
}

.member-card-timmins::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
  z-index: 2;
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
    font-family: var(--font-body) !important;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
}
</style>
