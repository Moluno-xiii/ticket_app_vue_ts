<script setup lang="ts">
import router from "../../router";

if (router.currentRoute.value.fullPath === "/dashboard/") {
  router.push("/dashboard/overview");
}
</script>

<template>
  <div class="flex flex-row gap-x-5">
    <div class="bg-cyan-300">dashboard</div>
    <router-view />
  </div>
</template>
