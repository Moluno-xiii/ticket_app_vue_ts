<script setup lang="ts">
import router from "../../router";

if (
  router.currentRoute.value.fullPath === "/auth/" ||
  router.currentRoute.value.fullPath === "/auth"
) {
  router.push("/auth/login");
}
</script>

<template>
  <div class="flex-1 flex">
    <router-view />
  </div>
</template>
