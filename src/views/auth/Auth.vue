<script setup lang="ts">
import router from "../../router";

if (router.currentRoute.value.fullPath === "/auth/") {
  router.push("/auth/login");
}
</script>

<template>
  <div class="flex flex-row gap-x-5">
    <router-view />
  </div>
</template>
