<script setup lang="ts">
import { defineProps } from 'vue';
// defineProps<{ forId: string }>();
</script>

<template>
  <label class="block font-medium text-sm text-gray-700">
    <slot></slot>
  </label>
</template>