<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { RouteNames } from '@/router';
import { register } from '@/services/api';
import { resetErrors, setErrors } from '@/helpers/errorHelper';
import type { AxiosError } from 'axios';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

async function submit() {
  resetErrors(nameError, emailError, passwordError, confirmPasswordError);
  try {
    await register({ name: name.value, email: email.value, password: password.value, password_confirmation: confirmPassword.value });
    router.push({ name: RouteNames.LOGIN });
  } catch (error) {
    const response = (error as AxiosError).response;
    if (response?.status == 422) {
      setErrors(response,
        { key: 'name', field: nameError },
        { key: 'email', field: emailError },
        { key: 'password', field: passwordError },
        { key: 'password_confirmation', field: confirmPasswordError },
      )
    }
  }
}
</script>

<template>
  <GuestLayout>
    <AuthCard>
      <!-- Session Status -->
      <form @submit.prevent="submit">
        <!-- Name -->
        <Input id="name" label="Name" v-model="name" :error="nameError" class="block mt-1 w-full" type="text" required
          autofocus></Input>

        <!-- Email Address -->
        <Input id="email" label="Email" v-model="email" :error="emailError" class="block mt-4 w-full" type="email"
          name="email" required />

        <!-- Password -->
        <Input id="password" label="Password" v-model="password" :error="passwordError" class="block mt-4 w-full"
          type="password" required autocomplete="new-password" />

        <!-- Confirm Password -->
        <Input id="password_confirmation" label="Confirm Password" v-model="confirmPassword"
          :error="confirmPasswordError" class="block mt-1 w-full" type="password" required />

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