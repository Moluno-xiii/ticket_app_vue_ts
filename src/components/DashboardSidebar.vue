<script setup lang="ts">
import { CiLogout } from "vue-icons-plus/ci";

type Proptypes = {
  closeModal: () => void;
  openModal: () => void;
};

defineProps<Proptypes>();
</script>

<template>
  <nav
    class="bg-cream font-inter drop-shadow-xl border border-primary rounded-md p-3 hidden sm:flex z-2 flex-col"
  >
    <ul class="flex flex-col gap-y-4 w-full flex-1">
      <li class="w-full">
        <RouterLink to="/dashboard/overview" v-slot="{ isActive }">
          <div
            :class="[
              'p-2 rounded-md block transition-all duration-300 border',
              isActive
                ? 'bg-cream border-primary text-primary font-bold'
                : 'bg-primary text-white hover:bg-primary/40',
            ]"
          >
            Overview
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/dashboard/settings" v-slot="{ isActive }">
          <div
            :class="[
              'p-2 rounded-md block transition-all duration-300 border',
              isActive
                ? 'bg-cream border-primary text-primary font-bold'
                : 'bg-primary text-white hover:bg-primary/40',
            ]"
          >
            Settings
          </div>
        </RouterLink>
      </li>
    </ul>
    <button
      @click="openModal"
      aria-labelledby="logout-button"
      class="flex flex-row gap-x-2 justify-center items-center"
    >
      <span class="text-red-600">Logout</span>
      <CiLogout class="text-red-600" />
    </button>
  </nav>
</template>
