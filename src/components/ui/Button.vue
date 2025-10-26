<script setup lang="ts">
interface PropTypes {
  title: string;
  additionalStyles?: string;
  onClick?: () => void;
  variant?: "default" | "error";
}

const props = defineProps<PropTypes>();
</script>

<template>
  <button
    v-bind="props"
    :class="[
      additionalStyles,
      'bg-primary px-4 py-2 rounded-lg flex flex-row items-center justify-center gap-4 max-sm:text-sm transition-all duration-300 cursor-pointer hover:bg-primary/80',
      variant === 'error' && 'bg-red-600 hover:bg-red-600/80',
    ]"
  >
    {{ title }}
  </button>
</template>
