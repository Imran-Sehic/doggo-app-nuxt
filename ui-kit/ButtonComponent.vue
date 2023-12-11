<template>
  <v-btn color="primary" width="200" @click="emit('click')">
    {{ content }}
  </v-btn>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>
