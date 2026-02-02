<template>
  <div class="alumni-page">
    <!-- HERO SECTION -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ t("body.detail_formers.title") }}</h1>
        <p class="hero-subtitle">
          <StarOutlined class="fix-icon" />
          {{ t("body.detail_formers.subtitle") }}
        </p>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <div class="container py-5">
      <!-- YEAR SELECTOR -->
      <div class="year-selector">
        <button
          v-for="year in years"
          :key="year.value"
          :class="['year-btn', { active: selectedYear === year.value }]"
          @click="selectedYear = year.value"
        >
          {{ year.label }}
        </button>
      </div>

      <!-- MEMBERS GRID -->
      <transition name="fade" mode="out-in">
        <div :key="selectedYear" class="members-section">
          <div class="section-header">
            <h2 class="section-title">
              {{ t("body.detail_formers.comite") }} {{ selectedYear }}-{{
                selectedYear + 1
              }}
            </h2>
            <span class="member-count">{{ currentMembers.length }} membres</span>
          </div>

          <div class="members-grid">
            <div
              v-for="member in currentMembers"
              :key="member.id"
              class="member-card"
              @click="openMemberDetail(member)"
            >
              <div class="member-avatar-wrapper">
                <img :src="member.avatar" :alt="member.name" class="member-avatar" />
                <div class="member-badge" v-if="member.highlight">⭐</div>
              </div>
              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
                <div class="member-tags">
                  <span
                    :class="
                      t(`${member.tags}`).includes(campusValue?.KAPUSKASING)
                        ? 'member-tag-kap font-adjust'
                        : t(`${member.tags}`).includes(campusValue?.HEARST)
                        ? 'member-tag-hearst font-adjust'
                        : 'member-tag-timmins font-adjust'
                    "
                  >
                    <EnvironmentOutlined class="fix-icon tag-dot" />
                    {{ t(`${member.tags}`) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- MODAL DETAIL -->
      <div class="modal-overlay" v-if="selectedMember" @click.self="closeMemberDetail">
        <div class="modal-detail">
          <button class="modal-close" @click="closeMemberDetail">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="modal-body">
            <div class="modal-header">
              <img
                :src="selectedMember.avatar"
                :alt="selectedMember.name"
                class="modal-avatar"
              />
              <div class="modal-header-info">
                <h2 class="modal-name">{{ selectedMember.name }}</h2>
                <p class="modal-role">{{ selectedMember.role }}</p>
                <p class="modal-year">
                  Mandat {{ selectedMember.year }}-{{ selectedMember.year + 1 }}
                </p>
              </div>
            </div>

            <div class="modal-content">
              <div class="detail-section">
                <h3 class="detail-title">Biographie</h3>
                <p class="detail-text">{{ selectedMember.bio }}</p>
              </div>

              <div class="detail-section">
                <h3 class="detail-title">Réalisations principales</h3>
                <ul class="achievements-list">
                  <li v-for="(achievement, i) in selectedMember.achievements" :key="i">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { allMembers, campusValue, years } from "~/core/constant";

const { t } = useI18n();

const selectedYear = ref(2024);
const selectedMember = ref(null);

// ─── COMPUTED ────────────────────────────────────────
const currentMembers = computed(() => {
  return allMembers.filter((m) => m.year === selectedYear.value);
});

// ─── METHODS ─────────────────────────────────────────
function openMemberDetail(member) {
  selectedMember.value = member;
  document.body.style.overflow = "hidden";
}

function closeMemberDetail() {
  selectedMember.value = null;
  document.body.style.overflow = "";
}
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
     HERO SECTION
     ═══════════════════════════════════════════════════════ */
.hero-section {
  background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 800 !important;
  margin: 0 0 46px;
  padding-top: 95px;
  letter-spacing: -0.5px;
  font-weight: var(--font-display);
}

.hero-subtitle {
  font-size: 1.15rem;
  opacity: 0.92;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: white;
  font-weight: var(--font-display) !important;
}

/* ═══════════════════════════════════════════════════════
     YEAR SELECTOR
     ═══════════════════════════════════════════════════════ */
.year-selector {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  font-weight: var(--font-display) !important;
  color: var(--dark-bg);
}

.year-btn {
  padding: 12px 28px;
  border-radius: 50px;
  border: 2px solid var(--border);
  background: #fff;
  color: var(--text-muted);
  font-weight: var(--font-display) !important;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.year-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
}

.year-btn.active {
  background: var(--primary-color);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
}

/* ═══════════════════════════════════════════════════════
     SECTION HEADER
     ═══════════════════════════════════════════════════════ */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.section-title {
  font-size: 1.85rem !important;
  font-weight: 700 !important;
  color: var(--dark-bg);
  font-weight: 700 !important;
  font-family: var(--font-display) !important;
  margin: 0;
}

.member-count {
  background: var(--campus-blue);
  color: white;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
}

/* ═══════════════════════════════════════════════════════
     MEMBERS GRID
     ═══════════════════════════════════════════════════════ */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.member-card {
  background: #fff;
  border: 1px solid rgba(128, 128, 128, 0.248);
  border-radius: 20px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.35s ease;
}

.member-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.15);
}

