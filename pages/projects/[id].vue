<template>
  <div class="details-page" v-if="project">
    <!-- HERO -->
    <div class="hero-section">
      <div class="hero-image-wrapper">
        <img :src="project.image" alt="project image" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <a-button class="back-btn" @click="goBack">
          <span class="back-icon">←</span> Retour
        </a-button>
        <h1 class="hero-title">{{ project.title }} </h1>
        <div class="hero-meta">
          <span class="meta-item">
            <span class="meta-icon">📅</span> Publié le : {{ project.publishDate }}
          </span>
          <span class="meta-item">
            <span class="meta-icon">👤</span> {{ project.organizer }}
          </span>
          <span class="meta-item">
            <span class="meta-icon">📍</span> {{ project.location }}
          </span>
        </div>
      </div>
    </div>

    <!-- BODY -->
    <div class="details-body">
      <div class="row g-5">
        <!-- LEFT: Description + Programme + Galerie -->
        <div class="col-lg-6">
          <div class="detail-section">
            <h2 class="section-title">À propos du projet</h2>
            <p class="description-text">{{ project.description }}</p>
          </div>

          <div class="detail-section">
            <h2 class="section-title">Programme</h2>
            <div class="timeline">
              <div
                v-for="(item, index) in project.programme"
                :key="index"
                class="timeline-item"
              >
                <div class="timeline-marker">
                  <div class="marker-dot"></div>
                  <div
                    class="marker-line"
                    v-if="index < project.programme.length - 1"
                  ></div>
                </div>
                <div class="timeline-content">
                  <span class="timeline-time">{{ item.time }}</span>
                  <h6 class="timeline-event">{{ item.event }}</h6>
                  <p class="timeline-desc">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h2 class="section-title">Galerie</h2>
            <div class="gallery-grid">
              <div
                v-for="(img, index) in project.gallery"
                :key="index"
                class="gallery-item"
              >
                <img :src="img" :alt="`Photo ${index + 1}`" />
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Sidebar -->
        <div class="col-lg-4">
          <div class="sidebar-card stats-card">
            <h3 class="sidebar-card-title">Chiffres clés</h3>
            <div class="stats-grid">
              <div class="stat-item" v-for="stat in project.stats" :key="stat.label">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <div class="sidebar-card team-card">
            <h3 class="sidebar-card-title">Équipe organisatrice</h3>
            <div class="team-list">
              <div class="team-member" v-for="member in project.team" :key="member.name">
                <div class="member-avatar">{{ member.initials }}</div>
                <div class="member-info">
                  <span class="member-name">{{ member.name }}</span>
                  <span class="member-role">{{ member.role }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar-card cta-card">
            <h3 class="sidebar-card-title">Vous intéressé ?</h3>
            <p class="cta-text">Rejoignez le projet et faites partie de l'aventure !</p>
            <a-button type="primary" block shape="round" class="cta-btn">
              Je participe
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Projet introuvable</h2>
    <a-button type="primary" shape="round" @click="goBack">Retour aux projets</a-button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allProjects } from "~/core/constant";


const route = useRoute();
const router = useRouter();

const goBack = () => {
  router.back();
};

const project = computed(() => {
  const id = parseInt(route.params.id);
  return allProjects.find((p) => p.id === id) || null;
});
</script>

<style scoped>

/* ─── HERO ──────────────────────────────────────────── */
.hero-section {
  position: relative;
  height: 420px;
  overflow: hidden;
}

.hero-image-wrapper {
  position: absolute;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(30, 27, 75, 0.15) 0%,
    rgba(30, 27, 75, 0.7) 60%,
    rgba(30, 27, 75, 0.92) 100%
  );
}

.hero-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px 40px 40px;
  color: #fff;
}

.back-btn {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff !important;
  border-radius: 50px;
  padding: 8px 22px;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background 0.3s;
  display: inline-flex;
  align-items: center;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.28);
}

.back-icon {
  margin-right: 6px;
  font-size: 18px;
}

