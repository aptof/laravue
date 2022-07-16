<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { RouterLink } from 'vue-router';
import { RouteNames } from '@/router';

function submit() {

}
</script>

<template>
  <GuestLayout>
    <AuthCard>
      <template #logo>
        <ApplicationLogo class="w-20 h-20 fill-current text-gray-500"></ApplicationLogo>
      </template>

      <!--Session Status-->
      <!--Validation Errors-->
      <form @submit.prevent="submit">

        <!-- Email Address -->
        <div>
          <Label for="email">Email</Label>
          <Input id="email" class="block mt-1 w-full" type="email" required autofocus></Input>
        </div>

        <!-- Password -->
        <div class="mt-4">
          <Label for="password">Password</Label>
          <Input id="password" class="block mt-1 w-full" type="password" required
            autocomplete="current-password"></Input>
        </div>

        <!-- Remember me -->
        <div class="block mt-4">
          <label for="remember-me" class="inline-flex items-center">
            <input id="remember-me" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <span class="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div class="flex items-center justify-end mt-4">

          <router-link class="underline text-sm text-gray-600 hover:text-gray-900" :to="{ name: RouteNames.RESET }">
            Forgot your password?
          </router-link>


          <Button class="ml-3">
            Log in
          </Button>
        </div>
      </form>
    </AuthCard>
  </GuestLayout>
</template>