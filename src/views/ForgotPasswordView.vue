<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { resetErrors, setErrors } from '@/helpers/errorHelper';
import { useToast } from 'vue-toastification';
import { forgot } from '@/services/api';
import { RouteNames } from '@/router';

const email = ref('');
const emailError = ref('');
const toast = useToast();
const router = useRouter();

async function submit() {
  resetErrors(emailError);
  try {
    await forgot(email.value);
    toast.success('Reset link sent to your email.');
    router.push({ name: RouteNames.LOGIN });
  } catch (error) {
    setErrors(error, { key: 'email', field: emailError });
  }
}
</script>

<template>
  <GuestLayout>
    <AuthCard>
      <div class="mb-4 text-sm text-gray-600 text-justify">
        Forgot your password? No problem. Just let us know your email address and we will email you a password reset
        link that will allow you to choose a new one.
      </div>
      <!-- Session Status -->
      <form @submit.prevent="submit">

        <!-- Email -->
        <Input id="email" label="Email" v-model="email" :error="emailError" class="block mt-1 w-full" type="email"
          required autofocus></Input>

        <div class="flex items-center justify-end mt-4">
          <Button>
            Email Password Reset Link
          </Button>
        </div>
      </form>
    </AuthCard>
  </GuestLayout>
</template>