.hero-tag {
  font-weight: 600;
  border-radius: 20px;
  font-size: 13px;
  margin-bottom: 14px;
  display: inline-block;
}

.hero-title {
  font-size: 2.6rem;
  font-weight: 800;
  margin: 0 0 16px;
  line-height: 1.15;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.meta-item {
  font-size: 14px;
  opacity: 0.88;
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-icon {
  font-size: 16px;
}

/* ─── BODY ──────────────────────────────────────────── */
.details-body {
  max-width: 1140px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

/* ─── SECTIONS ──────────────────────────────────────── */
.detail-section {
  margin-bottom: 44px;
}

.section-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 2.5px solid var(--accent);
  display: inline-block;
}

.description-text {
  color: var(--text-muted);
  font-size: 15.5px;
  line-height: 1.85;
  max-width: 680px;
}

/* ─── TIMELINE ──────────────────────────────────────── */
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  gap: 20px;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22px;
  flex-shrink: 0;
}

.marker-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px var(--accent);
  flex-shrink: 0;
  margin-top: 4px;
}

.marker-line {
  width: 3px;
  flex-grow: 1;
  min-height: 50px;
  background: linear-gradient(to bottom, var(--accent), #c7d2fe);
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 2px;
}

.timeline-content {
  padding-bottom: 28px;
}

.timeline-time {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  background: #eef2ff;
  padding: 3px 10px;
  border-radius: 12px;
  margin-bottom: 6px;
  letter-spacing: 0.3px;
}

.timeline-event {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 4px;
}

.timeline-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.6;
}

/* ─── GALLERY ───────────────────────────────────────── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.gallery-item {
  border-radius: 16px;
  overflow: hidden;
  height: 160px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.gallery-item:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 10px 24px rgba(79, 70, 229, 0.18);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ─── SIDEBAR CARDS ─────────────────────────────────── */
.sidebar-card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow);
  margin-bottom: 24px;
  border: 1px solid #ede9fe;
}

.sidebar-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sidebar-card-title::before {
  content: "";
  width: 4px;
  height: 20px;
  background: var(--accent);
  border-radius: 2px;
}

/* ─── STATS ─────────────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-item {
  background: var(--bg-soft);
  border-radius: 14px;
  padding: 18px 14px;
  text-align: center;
  transition: transform 0.25s;
}

.stat-item:hover {
  transform: translateY(-2px);
}

.stat-value {
  display: block;
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1.2;
}

.stat-label {
  display: block;
  font-size: 11.5px;
  color: var(--text-muted);
  margin-top: 4px;
  font-weight: 500;
}

/* ─── TEAM ──────────────────────────────────────────── */
.team-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.team-member {
  display: flex;
  align-items: center;
  gap: 14px;
}

.member-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(79, 70, 229, 0.3);
}

.member-info {
  display: flex;
  flex-direction: column;
}

.member-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.member-role {
  font-size: 12px;
  color: var(--text-muted);
}

/* ─── CTA ───────────────────────────────────────────── */
.cta-card {
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  border: none;
  color: #fff;
}

.cta-card .sidebar-card-title {
  color: #fff;
}

.cta-card .sidebar-card-title::before {
  background: #fff;
}

.cta-text {
  font-size: 13.5px;
  opacity: 0.9;
  margin: 0 0 18px;
  line-height: 1.6;
}

.cta-btn {
  background: #fff !important;
  color: var(--accent) !important;
  font-weight: 700;
  border: none;
  height: 42px;
  font-size: 14px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.not-found {
  text-align: center;
  padding: 140px 24px;
  color: var(--text-primary);
}

.not-found h2 {
  margin-bottom: 24px;
  font-size: 1.6rem;
}

@media (max-width: 768px) {
  .hero-section {
    height: 340px;
  }

  .hero-title {
    font-size: 1.85rem;
  }

  .hero-content {
    padding: 32px 22px 28px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-item {
    height: 130px;
  }

  .details-body {
  }
}
</style>
