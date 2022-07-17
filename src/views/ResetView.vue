<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { RouteNames } from '@/router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

function submit() {

}
</script>

<template>
  <GuestLayout>
    <AuthCard>
      <form @submit.prevent="submit">

        <!-- Password Reset Token -->

        <!-- Email Address -->
        <Input id="email" label="Email" v-model="email" :error="emailError" class="block mt-1 w-full" type="email"
          required autofocus />

        <!-- Password -->
        <Input id="password" label="Password" v-model="password" :error="passwordError" class="block mt-1 w-full"
          type="password" required />

        <!-- Confirm Password -->
        <Input id="password_confirmation" label="Confirm Password" v-model="confirmPassword"
          :error="confirmPasswordError" class="block mt-1 w-full" type="password" required />

        <div class="flex items-center justify-end mt-4">
          <Button>
            Reset Password
          </Button>
        </div>
      </form>
    </AuthCard>
  </GuestLayout>
</template>