.member-avatar-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 16px;
}

.member-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary);
}

.member-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 28px;
  height: 28px;
  background: #fbbf24;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.member-info {
  text-align: center;
}

.member-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 6px;
}

.member-role {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0 0 12px;
  font-weight: 500;
}

.member-tags {
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
}

.member-tag-kap {
  background: var(--campus-blue);
  color: white;
  font-weight: var(--font-display) !important;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
}

.member-tag-timmins {
  background: var(--campus-yellow);
  color: white;
  font-weight: var(--font-display) !important;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
}

.member-tag-hearst {
  background: var(--campus-green);
  color: white;
  padding: 4px 12px;
  font-weight: var(--font-display) !important;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
}

/* ═══════════════════════════════════════════════════════
     MODAL
     ═══════════════════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 10, 40, 0.65);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

.modal-detail {
  position: relative;
  width: 100%;
  max-width: 700px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 40px 80px rgba(30, 27, 75, 0.3);
  animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}

.modal-body {
  padding: 40px;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--border);
}

.modal-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary);
  flex-shrink: 0;
}

.modal-header-info {
  flex: 1;
}

.modal-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 6px;
}

.modal-role {
  font-size: 1rem;
  color: var(--primary);
  font-weight: 600;
  margin: 0 0 4px;
}

.modal-year {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.detail-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.detail-title::before {
  content: "";
  width: 4px;
  height: 20px;
  background: var(--primary);
  border-radius: 2px;
}

.detail-text {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
}

.achievements-list {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}

.achievements-list li {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 10px;
  position: relative;
  padding-left: 24px;
}

.achievements-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: 700;
  font-size: 16px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-badge {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
}

.member-quote {
  font-size: 15px;
  font-style: italic;
  color: var(--text-primary);
  margin: 0;
  padding: 20px;
  background: var(--bg-soft);
  border-left: 4px solid var(--primary);
  border-radius: 8px;
  line-height: 1.7;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--bg-soft);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s;
}

.contact-link:hover {
  background: var(--primary);
  color: #fff;
  transform: translateX(4px);
}

.contact-icon {
  font-size: 18px;
}

/* ═══════════════════════════════════════════════════════
     TRANSITIONS
     ═══════════════════════════════════════════════════════ */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ═══════════════════════════════════════════════════════
     RESPONSIVE
     ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 10px;
    padding-top: 90px;
    letter-spacing: -0.5px;
  }

  .member-role {
  font-size: 16px;
  color: var(--text-muted);
  margin: 0 0 12px;
  font-weight: 500;
}

.font-adjust{
    font-size: 1rem;
}

  .section-title {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: var(--dark-bg);
  font-weight: 700 !important;
  font-family: var(--font-display) !important;
  margin: 0;
}


  .hero-subtitle {
    font-size: 1rem;
  }

  .members-grid {
    grid-template-columns: 1fr;
  }

  .modal-body {
    padding: 28px 20px;
  }

  .modal-header {
    flex-direction: column;
    text-align: center;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
