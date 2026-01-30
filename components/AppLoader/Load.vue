<template>
  <div class="loader-container">
    <svg class="circular-loader" viewBox="0 0 120 120">
      <circle class="arc arc-blue" cx="60" cy="60" r="50" />
      <circle class="arc arc-green" cx="60" cy="60" r="42" />
      <circle class="arc arc-yellow" cx="60" cy="60" r="34" />
    </svg>

    <div class="loader-text">
      <strong>Chargement</strong>
      <span>Veuillez patienter...</span>
    </div>

    <div class="dots"><span></span><span></span><span></span></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

.loader-container {
  position: fixed; /* 🔥 IMPORTANT */
  inset: 0;
  background: radial-gradient(circle at top, #0f172a, #020617);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 1rem;
  z-index: 9999;
}

/* Loader circulaire */
.circular-loader {
  width: 120px;
  height: 120px;
}

/* Arcs */
.arc {
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 80 240;
  transform-origin: 50% 50%;
  animation: spin 1.8s ease-in-out infinite;
}

.arc-blue {
  stroke: #3b82f6;
}

.arc-green {
  stroke: #22c55e;
  animation-delay: -0.6s;
}

.arc-yellow {
  stroke: #f59e0b;
  animation-delay: -1.2s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.3;
  }
}

/* Texte */
.loader-text {
  text-align: center;
}

.loader-text strong {
  font-size: 1.4rem;
  display: block;
}

.loader-text span {
  opacity: 0.7;
  font-size: 0.95rem;
}

/* Points animés */
.dots {
  margin-top: 16px;
  display: flex;
  gap: 10px;
}

.dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  animation: pulse 1.4s infinite ease-in-out;
}

.dots span:nth-child(2) {
  background: #22c55e;
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  background: #f59e0b;
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%,
  80%,
  100% {
    transform: scale(0.5);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

</style>
