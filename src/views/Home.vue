<script setup lang="ts">
// defineProps<{ msg: string }>();
import HeroFeatures from "../components/HeroFeatures.vue";
import Button from "../components/ui/Button.vue";
import useAuth from "../composables/useAuth";
import router from "../router";

const { isLoggedIn, userDetails } = useAuth();
</script>

<template>
  <div
    class="flex-1 text-center font-grotesk flex flex-col justify-center items-center gap-y-3 md:gap-y-5 text-white"
  >
    <h2 class="text-3xl md:text-4xl">
      Welcome to Ticketier,
      <span class="text-amber-400 font-macondo italic">
        {{ " " }} {{ userDetails?.name }}
      </span>
    </h2>
    <p class="italic">Your number one platform for managing tickets</p>
    <HeroFeatures />
    <Button
      v-if="isLoggedIn"
      title="Continue"
      @click="() => router.push('/dashboard')"
    />
    <Button
      v-else
      title="Get started"
      @click="() => router.push('/auth/signup')"
    />
  </div>
</template>
