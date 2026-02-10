<template>
  <div class="elections-page">
    <!-- Authentication Page (2-step: Email then Code) -->
    <div v-if="!isAuthenticated" class="auth-container pt-5">
      <div class="auth-bg"></div>
      <div class="auth-grid"></div>

      <div class="auth-card">
        <!-- Step 1: Email -->
        <div v-if="authStep === 'email'" key="email-step">
          <div class="auth-header">
            <div class="auth-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h1 class="auth-title">Accès aux élections</h1>
            <p class="auth-subtitle">
              Entrez votre adresse email étudiante pour participer aux élections
            </p>
          </div>

          <a-form @submit.prevent="handleEmailSubmit" layout="vertical">
            <a-form-item
              label="Adresse email étudiante"
              required
              :validate-status="emailError ? 'error' : ''"
              :help="emailError"
            >
              <a-input
                v-model:value="email"
                size="large"
                type="email"
                placeholder="prenom.nom@hearst.ca"
                @input="emailError = ''"
              >
                <template #prefix>
                  <i class="fas fa-envelope"></i>
                </template>
              </a-input>
            </a-form-item>

            <a-button
              type="primary"
              html-type="submit"
              size="large"
              block
              :loading="isLoading"
              class="btn-submit"
            >
              <i class="fas fa-paper-plane"></i>
              Envoyer le code de vérification
            </a-button>
          </a-form>


        </div>

        <!-- Step 2: Verification Code -->
        <div v-else-if="authStep === 'code'" key="code-step">
          <div class="auth-header">
            <div
              class="auth-icon"
              style="background: linear-gradient(135deg, var(--success), #34d399)"
            >
              <i class="fas fa-key"></i>
            </div>
            <h1 class="auth-title">Code de vérification</h1>
            <p class="auth-subtitle">
              Un code à 6 chiffres a été envoyé à<br />
              <strong>{{ email }}</strong>
            </p>
          </div>

          <a-form @submit.prevent="handleCodeSubmit" layout="vertical">
            <a-form-item
              label="Code de vérification"
              required
              :validate-status="codeError ? 'error' : ''"
              :help="codeError"
            >
              <a-input
                v-model:value="verificationCode"
                size="large"
                placeholder="000000"
                :maxlength="6"
                @input="codeError = ''"
              >
                <template #prefix>
                  <i class="fas fa-lock"></i>
                </template>
              </a-input>
            </a-form-item>


            <a-button
              type="primary"
              html-type="submit"
              size="large"
              block
              :loading="isLoading"
              class="btn-submit"
            >
              <i class="fas fa-sign-in-alt"></i>
              Vérifier et accéder
            </a-button>

            <a-button
              type="text"
              size="large"
              block
              @click="backToEmail"
              class="btn-back-step"
            >
              <i class="fas fa-arrow-left"></i>
              Changer d'email
            </a-button>
          </a-form>


        </div>
      </div>
    </div>

    <!-- Election Page (if authenticated) -->
    <div v-else class="election-container">
      <!-- Hero Section -->
      <section class="election-hero">
        <div class="container">
          <div class="hero-content fade-in">
            <div class="hero-badge">
              <i class="fas fa-vote-yea"></i>
              Élections en cours
            </div>
            <h1 class="hero-title">Élections de l'Association Étudiante 2026</h1>
            <p class="hero-subtitle">
              Participez à la démocratie étudiante et choisissez vos représentants
            </p>

            <!-- Countdown -->
            <div class="countdown-container">
              <div class="countdown-item">
                <div class="countdown-value">{{ timeLeft.days }}</div>
                <div class="countdown-label">Jours</div>
              </div>
              <div class="countdown-item">
                <div class="countdown-value">{{ timeLeft.hours }}</div>
                <div class="countdown-label">Heures</div>
              </div>
              <div class="countdown-item">
                <div class="countdown-value">{{ timeLeft.minutes }}</div>
                <div class="countdown-label">Minutes</div>
              </div>
            </div>

            <!-- Stats -->
            <div class="election-stats">
              <div class="stat-item">
                <div class="stat-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div>
                  <div class="stat-value">{{ totalVoters.toLocaleString() }}</div>
                  <div class="stat-label">Électeurs inscrits</div>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-icon" style="background: var(--success)">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div>
                  <div class="stat-value">{{ totalVotes.toLocaleString() }}</div>
                  <div class="stat-label">Votes enregistrés</div>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-icon" style="background: var(--warning)">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div>
                  <div class="stat-value">{{ participationRate }}%</div>
                  <div class="stat-label">Taux de participation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Candidates Section -->
      <section class="candidates-section">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">
              <i class="fas fa-users-line"></i>
              Candidats
            </h2>
            <p class="section-subtitle">
              Découvrez les candidats et leurs projets pour l'année 2026-2027
            </p>
          </div>

          <div class="row g-4">
            <div v-for="candidate in candidates" :key="candidate.id" class="col-lg-6">
              <div
                class="candidate-card fade-in"
                :class="{ voted: hasVoted && votedCandidateId === candidate.id }"
              >
                <!-- Voted Badge -->
                <div
                  v-if="hasVoted && votedCandidateId === candidate.id"
                  class="voted-badge"
                >
                  <i class="fas fa-check-circle"></i>
                  Votre vote
                </div>

                <!-- Candidate Header -->
                <div
                  class="candidate-header"
                  :style="{
                    background: `linear-gradient(135deg, ${candidate.campusColor}, ${candidate.campusColor}dd)`,
                  }"
                ></div>

                <!-- Candidate Avatar -->
                <div class="candidate-avatar">
                  {{ candidate.initials }}
                </div>

                <!-- Candidate Body -->
                <div class="candidate-body">
                  <h3 class="candidate-name">{{ candidate.name }}</h3>
                  <div class="candidate-position">{{ candidate.position }}</div>
                  <div class="candidate-campus">
                    <span
                      class="campus-dot"
                      :style="{ background: candidate.campusColor }"
                    ></span>
                    {{ candidate.campus }}
                  </div>
                  <p class="candidate-slogan">{{ candidate.slogan }}</p>

                  <!-- Tabs -->
                  <a-tabs v-model:activeKey="candidate.activeTab" class="candidate-tabs">
                    <a-tab-pane key="projects" tab="Projets">
                      <div
                        v-for="(project, idx) in candidate.projects"
                        :key="idx"
                        class="project-item"
                      >
                        <div class="project-title">
                          <i
                            class="fas fa-check"
                            :style="{ color: candidate.campusColor }"
                          ></i>
                          {{ project.title }}
                        </div>
                        <div class="project-desc">{{ project.desc }}</div>
                      </div>
                    </a-tab-pane>

                    <a-tab-pane key="speech" tab="Discours">
                      <p class="speech-text">{{ candidate.speech }}</p>
                    </a-tab-pane>
                  </a-tabs>

                  <!-- Vote Section -->
                  <div class="vote-section">
                    <div class="vote-stats">
                      <div class="vote-stat">
                        <div class="vote-percentage">
                          {{ getPercentage(candidate.votes) }}%
                        </div>
                        <div class="vote-label">Des votes</div>
                      </div>
                      <div class="vote-stat">
                        <div class="vote-percentage">{{ candidate.votes }}</div>
                        <div class="vote-label">Votes</div>
                      </div>
                    </div>

                    <div class="progress-bar-container">
                      <div
                        class="progress-bar"
                        :style="{
                          width: `${getPercentage(candidate.votes)}%`,
                          background: `linear-gradient(90deg, ${candidate.campusColor}, ${candidate.campusColor}dd)`,
                        }"
                      ></div>
                    </div>

                    <a-button
                      size="large"
                      block
                      :type="
                        hasVoted && votedCandidateId === candidate.id
                          ? 'default'
                          : 'primary'
                      "
                      :disabled="hasVoted"
                      :class="
                        hasVoted && votedCandidateId === candidate.id
                          ? 'btn-voted'
                          : 'btn-vote'
                      "
                      @click="vote(candidate.id)"
                    >
                      <i
                        v-if="hasVoted && votedCandidateId === candidate.id"
                        class="fas fa-check-circle"
                      ></i>
                      <i v-else-if="hasVoted" class="fas fa-lock"></i>
                      <i v-else class="fas fa-vote-yea"></i>
                      {{ getVoteButtonText(candidate) }}
                    </a-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Results Section -->
      <section class="results-section">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">
              <i class="fas fa-chart-bar"></i>
              Résultats en temps réel
            </h2>
            <p class="section-subtitle">Classement actuel des candidats</p>
          </div>

          <div class="results-card fade-in">
            <div
              v-for="(candidate, index) in sortedCandidates"
              :key="candidate.id"
              class="result-item"
            >
              <div class="result-rank">#{{ index + 1 }}</div>
              <div
                class="result-avatar"
                :style="{
                  background: `linear-gradient(135deg, ${candidate.campusColor}, ${candidate.campusColor}dd)`,
                }"
              >
                {{ candidate.initials }}
              </div>
              <div class="result-info">
                <div class="result-name">{{ candidate.name }}</div>
                <div class="result-position">
                  {{ candidate.position }} • {{ candidate.campus }}
                </div>
              </div>
              <div class="result-stats">
                <div class="result-percentage">{{ getPercentage(candidate.votes) }}%</div>
                <div class="result-votes">
                  {{ candidate.votes }} {{ candidate.votes <= 1 ? "vote" : "votes" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { message } from "ant-design-vue";

// State
const isDarkMode = ref(false);
const isAuthenticated = ref(false);
const authStep = ref<"email" | "code">("email");
const email = ref("");
const verificationCode = ref("");
const isLoading = ref(false);
const emailError = ref("");
const codeError = ref("");
const hasVoted = ref(false);
const votedCandidateId = ref<number | null>(null);
const totalVoters = ref(1250);

// Resend code logic
const resendDisabled = ref(false);
const resendCountdown = ref(60);
const codeExpiryMinutes = ref(10);
let resendInterval: NodeJS.Timeout | null = null;

// Countdown
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
});

