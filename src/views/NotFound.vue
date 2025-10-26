<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col justify-center w-full font-inter items-center gap-y-3 h-full"
    aria-labelledby="Error 404 page"
  >
    <p class="text-red-600 text-xl md:text-2xl text-center">
      Error, page not found
    </p>
    <RouterLink
      class="px-4 max-sm:text-sm py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
      to="/"
    >
      Back to homepage
    </RouterLink>
  </div>
</template>
