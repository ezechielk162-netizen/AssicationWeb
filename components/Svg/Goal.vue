<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" :style="{color: props.color ? props.color : 'var(--dark-bg)'}" class="icon">
    <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4" />
    <circle cx="32" cy="32" r="18" stroke="currentColor" stroke-width="4" opacity="0.6" />
    <circle cx="32" cy="32" r="7" fill="currentColor" />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    required: false
  }
})
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>
