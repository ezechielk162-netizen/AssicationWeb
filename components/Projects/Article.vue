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
              <a-tag :color="project.tagColor" class="campus-tag">
                <span class="campus-icon"><EnvironmentOutlined class="fix-icon" /></span>
                {{ project.campus }}
              </a-tag>
              <a-tag
                :class="
                  project.status === statusProject.FINISHED
                    ? 'status-tag-finish text-white'
                    : project.status === statusProject.IN_PROGRESS
                    ? 'status-tag-in-progress text-white'
                    : 'status-tag-not-start text-white'
                "
              >
                <CheckOutlined
                  class="fix-icon"
                  v-if="project.status === statusProject.FINISHED"
                />
                <LoadingOutlined
                  v-if="project.status === statusProject.NOT_STARTED"
                  class="fix-icon"
                />
                <HourglassOutlined
                  class="fix-icon"
                  v-if="project.status === statusProject.IN_PROGRESS"
                />
                {{ project.status }}
              </a-tag>
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-4">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="font-title">
                {{ project.title }}
              </h5>
            </div>
            <p class="text-muted mb-3 project-details">
              {{ project.excerpt }}
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <a-button
                clas="outline-slide-team"
                type="primary"
                shape="round"
                @click="goToDetails(project.id)"
              >
                Voir plus
                <template #icon>
                  <ArrowRightOutlined class="fix-icon" />
                </template>
              </a-button>
              <span class="font-date"
                ><CalendarOutlined class="fix-icon mx-2" />{{ project.publishDate }}</span
              >
            </div>
          </div>
        </a-card>
      </div>
    </div>

    <perso-div :padding-value="4" class="text-center">
        <a-button size="large" class="outline-slide-team"><PlusCircleFilled class="fix-icon"/> Proposer un projet </a-button>
    </perso-div>
  </div>
</template>

<script setup>
import { allProjects, statusProject } from "~/core/constant";
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

.image-wrapper {
  position: relative;
}

/* TAGS ROW */

.tags-wrapper {
  position: absolute; /* si c’est un overlay */
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.font-title {
  font-weight: bold;
  font-family: var(--font-display) !important;
}

.project-detail {
  font-family: var(--font-display) !important;
}

.font-date {
  font-family: var(--font-display) !important;
  font-size: 0.8rem;
  font-weight: bold;
}

.status-tag-not-start {
  font-weight: 600;
  border-radius: 20px;
  font-family: var(--font-display) !important;
  background: red !important;
  color: white !important;
  font-weight: 600;
  border-color: red;
  font-size: 0.8rem;
}

.status-tag-finish {
  font-weight: 600;
  border-radius: 20px;
  font-family: var(--font-display) !important;
  background: #10b981 !important;
  color: white !important;
  font-weight: 600;
  border-color: #10b981;
  font-size: 0.8rem;
}

.status-tag-in-progress {
  font-weight: 600;
  border-radius: 20px;
  font-family: var(--font-display) !important;
  background: #f59e0b !important;
  color: white !important;
  font-weight: 600;
  border-color: #f59e0b;
  font-size: 0.8rem;
}

/* CAMPUS TAG */
.campus-tag {
  font-family: var(--font-display) !important;
  background: rgba(0, 0, 0, 0.786) !important;
  color: white !important;
  font-weight: 600;
  font-size: 0.8rem;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 20px;
  border-color: black;
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

  .font-date {
    font-size: 0.8rem !important;
  }

  .campus-tag {
    font-family: var(--font-display) !important;
    background: rgba(0, 0, 0, 0.786) !important;
    color: white !important;
    font-weight: 600;
    font-size: 0.9rem;
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
    border-color: black;
  }
}
</style>
