<template>
  <div class="tendances-page">
    <!-- Hero Section -->
    <div class="hero-section mt-5 pb-4">
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <a-tag color="success" class="hero-badge">
          <span class="pulse-dot"></span>
          Résultats en direct
        </a-tag>
        <p class="hero-title">Tendance Électorales</p>
        <p class="hero-subtitle">
          Suivez l'évolution des votes en temps réel pour les élections étudiantes
          2024-2025
        </p>

        <div class="hero-stats">
          <div class="stat-card">
            <div class="stat-icon">
              <UsergroupDeleteOutlined />
            </div>
            <div class="stat-content">
              <h3>2,847</h3>
              <p>Votes enregistrés</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <PieChartFilled />
            </div>
            <div class="stat-content">
              <h3>68.4%</h3>
              <p>Taux de participation</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <ClockCircleFilled />
            </div>
            <div class="stat-content">
              <h3>2j 14h</h3>
              <p>Temps restant</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="section-header mb-4">
        <h2 class="section-title">Résultats par poste</h2>
        <span class="section-badge">
            <ReloadOutlined />
          Mis à jour il y a 2 min
        </span>
      </div>

      <!-- Campaign Card -->
      <a-card class="campaign-card">
        <template #title>
          <div class="campaign-header">
            <h3 class="campaign-title">Élections du Bureau Étudiant</h3>
            <p class="campaign-meta">
              Ouvert du 15 au 22 janvier 2025
            </p>
          </div>
        </template>

        <!-- Position Tabs -->
        <a-tabs v-model:activeKey="activePosition" type="card" class="position-tabs">
          <a-tab-pane
            v-for="position in positions"
            :key="position.id"
            :tab="position.title"
          >
            <template #tab>
              <span>
                <i :class="position.icon"></i>
                {{ position.title }}
              </span>
            </template>

            <!-- Results Header -->
            <div class="results-header mb-4">
              <h4 class="position-title">
                <i :class="position.icon"></i>
                {{ position.title }}
              </h4>
              <span class="votes-count">{{ position.totalVotes }} votes</span>
            </div>

            <!-- Candidates Ranking -->
            <div class="candidates-ranking">
              <div
                v-for="(candidate, index) in position.candidates"
                :key="candidate.id"
                :class="['candidate-row', `rank-${index + 1}`]"
              >
                <!-- Rank Badge -->
                <div class="candidate-rank">
                  <a-badge
                    :count="index + 1"
                    :number-style="{
                      backgroundColor: getRankColor(index + 1),
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      width: '40px',
                      height: '40px',
                      lineHeight: '40px',
                      borderRadius: '12px',
                    }"
                  />
                </div>

                <!-- Avatar -->
                <a-avatar :size="50" :src="candidate.avatar" class="candidate-avatar">
                  {{ candidate.initials }}
                </a-avatar>

                <!-- Candidate Info -->
                <div class="candidate-info">
                  <div class="candidate-name">{{ candidate.name }}</div>
                  <div class="candidate-party">{{ candidate.party }}</div>
                </div>

                <!-- Progress Bar -->
                <div class="candidate-progress">
                  <a-progress
                    :percent="candidate.percentage"
                    :stroke-color="getProgressColor(index + 1)"
                    :show-info="false"
                  />
                  <div class="progress-label">{{ candidate.percentage }}%</div>
                </div>

                <!-- Votes -->
                <div class="candidate-votes">
                  <div class="votes-number">{{ candidate.votes }}</div>
                  <div class="votes-label">votes</div>
                </div>

                <!-- Trend -->
                <div class="candidate-trend d-none d-lg-block">
                  <a-tag
                    :color="candidate.trend > 0 ? 'success' : 'error'"
                    class="trend-indicator"
                  >
                    <i
                      :class="
                        candidate.trend > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'
                      "
                    ></i>
                    {{ Math.abs(candidate.trend) }}%
                  </a-tag>
                </div>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>

      <!-- CTA Section -->
      <a-card class="cta-card mt-5">
        <div class="text-center">
          <div class="cta-icon mx-auto mb-4">
            <i class="fas fa-vote-yea"></i>
          </div>
          <h3 class="cta-title">Prêt à voter ?</h3>
          <p class="cta-text">
            Connectez-vous pour participer aux élections et faire entendre votre voix dans
            notre communauté étudiante.
          </p>
          <a-button type="primary" size="large" class="btn-primary-custom">
            <i class="fas fa-sign-in-alt me-2"></i>
            Se connecter pour voter
          </a-button>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activePosition = ref("1");

