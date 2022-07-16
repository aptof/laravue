<script setup lang="ts">
import LaravelLogo from './LaravelLogo.vue';
import VueLogo from './VueLogo.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <div class="flex flex-row items-center">
      <LaravelLogo class="w-20 h-20 fill-current text-red-500"></LaravelLogo>
      <p class="font-bold text-4xl mx-3">+</p>
      <VueLogo class="w-20 h-20" />
    </div>
    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
      <slot></slot>
    </div>
  </div>
</template>