// Candidates Data
const candidates = ref([
  {
    id: 1,
    name: "Marie Lefebvre",
    initials: "ML",
    position: "Présidente",
    campus: "Campus Bleu",
    campusColor: "#2563eb",
    slogan: '"Pour une association dynamique et inclusive"',
    activeTab: "projects",
    projects: [
      {
        title: "Renforcer la vie étudiante",
        desc: "Organisation d'événements culturels et sportifs chaque mois",
      },
      {
        title: "Services aux étudiants",
        desc: "Création d'une banque alimentaire et d'un service d'aide aux devoirs",
      },
      {
        title: "Communication transparente",
        desc: "Mise en place d'une plateforme numérique pour suivre les actions",
      },
    ],
    speech:
      "Chères étudiantes, chers étudiants, je me présente pour être votre voix. Mon objectif est de créer une communauté étudiante forte, solidaire et engagée. Ensemble, nous pouvons transformer notre campus en un lieu où chacun se sent inclus et valorisé.",
    votes: 342,
  },
  {
    id: 2,
    name: "Pierre Dubois",
    initials: "PD",
    position: "Vice-président",
    campus: "Campus Vert",
    campusColor: "#10b981",
    slogan: '"L\'environnement au cœur de nos actions"',
    activeTab: "projects",
    projects: [
      {
        title: "Campus vert",
        desc: "Initiative zéro déchet et installation de bacs de compostage",
      },
      {
        title: "Transport durable",
        desc: "Système de covoiturage entre étudiants et bornes de vélo",
      },
      {
        title: "Sensibilisation",
        desc: "Ateliers mensuels sur l'écologie et le développement durable",
      },
    ],
    speech:
      "L'urgence climatique est réelle et notre génération doit agir. En tant que vice-président, je m'engage à faire de notre campus un modèle en matière de développement durable. Nous pouvons faire la différence, un petit geste à la fois.",
    votes: 289,
  },
  {
    id: 3,
    name: "Sophie Martin",
    initials: "SM",
    position: "Secrétaire générale",
    campus: "Campus Jaune",
    campusColor: "#f59e0b",
    slogan: '"La culture comme lien entre nous"',
    activeTab: "projects",
    projects: [
      {
        title: "Festivals culturels",
        desc: "Organisation de festivals multiculturels trimestriels",
      },
      {
        title: "Espace créatif",
        desc: "Création d'un studio d'art accessible à tous les étudiants",
      },
      {
        title: "Échanges intercampus",
        desc: "Programme d'échanges artistiques entre les trois campus",
      },
    ],
    speech:
      "La culture est ce qui nous unit au-delà de nos différences. Je veux créer des espaces où chaque étudiant peut exprimer sa créativité et découvrir celle des autres. Ensemble, célébrons la diversité qui fait la richesse de notre communauté.",
    votes: 256,
  },
  {
    id: 4,
    name: "Luc Tremblay",
    initials: "LT",
    position: "Trésorier",
    campus: "Campus Bleu",
    campusColor: "#2563eb",
    slogan: '"Une gestion transparente pour tous"',
    activeTab: "projects",
    projects: [
      {
        title: "Budget participatif",
        desc: "Les étudiants décident de l'allocation de 20% du budget",
      },
      {
        title: "Transparence financière",
        desc: "Publication mensuelle des comptes et dépenses",
      },
      {
        title: "Bourses d'aide",
        desc: "Création d'un fonds d'urgence pour les étudiants en difficulté",
      },
    ],
    speech:
      "L'argent de l'association vous appartient. En tant que trésorier, je m'engage à une gestion rigoureuse et transparente. Chaque dollar sera utilisé pour améliorer votre expérience étudiante. Vous méritez de savoir où va votre argent.",
    votes: 198,
  },
]);