const positions = ref([
  {
    id: "1",
    title: "Président(e)",
    icon: "fas fa-crown",
    totalVotes: 1098,
    candidates: [
      {
        id: 1,
        name: "Marie Dubois",
        party: "Liste Progressiste",
        avatar: "https://i.pravatar.cc/150?img=8",
        initials: "MD",
        votes: 478,
        percentage: 43.5,
        trend: 2.3,
      },
      {
        id: 2,
        name: "Thomas Bernard",
        party: "Alliance Étudiante",
        avatar: "https://i.pravatar.cc/150?img=12",
        initials: "TB",
        votes: 408,
        percentage: 37.2,
        trend: 1.1,
      },
      {
        id: 3,
        name: "Sophie Chen",
        party: "Mouvement Campus",
        avatar: "https://i.pravatar.cc/150?img=5",
        initials: "SC",
        votes: 212,
        percentage: 19.3,
        trend: -0.9,
      },
    ],
  },
  {
    id: "2",
    title: "Secrétaire",
    icon: "fas fa-file-signature",
    totalVotes: 1067,
    candidates: [
      {
        id: 1,
        name: "Emma Laurent",
        party: "Liste Progressiste",
        avatar: "https://i.pravatar.cc/150?img=10",
        initials: "EL",
        votes: 514,
        percentage: 48.2,
        trend: 3.1,
      },
      {
        id: 2,
        name: "Ahmed Karim",
        party: "Mouvement Campus",
        avatar: "https://i.pravatar.cc/150?img=13",
        initials: "AK",
        votes: 350,
        percentage: 32.8,
        trend: -1.2,
      },
      {
        id: 3,
        name: "Julia Martin",
        party: "Indépendant",
        avatar: null,
        initials: "JM",
        votes: 203,
        percentage: 19.0,
        trend: -0.5,
      },
    ],
  },
  {
    id: "3",
    title: "Vice-président(e)",
    icon: "fas fa-users",
    totalVotes: 1095,
    candidates: [
      {
        id: 1,
        name: "Sophie Chen",
        party: "Mouvement Campus",
        avatar: "https://i.pravatar.cc/150?img=11",
        initials: "SC",
        votes: 476,
        percentage: 43.5,
        trend: 2.7,
      },
      {
        id: 2,
        name: "Lucas Moreau",
        party: "Alliance Étudiante",
        avatar: "https://i.pravatar.cc/150?img=15",
        initials: "LM",
        votes: 412,
        percentage: 37.5,
        trend: -0.8,
      },
      {
        id: 3,
        name: "Nina Garcia",
        party: "Indépendant",
        avatar: null,
        initials: "NG",
        votes: 208,
        percentage: 19.0,
        trend: -1.5,
      },
    ],
  },
  {
    id: "4",
    title: "Trésorier(ère)",
    icon: "fas fa-coins",
    totalVotes: 1045,
    candidates: [
      {
        id: 1,
        name: "Pierre Lavigne",
        party: "Alliance Étudiante",
        avatar: "https://i.pravatar.cc/150?img=17",
        initials: "PL",
        votes: 456,
        percentage: 43.6,
        trend: 3.8,
      },
      {
        id: 2,
        name: "Sarah Diallo",
        party: "Liste Progressiste",
        avatar: "https://i.pravatar.cc/150?img=20",
        initials: "SD",
        votes: 398,
        percentage: 38.1,
        trend: 2.1,
      },
      {
        id: 3,
        name: "Marc Fontaine",
        party: "Mouvement Campus",
        avatar: "https://i.pravatar.cc/150?img=18",
        initials: "MF",
        votes: 191,
        percentage: 18.3,
        trend: -2.4,
      },
    ],
  },
]);

const getRankColor = (rank) => {
  const colors = {
    1: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    2: "linear-gradient(135deg, #94a3b8, #64748b)",
    3: "linear-gradient(135deg, #d97706, #c2410c)",
  };
  return colors[rank] || "#cbd5e1";
};

const getProgressColor = (rank) => {
  const colors = {
    1: { "0%": "#2563eb", "100%": "#60a5fa" },
    2: { "0%": "#8b5cf6", "100%": "#a78bfa" },
    3: { "0%": "#f59e0b", "100%": "#fbbf24" },
  };
  return colors[rank] || { "0%": "#cbd5e1", "100%": "#94a3b8" };
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  height: auto;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 80px 0 60px;
  overflow: hidden;
  width: 100%;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 50%,
      rgba(37, 99, 235, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  color: white;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 24px;
  color: white !important;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.3);
  }
}

.hero-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: white !important;
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.1rem;
  font-family: var(--font-display);
  opacity: 0.9;
  margin: 0 0 40px;
  color: white !important;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 24px;
  color: white;
}

.stat-card :deep(.ant-statistic-title) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
}

.stat-card :deep(.ant-statistic-content) {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
}

.stat-icon {
  position: relative;
  top: -6px;
  font-size: 30px !important;
  margin-right: 5px;
}

/* Section Header */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.section-title {
  font-family: var(--font-display) !important;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}

