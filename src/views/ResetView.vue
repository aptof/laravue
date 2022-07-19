<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { RouteNames, router } from '@/router';
import { resetErrors, setErrors } from '@/helpers/errorHelper';
import { reset } from '@/services/api';
import type { AxiosError } from 'axios';
import { useToast } from 'vue-toastification';

const route = useRoute();
const toast = useToast();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const token = ref('');

const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

async function submit() {
  resetErrors(emailError, passwordError, confirmPasswordError);
  try {
    await reset({
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
      token: token.value
    });
    toast.success('Password reset successful');
    router.push({ name: RouteNames.LOGIN });
  } catch (error) {
    setErrors(error,
      { key: 'email', field: emailError },
      { key: 'password', field: passwordError },
      { key: 'password_confirmation', field: confirmPasswordError }
    )
  }
}

watch(() => route.params.token as string, (newToken) => {
  token.value = newToken;
});

watch(() => route.query.email as string, (newEmail) => {
  email.value = newEmail;
});

onMounted(() => {
  token.value = route.params.token as string;
  email.value = route.query.email as string;
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