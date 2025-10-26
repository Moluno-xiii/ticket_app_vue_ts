<script setup lang="ts">
import { Io5TicketOutline } from "vue-icons-plus/io5";
import useAuth from "../../composables/useAuth";
import Button from "./Button.vue";

const { isLoggedIn, logout } = useAuth();
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
    <Button v-if="isLoggedIn" title="Logout" variant="error" @click="logout" />
  </header>
</template>
