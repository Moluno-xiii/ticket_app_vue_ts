<script setup lang="ts">
import { ref } from "vue";
import router from "../../router";
import DashboardSidebar from "../../components/DashboardSidebar.vue";
import LogoutModal from "../../components/LogoutModal.vue";

if (
  router.currentRoute.value.fullPath === "/dashboard/" ||
  router.currentRoute.value.fullPath === "/dashboard"
) {
  router.push("/dashboard/overview");
}

const sidebarModal = ref(false);

const closeModal = () => {
  sidebarModal.value = false;
};
const openModal = () => {
  sidebarModal.value = true;
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-5 w-full h-full">
    <DashboardSidebar :open-modal="openModal" :close-modal="closeModal" />
    <main>
      <router-view />
    </main>
    <LogoutModal v-if="sidebarModal" :close-modal="closeModal" />
  </div>
</template>