// Computed
const totalVotes = computed(() => {
  return candidates.value.reduce((sum, c) => sum + c.votes, 0);
});

const participationRate = computed(() => {
  return totalVotes.value === 0
    ? 0
    : Math.round((totalVotes.value / totalVoters.value) * 100);
});

const sortedCandidates = computed(() => {
  return [...candidates.value].sort((a, b) => b.votes - a.votes);
});

// Methods
const handleEmailSubmit = async () => {
  // Validation email
  if (!email.value) {
    emailError.value = "Veuillez entrer votre adresse email";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = "Adresse email invalide";
    return;
  }

  // Vérifier que c'est un email @hearst.ca (optionnel)
  if (!email.value.endsWith("@hearst.ca")) {
    emailError.value = "Veuillez utiliser votre adresse email étudiante (@hearst.ca)";
    return;
  }

  isLoading.value = true;

  // Simuler l'appel API pour envoyer le code
  // TODO: Remplacer par votre vraie API
  // await fetch('/api/elections/send-code', { method: 'POST', body: JSON.stringify({ email: email.value }) })

  setTimeout(() => {
    isLoading.value = false;
    authStep.value = "code";
    message.success("Code de vérification envoyé !");
    startResendTimer();
  }, 1500);
};

const handleCodeSubmit = async () => {
  // Validation code
  if (!verificationCode.value) {
    codeError.value = "Veuillez entrer le code de vérification";
    return;
  }

  if (verificationCode.value.length !== 6) {
    codeError.value = "Le code doit contenir 6 chiffres";
    return;
  }

  isLoading.value = true;

  // Simuler la vérification du code
  // TODO: Remplacer par votre vraie API
  // const response = await fetch('/api/elections/verify-code', {
  //   method: 'POST',
  //   body: JSON.stringify({ email: email.value, code: verificationCode.value })
  // })

  setTimeout(() => {
    isLoading.value = false;

    // Pour la démo, accepter n'importe quel code
    isAuthenticated.value = true;
    message.success("Connexion réussie ! Bienvenue aux élections.");

    // Sauvegarder dans localStorage
    localStorage.setItem("elections_authenticated", "true");
    localStorage.setItem("elections_email", email.value);

    // Démarrer le countdown
    startCountdown();

    // Vérifier si déjà voté
    checkVoteStatus();

    // Clear resend timer
    if (resendInterval) {
      clearInterval(resendInterval);
    }
  }, 1500);
};

