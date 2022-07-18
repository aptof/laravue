<script setup lang="ts">
import { onMounted } from 'vue';
import { logout, getUser } from '@/services/api';
import { useRouter } from 'vue-router';
import { RouteNames } from '@/router';
import { useUserStore } from '@/stores/userStore';
import AppLayout from '../layouts/AppLayout.vue';

const router = useRouter();
const store = useUserStore();

onMounted(async () => {
  if (!store.isLoggedIn) {
    try {
      const response = await getUser();
      store.setUser(response.data.email, response.data.name);
    } catch (error) {
      console.log('You are not logged in');
    }
  }
});
</script>

<template>
  <AppLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
      </h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            You're logged in!
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>