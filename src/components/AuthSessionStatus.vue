<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{ status: string }>();
</script>
<template>
  <div v-if="status" class="font-medium text-sm text-green-600">
    {{ status }}
  </div>
</template>