const backToEmail = () => {
  authStep.value = "email";
  verificationCode.value = "";
  codeError.value = "";

  if (resendInterval) {
    clearInterval(resendInterval);
  }
};

const resendCode = async () => {
  if (resendDisabled.value) return;

  isLoading.value = true;

  // TODO: Appel API pour renvoyer le code
  // await fetch('/api/elections/send-code', { method: 'POST', body: JSON.stringify({ email: email.value }) })

  setTimeout(() => {
    isLoading.value = false;
    message.success("Code renvoyé !");
    startResendTimer();
  }, 1000);
};

const startResendTimer = () => {
  resendDisabled.value = true;
  resendCountdown.value = 60;

  resendInterval = setInterval(() => {
    resendCountdown.value--;

    if (resendCountdown.value <= 0) {
      resendDisabled.value = false;
      if (resendInterval) {
        clearInterval(resendInterval);
      }
    }
  }, 1000);
};

const vote = (candidateId: number) => {
  if (hasVoted.value) return;

  const candidate = candidates.value.find((c) => c.id === candidateId);

  if (
    confirm(
      `Êtes-vous sûr de vouloir voter pour ${candidate?.name} ? Ce choix est définitif.`
    )
  ) {
    if (candidate) {
      candidate.votes++;
    }
    hasVoted.value = true;
    votedCandidateId.value = candidateId;

    // Save to localStorage
    localStorage.setItem("hasVoted", "true");
    localStorage.setItem("votedCandidateId", candidateId.toString());

    // TODO: Appel API pour enregistrer le vote
    // await fetch('/api/elections/vote', {
    //   method: 'POST',
    //   body: JSON.stringify({ email: email.value, candidateId })
    // })

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const getPercentage = (votes: number) => {
  return totalVotes.value === 0 ? 0 : Math.round((votes / totalVotes.value) * 100);
};

const getVoteButtonText = (candidate: any) => {
  if (hasVoted.value && votedCandidateId.value === candidate.id) {
    return "Voté !";
  } else if (hasVoted.value) {
    return "Vote enregistré";
  } else {
    return `Voter pour ${candidate.name}`;
  }
};

const startCountdown = () => {
  const endDate = new Date("2026-02-22T23:59:59");

  const update = () => {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();

    if (diff <= 0) {
      timeLeft.value = { days: 0, hours: 0, minutes: 0 };
      return;
    }

    timeLeft.value = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  update();
  const interval = setInterval(update, 60000);

  onUnmounted(() => clearInterval(interval));
};

const checkVoteStatus = () => {
  const stored = localStorage.getItem("hasVoted");
  if (stored === "true") {
    hasVoted.value = true;
    const candidateId = localStorage.getItem("votedCandidateId");
    if (candidateId) {
      votedCandidateId.value = parseInt(candidateId);
    }
  }
};

// Lifecycle
onMounted(() => {
  // Vérifier si déjà authentifié
  const authenticated = localStorage.getItem("elections_authenticated");
  if (authenticated === "true") {
    isAuthenticated.value = true;
    email.value = localStorage.getItem("elections_email") || "";
    startCountdown();
    checkVoteStatus();
  }

  // Scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  setTimeout(() => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
  }, 100);
});

onUnmounted(() => {
  if (resendInterval) {
    clearInterval(resendInterval);
  }
});
</script>

<style scoped>

.elections-page {
  font-family: var(--font-display);
  color: var(--text-dark);
  overflow-x: hidden;
  transition: background 0.3s ease, color 0.3s ease;
  min-height: 100vh;
}



/* ==================== AUTHENTICATION PAGE ==================== */
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.auth-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  opacity: 0.03;
}

