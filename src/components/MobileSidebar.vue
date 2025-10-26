<script setup lang="ts">
import { Io5Close } from "vue-icons-plus/io5";
import Button from "./ui/Button.vue";

type Props = {
  closeSidebar: () => void;
  openLogoutModal: () => void;
};

defineProps<Props>();

const mobileNavs: { name: string; route: string }[] = [
  {
    name: "Dashboard",
    route: "/dashboard/overview",
  },
  {
    name: "Settings",
    route: "/dashboard/settings",
  },
  {
    name: "Tickets",
    route: "/tickets",
  },
];
</script>

<template>
  <nav
    class="bg-cream drop-shadow-md rounded-md border flex sm:hidden flex-col gap-y-5 z-20 min-w-[200px] border-primary p-3 fixed left-3 bottom-3 top-24"
  >
    <Io5Close
      class="self-end text-red-500 cursor-pointer"
      @click="closeSidebar"
    />
    <ul class="flex flex-col gap-y-5 text-center flex-1">
      <li
        v-for="nav in mobileNavs"
        :key="nav.route"
        @click="closeSidebar"
        class="hover:underline transition-all duration-300 p-2 bg-cream border-primary border text-dark [&.active]:text-white [&.active]:bg-primary rounded-md block w-full"
      >
        <RouterLink :to="nav.route">
          {{ nav.name }}
        </RouterLink>
      </li>
    </ul>
    <Button title="Logout" variant="error" @click="openLogoutModal" />
  </nav>
</template>
