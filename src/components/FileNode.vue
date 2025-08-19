<script setup>
defineProps({
  file: { type: Object, required: true }
});
</script>

<template>
  <div class="flex items-center space-x-1 ml-6">
    <span>📄</span>
    <span>{{ file.name }}</span>
  </div>
</template>
