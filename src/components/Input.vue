<script setup lang="ts">
defineProps<{
  disabled?: boolean,
  modelValue: string | number,
  error?: string,
  type: string,
  id?: string
  label?: string
  required?: boolean,
  autocomplete?: string,
  autofocus?: boolean
}>();
defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>();
</script>

<template>
  <div>
    <label :for="id" class="block font-medium text-sm text-gray-700">{{ label }}</label>
    <input :type="type" :disabled="disabled" :id="id" class="w-full mt-1 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring
  focus:ring-indigo-200 focus:ring-opacity-50" :value="modelValue" :class="{ 'border-red-500': error }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :required="required"
      :autocomplete="autocomplete" :autofocus="autofocus">
    <p class="text-sm text-red-600">{{ error }}</p>
  </div>
</template>