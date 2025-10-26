<script setup lang="ts">
import { Io5TicketOutline } from "vue-icons-plus/io5";
import { CgMenuRightAlt } from "vue-icons-plus/cg";
import useAuth from "../../composables/useAuth";
import Button from "./Button.vue";
import { ref } from "vue";
import MobileSidebar from "../MobileSidebar.vue";
import LogoutModal from "../LogoutModal.vue";

const { isLoggedIn } = useAuth();
const sidebar = ref(false);
const isLogoutModalOpen = ref(false);

const closeSidebar = () => {
  sidebar.value = false;
};
const openSidebar = () => {
  sidebar.value = true;
};

const openLogoutModal = () => {
  isLogoutModalOpen.value = true;
};
const closeLogoutModal = () => {
  isLogoutModalOpen.value = false;
};
</script>
<template>
  <header
    class="border-primary z-50 shadow-xl font-grotesk border sticky flex flex-row justify-between items-center top-4 rounded-lg px-4 py-3 bg-cream"
  >
    <RouterLink
      to="/"
      class="flex flex-row gap-x-1 items-center hover:underline transition-all duration-300 p-2 text-primary rounded-md"
    >
      <Io5TicketOutline />
      <span>Home</span>
    </RouterLink>
    <nav v-if="isLoggedIn" class="sm:flex hidden">
      <ul class="flex flex-row justify-between items-center">
        <li>
          <RouterLink
            to="/dashboard"
            class="flex flex-row gap-x-1 items-center hover:underline transition-all duration-300 p-2 text-primary rounded-md"
            >Dashboard</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/tickets"
            class="flex flex-row gap-x-1 items-center hover:underline transition-all duration-300 p-2 text-primary rounded-md"
            >Tickets</RouterLink
          >
        </li>
      </ul>
    </nav>
    <Button
      v-if="isLoggedIn"
      title="Logout"
      variant="error"
      @click="openLogoutModal"
      additional-styles="hidden sm:block"
    />
    <MobileSidebar
      :close-sidebar="closeSidebar"
      :open-logout-modal="openLogoutModal"
      v-if="sidebar"
    />
    <CgMenuRightAlt
      v-if="isLoggedIn"
      class="text-primary block sm:hidden"
      @click="openSidebar"
    />
    <LogoutModal
      v-if="isLogoutModalOpen"
      :close-modal="closeLogoutModal"
      :close-sidebar="closeSidebar"
    />
  </header>
</template>
