<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { RouteNames, router } from '@/router';
import { resetErrors, setErrors } from '@/helpers/errorHelper';
import { reset } from '@/services/api';
import type { AxiosError } from 'axios';

const route = useRoute();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const token = ref('');

const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

async function submit() {
  console.log(token.value);
  // resetErrors(emailError, passwordError, confirmPasswordError);
  // try {
  //   await reset({
  //     email: email.value,
  //     password: password.value,
  //     password_confirmation: confirmPassword.value,
  //     token.value
  //   });
  //   router.push({ name: RouteNames.LOGIN });
  // } catch (error) {
  //   const response = (error as AxiosError).response;
  //   if (response?.status == 422) {
  //     setErrors(response,
  //       { key: 'email', field: emailError },
  //       { key: 'password', field: passwordError },
  //       { key: 'password_confirmation', field: confirmPasswordError }
  //     )
  //   }
  // }
}

onMounted(() => {
  token.value = route.params.token as string;
  let routeEmail = route.query.email;
  if (routeEmail) {
    email.value = routeEmail as string;
  }
})
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