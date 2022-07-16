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
      <!-- Validation Errors -->
      <form @submit.prevent="submit">

        <!-- Password Reset Token -->

        <!-- Email Address -->
        <div>
          <Label for="email">Email</Label>
          <Input id="email" class="block mt-1 w-full" type="email" required autofocus />
        </div>

        <!-- Password -->
        <div class="mt-4">
          <Label for="password">Password</Label>
          <Input id="password" class="block mt-1 w-full" type="password" required />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
          <Label for="password_confirmation">Confirm Password</Label>
          <Input id="password_confirmation" class="block mt-1 w-full" type="password" required />
        </div>

        <div class="flex items-center justify-end mt-4">
          <Button>
            Reset Password
          </Button>
        </div>
      </form>
    </AuthCard>
  </GuestLayout>
</template>