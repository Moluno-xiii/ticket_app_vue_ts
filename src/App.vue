<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";
</script>

<template>
  <div
    class="bg-[url('/wave1.svg')] min-h-dvh flex font-poppins bg-center bg-cover bg-no-repeat bg-cream px-3 py-2 md:px-6 md:py-4"
  >
    <Toaster richColors position="top-center" />
    <div class="flex min-h-full flex-col max-w-[1440px] mx-auto w-full">
      <Header />
      <main class="flex-1 flex mt-5 md:mt-7 flex-col">
        <RouterView />
      </main>
      <Footer />
    </div>
  </div>
</template>
