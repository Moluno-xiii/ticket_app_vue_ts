<script setup lang="ts">
const features = [
  "Save tickets seamlessly",
  "Secure Authentication",
  "Manage tickets efficiently with our modern dashboard",
  "Sleek, seamless Interface and Experience",
];
</script>

<template>
  <section
    aria-labelledby="Application features"
    class="border bg-cream/50 border-primary shadow-dark shadow-xl text-dark rounded-md"
  >
    <h2 class="text-center text-xl md:text-2xl font-grotesk">Features</h2>
    <ul
      class="flex list-disc flex-col gap-y-2 text-start py-4 px-4 sm:px-6 font-macondo text-lg sm:text-xl"
    >
      <li v-for="feature in features" :key="feature">
        {{ feature }}
      </li>
    </ul>
  </section>
</template>