/* Campaign Card */
.campaign-card {
  border-radius: 24px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.campaign-header {
  margin: 16px;
}

.campaign-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 8px;
}



/* Position Tabs */
.position-tabs {
            display: flex;
            gap: 12px;
            margin-bottom: 32px;
            overflow-x: auto;
            padding-bottom: 4px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
        }

        .position-tabs::-webkit-scrollbar {
            height: 4px;
        }

        .position-tabs::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
        }

        .position-tabs::-webkit-scrollbar-thumb {
            background: var(--campus-blue);
            border-radius: 4px;
        }

        .position-tab {
            flex: 0 0 auto;
            padding: 12px 24px;
            border-radius: 16px;
            background: #f8fafc;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            font-size: 0.95rem;
            color: var(--text-muted);
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .position-tab:hover {
            background: #f1f5f9;
            border-color: #e2e8f0;
        }

        .position-tab.active {
            background: linear-gradient(135deg, var(--campus-blue), var(--campus-blue-light));
            color: white;
            border-color: var(--campus-blue);
        }

        .position-tab i {
            font-size: 1.1rem;
        }

/* Results */
.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.position-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.position-title i {
  color: #2563eb;
}

.votes-count {
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 600;
}

/* Candidates */
.candidates-ranking {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.candidate-row {
  display: grid;
  grid-template-columns: auto auto 1fr auto auto auto;
  gap: 16px;
  align-items: center;
  background: #f8fafc;
  padding: 20px;
  width: 99.5%;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.candidate-row:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.candidate-row.rank-1 {
  background: linear-gradient(to right, rgba(37, 99, 235, 0.05), #f8fafc);
  border-color: #60a5fa;
}

.candidate-avatar {
  border: 3px solid white !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #60a5fa !important;
  color: white;
  font-weight: 700;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.candidate-name {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 2px;
}

.candidate-party {
  color: #64748b;
  font-size: 0.85rem;
}

.candidate-progress {
  flex: 1;
  min-width: 120px;
}

.progress-label {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
  margin-top: 4px;
}

.candidate-votes {
  text-align: right;
}

.votes-number {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.votes-label {
  font-size: 0.75rem;
  color: #64748b;
}

.trend-indicator {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 12px;
}

/* CTA Card */
.cta-card {
  background: linear-gradient(135deg, #2563eb, #60a5fa) !important;
  border-radius: 24px !important;
  color: white;
}

.cta-card :deep(.ant-card-body) {
  padding: 48px;
}

.cta-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.cta-title {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 16px;
  color: white;
}

.cta-text {
  font-size: 1rem;
  opacity: 0.95;
  margin: 0 0 32px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  color: white;
}

.btn-primary-custom {
  height: auto !important;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 16px !important;
  background: white !important;
  color: #2563eb !important;
  border: none !important;
}

.btn-primary-custom:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2) !important;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-display) !important;
  gap: 8px;
  background: linear-gradient(135deg, var(--campus-green), var(--campus-green-light));
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--campus-blue), var(--campus-blue-light));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .candidate-row {
    grid-template-columns: auto auto 1fr auto;
  }

  .candidate-trend {
    display: none !important;
  }
}

.stat-content h3 {
  font-family: var(--font-display) !important;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
}

.stat-content p {
  margin: 4px 0 0;
  opacity: 0.8;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .campaign-meta {
  color: #64748b;
  font-size: 0.9rem;
  flex-wrap: wrap;
  display: flex;
  margin: 0;
}

  .candidate-row {
  display: grid;
  grid-template-columns: auto auto 1fr auto auto auto;
  gap: 16px;
  align-items: center;
  background: #f8fafc;
  padding: 20px;
  width: 100%;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

  .candidate-row:hover {
  transform: translateY(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

  .stat-content h3 {
    font-family: var(--font-display) !important;
    font-size: 2rem !important;
    font-weight: bold !important;
    margin: 0;
    line-height: 1;
  }

  .stat-content p {
    margin: 4px 0 0;
    opacity: 0.8;
    font-size: 1rem;
    color: white;
  }

  .stat-card {
    padding: 20px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .campaign-title {
    font-size: 1.5rem;
  }

  .candidate-row {
    grid-template-columns: auto 1fr;
    gap: 12px;
    padding: 16px;
  }

  .candidate-rank {
    grid-row: span 2;
  }

  .candidate-avatar {
    grid-column: 2;
  }

  .candidate-info {
    grid-column: 2;
    grid-row: 2;
  }

  .candidate-progress {
    grid-column: 1 / -1;
    margin-top: 12px;
  }

  .candidate-votes {
    grid-column: 1 / -1;
    text-align: center;
  }

  .cta-card :deep(.ant-card-body) {
    padding: 32px 24px;
  }

  .cta-title {
    font-size: 1.6rem;
  }
}
</style>
