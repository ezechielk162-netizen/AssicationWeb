<template>
  <div class="container py-5">
    <div class="row g-4">
      <div
        v-for="project in allProjects"
        :key="project.id"
        class="col-lg-6 col-md-6 col-sm-12"
      >
        <a-card class="project-card">
          <!-- IMAGE -->
          <div class="image-wrapper">
            <img :src="project.image" alt="project image" />
            <div class="tags-wrapper">
              <a-tag :color="project.tagColor" class="status-tag">
                {{ project.status }}
              </a-tag>
              <a-tag :color="project.tagColor" class="campus-tag">
                <span class="campus-icon">🏫</span> {{ project.campus }} 
              </a-tag>
              <a-tag :color="project.tagColor" class="campus-tag">
                <span class="campus-icon"></span> Le {{ project.publishDate }}
              </a-tag>
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-4">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="font-title">{{ project.title }}</h5>
            </div>
            <p class="text-muted mb-3">
              {{ project.excerpt }}
            </p>

            <a-button type="primary" shape="round" @click="goToDetails(project.id)">
              Voir plus
            </a-button>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { allProjects } from "~/core/constant";
const { goToDetails } = useFunctions();
</script>

<style scoped>
.project-card {
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.35s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.15);
}

/* IMAGE */
.image-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover img {
  transform: scale(1.08) rotate(1deg);
}

/* TAGS ROW */
.tags-wrapper {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.font-title {
  font-weight: bold;
}

.font-date{
    
}

.status-tag,
.campus-tag {
  font-weight: 600;
  border-radius: 20px;
  font-size: 15px;
}

/* CAMPUS TAG */
.campus-tag {
  background: rgba(255, 255, 255, 0.88) !important;
  color: #374151 !important;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 5px;
}

.campus-icon {
  font-size: 14px;
  line-height: 1;
}

@media (max-width: 768px) {
    .font-title {
  font-weight: bold;
  font-size: 1rem;
}

.font-date{
    font-size: 0.8rem !important;
}
}
</style>
