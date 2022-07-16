<script setup lang="ts">
import { RouterLink } from 'vue-router';
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { RouteNames } from '@/router';

function submit() {

}
</script>

<template>
  <GuestLayout>
    <AuthCard>
      <!-- Session Status -->
      <!-- Validation Errors -->
      <form @submit.prevent="submit">
        <!-- Name -->
        <div>
          <Label for="name">Name</Label>
          <Input id="name" class="block mt-1 w-full" type="text" required autofocus></Input>
        </div>

        <!-- Email Address -->
        <div class="mt-4">
          <Label for="email">Email</Label>
          <Input id="email" class="block mt-1 w-full" type="email" name="email" required />
        </div>

        <!-- Password -->
        <div class="mt-4">
          <Label for="password">Password</Label>
          <Input id="password" class="block mt-1 w-full" type="password" required autocomplete="new-password" />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
          <Label for="password_confirmation">Confirm Password</Label>

          <Input id="password_confirmation" class="block mt-1 w-full" type="password" required />
        </div>

        <div class="flex items-center justify-end mt-4">
          <router-link class="underline text-sm text-gray-600 hover:text-gray-900" :to="{ name: RouteNames.LOGIN }">
            Already registered?
          </router-link>

          <Button class="ml-4">
            Register
          </Button>
        </div>
      </form>
    </AuthCard>
  </GuestLayout>
</template>