<script setup lang="ts">
import useAuth from "../composables/useAuth";
import Button from "./ui/Button.vue";

const props = defineProps<{
  closeModal: () => void;
  closeSidebar?: () => void;
}>();
const { logout } = useAuth();

const handleLogout = () => {
  if (props.closeSidebar) {
    props.closeSidebar();
  }
  logout();
  props.closeModal();
};
</script>

<template>
  <div
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div class="bg-cream text-white rounded-md shadow-xl p-6 w-[90%] max-w-sm">
      <p class="text-lg font-semibold mb-4 text-center text-black">
        Are you sure you want to logout?
      </p>
      <div class="flex flex-row gap-x-4 justify-center items-center">
        <Button title="Yes" variant="error" @click="handleLogout" />
        <Button title="No" @click="closeModal" />
      </div>
    </div>
  </div>
</template>
