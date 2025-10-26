<script setup lang="ts">
// defineProps<{ msg: string }>();
</script>

<template>
  <header
    class="border-primary z-50 shadow-xl font-grotesk border sticky flex flex-row justify-between items-center top-4 rounded-lg px-4 py-3 bg-cream"
  >
    <RouterLink
      to="/"
      class="[&.active]:font-bold [&.active]:text-xl flex flex-row gap-x-1 items-center hover:underline transition-all duration-300 p-2 text-primary rounded-md"
    >
      Home
    </RouterLink>
    <RouterLink
      to="/tickets"
      class="[&.active]:font-bold [&.active]:text-xl flex flex-row gap-x-1 items-center hover:underline transition-all duration-300 p-2 text-primary rounded-md"
      >Tickets</RouterLink
    >
  </header>
</template>
