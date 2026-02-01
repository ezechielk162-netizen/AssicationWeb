<template>
  <!-- Section du héro -->
  <HeroImageSection />

  <!-- Section de la présentation -->
  <PersoDiv>
    <PresentationSection button-title="body.presentation.button" />
    <PresentationCard
      class="pt-2"
      title="body.presentation.title"
      subtitle="body.presentation.subtitle"
    />
    <PresentationGoal />
  </PersoDiv>

  <!-- Section de la misson -->
  <PersoDiv :padding-value="4">
    <PresentationSection button-title="body.goal.button" />
    <PresentationCard
      class="pt-2"
      title="body.goal.title"
      subtitle="body.goal.subtitle"
    />
    <SecondSectionCard />
  </PersoDiv>

    <!-- Section des membres -->
    <PersoDiv :padding-value="4">
    <PresentationSection button-title="body.members.button" />
    <PresentationCard
      class="pt-2"
      title="body.goal.title"
      subtitle="body.goal.subtitle"
    />
    <MembersSection />
  </PersoDiv>

  <!-- Section des projets -->
  <PersoDiv :padding-value="4">
    <PresentationSection button-title="body.members.button" />
    <PresentationCard
      class="pt-2"
      title="body.goal.title"
      subtitle="body.goal.subtitle"
    />
    <ProjectsArticle />
  </PersoDiv>
</template>

<script lan="ts" setup></script>