.auth-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.auth-card {
  position: relative;
  z-index: 2;
  max-width: 500px;
  width: 100%;
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  animation: slideUp 0.6s ease;
}

.dark-mode .auth-card {
  background: var(--dark-surface);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.auth-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.auth-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
}

.auth-title {
  font-family: var(--font-display) !important;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-dark);
}

.dark-mode .auth-title {
  color: var(--text-light);
}

.auth-subtitle {
    font-family: var(--font-display) !important;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
}

.btn-submit {
  height: 50px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-light)
  ) !important;
  border: none !important;
  border-radius: 12px !important;
  margin-top: 1rem;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3) !important;
}

.btn-back-step {
  margin-top: 1rem;
  color: var(--text-muted) !important;
  font-weight: 500;
}

.btn-back-step:hover {
  color: var(--primary-color) !important;
}

.auth-footer {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.dark-mode .auth-footer {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.security-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--success);
  font-size: 0.9rem;
  font-weight: 500;
}

.code-info {
  background: var(--light-bg);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.dark-mode .code-info {
  background: rgba(255, 255, 255, 0.05);
}

.info-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

/* ==================== ELECTION PAGE ==================== */
.election-container {
  padding-bottom: 4rem;
}

/* Hero Section */
.election-hero {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  padding: 4rem 0;
  color: white;
  position: relative;
  overflow: hidden;
}

.election-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Countdown */
.countdown-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.countdown-item {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  min-width: 120px;
}

.countdown-value {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.countdown-label {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
}

/* Election Stats */
.election-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 16px;
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.9;
}

/* Candidates Section */
.candidates-section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--text-dark);
}

