<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { RouteNames } from '@/router';
import type { AxiosError, } from 'axios';
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { login, csrf } from '@/services/api';
import type { User } from '@/models';
import { resetErrors, setErrors } from '@/helpers/errorHelper';

const router = useRouter();

const email = ref('');
const password = ref('');
const remember = ref(false);

const emailError = ref('');
const passwordError = ref('');

async function submit() {
  resetErrors(emailError, passwordError);
  const user: User = { email: email.value, password: password.value, remember: remember.value };
  try {
    await login(user);
    router.push({ name: RouteNames.DASHBOARD });
  } catch (error) {
    const response = (error as AxiosError).response;
    if (response?.status == 422) {
      setErrors(response,
        { key: 'email', field: emailError },
        { key: 'password', field: passwordError }
      )
    }
  }
}

onMounted(async () => {
  await csrf();
});
</script>

<template>
  <GuestLayout>
    <AuthCard>
      <!-- Session Status -->
      <form @submit.prevent="submit">

        <!-- Email Address -->
        <Input id="email" label="Email" class="mt-1 w-full" type="email" v-model="email" :error="emailError" required
          autofocus></Input>


        <!-- Password -->
        <Input id="password" class="block mt-4 w-full" type="password" label="Password" v-model="password"
          :error="passwordError" required autocomplete="current-password"></Input>

        <!-- Remember me -->
        <div class="block mt-4">
          <label for="remember-me" class="inline-flex items-center">
            <input id="remember-me" type="checkbox" v-model="remember"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <span class="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div class="flex items-center justify-end mt-4">
          <router-link class="underline text-sm text-gray-600 hover:text-gray-900" :to="{ name: RouteNames.FORGOT }">
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