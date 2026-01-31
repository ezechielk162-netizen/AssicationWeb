<template>
  <div ref="target" class="mx-w pill-fade" :class="{ show: isVisible }">
    <a-row :gutter="[24, 24]">
      <a-col v-for="(item, i) in cardSecond" :key="i" :xs="24" :md="8">
        <a-card class="feature-card" hoverable>
          <component :is="item.icon" class="icon" />

          <h3 class="title">{{ t(item.title) }}</h3>
          <p class="subtitle">{{ t(item.text) }}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { cardSecond } from "~/core/constant";
const { t } = useI18n();

const isVisible = ref(false);
const target = ref(null);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect(); // animation une seule fois
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
.mx-w {
  max-width: 1200px;
  margin: 0 auto;
}

/* Base card */
.feature-card {
  height: 100%;
  min-height: 280px;
  border-radius: 18px;
  padding: 32px 28px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}

/* Hover bleu */
.feature-card:hover {
  transform: translateY(-8px);
  border-color: #2563eb;
  box-shadow: 0 20px 50px rgba(37, 99, 235, 0.25);
}

/* Icône */
.icon {
  font-size: 38px;
  color: #2563eb;
  margin-bottom: 20px;
  transition: all 0.35s ease;
}

/* Titre */
.title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0f172a;
  transition: color 0.3s ease;
}

/* Texte */
.subtitle {
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
}

/* Hover effet texte + icône */
.feature-card:hover .icon {
  transform: scale(1.1);
  color: #1d4ed8;
}

.feature-card:hover .title {
  color: #2563eb;
}
</style>
