<template>
  <section class="hero-carousel" id="accueil">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="[
        'hero-slide',
        `hero-slide-${index + 1}`,
        { active: currentSlide === index },
      ]"
    >
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <component :is="slide.icon" class="fix-icon fs-6" />
          <span>{{ slide.badge }}</span>
        </div>
        <h4 class="hero-title" v-html="slide.title"></h4>
        <p class="hero-subtitle">{{ slide.subtitle }}</p>
        <div class="hero-actions">
          <a-button
            size="large"
            v-for="(action, aIndex) in slide.actions"
            :key="aIndex"
            :href="action.href"
            :class="action.class"
          >
            {{ action.label }}
          </a-button>
        </div>
      </div>
    </div>

    <!-- Navigation arrows -->
    <div class="hero-arrow prev" @click="prevSlide">
      <LeftOutlined />
    </div>
    <div class="hero-arrow next" @click="nextSlide">
      <RightOutlined />
    </div>

    <!-- Navigation dots -->
    <div class="hero-nav">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['hero-nav-dot', { active: currentSlide === index }]"
        @click="goToSlide(index)"
      ></div>
    </div>

    <div class="hero-scroll">
      <DownOutlined style="color: white; font-size: 1.5rem" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { slides } from "~/core/constant";

const currentSlide = ref(0);

let interval: number;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

onMounted(() => {
  interval = setInterval(nextSlide, 6000);
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>
