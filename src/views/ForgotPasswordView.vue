<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import AuthCard from '@/components/AuthCard.vue';
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

function submit() {

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
      <!-- Validation Errors -->
      <form @submit.prevent="submit">

        <!-- Email -->
        <div>
          <Label for="email">Email</Label>
          <Input id="email" class="block mt-1 w-full" type="email" required autofocus></Input>
        </div>

        <div class="flex items-center justify-end mt-4">
          <Button>
            Email Password Reset Link
          </Button>
        </div>
      </form>
    </AuthCard>
  </GuestLayout>
</template>