.dark-mode .section-title {
  color: var(--text-light);
}

.section-title i {
  color: var(--primary-color);
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* Candidate Card */
.candidate-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
}

.dark-mode .candidate-card {
  background: var(--dark-surface);
}

.candidate-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.candidate-card.voted {
  border: 3px solid var(--success);
}

.voted-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: var(--success);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.candidate-header {
  height: 120px;
  position: relative;
}

.candidate-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  border: 5px solid white;
  margin: -50px auto 0;
  position: relative;
  z-index: 5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.candidate-body {
  padding: 2rem;
  text-align: center;
}

.candidate-name {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.dark-mode .candidate-name {
  color: var(--text-light);
}

.candidate-position {
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.candidate-campus {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--light-bg);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.dark-mode .candidate-campus {
  background: rgba(255, 255, 255, 0.05);
}

.campus-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.candidate-slogan {
  font-style: italic;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

/* Tabs */
.candidate-tabs {
  text-align: left;
  margin-bottom: 1.5rem;
}

.project-item {
  margin-bottom: 1.5rem;
  text-align: left;
}

.project-title {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  font-size: 0.95rem;
}

.dark-mode .project-title {
  color: var(--text-light);
}

.project-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  padding-left: 1.75rem;
}

.speech-text {
  text-align: left;
  color: var(--text-dark);
  line-height: 1.8;
  font-size: 0.95rem;
}

.dark-mode .speech-text {
  color: var(--text-light);
}

/* Vote Section */
.vote-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.dark-mode .vote-section {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.vote-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
}

.vote-stat {
  text-align: center;
}

.vote-percentage {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.vote-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.progress-bar-container {
  height: 12px;
  background: var(--light-bg);
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.dark-mode .progress-bar-container {
  background: rgba(255, 255, 255, 0.05);
}

.progress-bar {
  height: 100%;
  border-radius: 50px;
  transition: width 0.6s ease;
}

.btn-vote,
.btn-voted {
  height: 50px !important;
  font-family: var(--font-display) !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;
}

.btn-vote {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-light)
  ) !important;
  border: none !important;
}

.btn-vote:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3) !important;
}

.btn-voted {
  background: var(--success) !important;
  border: none !important;
  color: white !important;
}

/* Results Section */
.results-section {
  padding: 4rem 0;
  background: var(--light-surface);
}

.dark-mode .results-section {
  background: var(--dark-surface);
}

.results-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.dark-mode .results-card {
  background: rgba(255, 255, 255, 0.02);
}

.result-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.dark-mode .result-item {
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.result-item:last-child {
  border-bottom: none;
}

.result-item:hover {
  background: var(--light-bg);
  border-radius: 12px;
}

.dark-mode .result-item:hover {
  background: rgba(255, 255, 255, 0.02);
}

.result-rank {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  min-width: 60px;
  text-align: center;
}

.result-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.result-info {
  flex: 1;
}

.result-name {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--text-dark);
}

.dark-mode .result-name {
  color: var(--text-light);
}

.result-position {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.result-stats {
  text-align: right;
}

.result-percentage {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.result-votes {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }


  .hero-subtitle {
    font-size: 1rem;
  }

  .countdown-container {
    gap: 1rem;
  }

  .countdown-item {
    padding: 1rem 1.5rem;
    min-width: 90px;
  }

  .countdown-value {
    font-size: 2rem;
  }

  .election-stats {
    gap: 1rem;
  }

  .stat-item {
    flex-direction: column;
    text-align: center;
  }

  .section-title {
    font-size: 1.75rem;
    flex-direction: column;
  }

  .candidate-name {
    font-size: 1.5rem;
  }

  .result-rank {
    min-width: 40px;
    font-size: 1.25rem;
  }

  .result-avatar {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }

  .result-percentage {
    font-size: 1.5rem;
  }

  .auth-card {
    padding: 2rem;
  }
}
</style>
