<template>
  <ClientOnly>
      <AppLoaderLoad v-if="loading" />
      <FooterPage v-else />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const loading = useState<boolean>("globalLoading", () => true);

onMounted(() => {
  // Delay pour le loader
  setTimeout(() => {
    loading.value = false;
  }, 500);


});
</script>
