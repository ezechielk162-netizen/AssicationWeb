<template>
    <div ref="target" class="mx-w pill-fade" :class="{ show: isVisible }">
  <a-row :gutter="24" class="pt-4">
    <a-col :xs="24" :md="8" class="pt-3" v-for="(item, i) in cards" :key="i">
      <a-card class="info-card">
        <div :class="item.class">
          <component :is="item.icon" />
        </div>

        <h3 class="title">{{ t(item.title) }}</h3>
        <p class="subtitle pt-2">{{ t(item.text) }}</p>
      </a-card>
    </a-col>
  </a-row>
</div>

</template>

<script setup>
import { cards } from '~/core/constant';

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
.info-card {
  position: relative;
  border-radius: 16px;
  padding: 1rem;
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}

/* Barre bleue en haut */
.info-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  transition: width 0.4s ease;
}

/* Hover */
.info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.info-card:hover::before {
  width: 100%;
}

.mx-w{
    max-width: 1200px;
    margin: 0 auto;
}

.icon-box-1 {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--campus-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 26px;
  margin-bottom: 16px;
}

.icon-box-2 {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--campus-green);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 26px;
  margin-bottom: 16px;
}

.icon-box-3 {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--campus-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 26px;
  margin-bottom: 16px;
}

/* Texte */
.info-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.info-card p {
  color: #64748b;
  line-height: 1.6;
}


.title{
    font-family: var(--font-display) !important;
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    margin-bottom: 1rem;
    color: var(--dark-bg);
}

.subtitle{
    font-family: var(--font-body) !important;
    font-size: 1rem !important;
    line-height: 1.7;
    color: var(--text-muted);
}

</style>
