<template>
  <div>
    <ClientOnly>
      <AppLoaderLoad v-if="loading" />
      <NavbarElection v-else />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const loading = useState<boolean>("globalLoading", () => true);

  onMounted(() => {
  // Delay pour le loader
  setTimeout(() => {
    loading.value = false;
  }, 500);


});
</script>

<style scoped></style>
