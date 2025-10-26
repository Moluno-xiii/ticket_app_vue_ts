<script setup lang="ts">
import { Io5ArrowBackOutline } from "vue-icons-plus/io5";
import router from "../../router";

// import { useRouter } from "vue-router";

type Props = {
  color?: string;
  additionalStyles?: string;
};

const props = defineProps<Props>();

const goBack = () => {
  router.back();
};
</script>

<template>
  <button
    type="button"
    @click="goBack"
    class="w-fit transition-all duration-200 cursor-pointer flex flex-row gap-x-3 items-center text-orange-400"
    :class="props.additionalStyles"
  >
    <Io5ArrowBackOutline />
    <p :style="{ color: props.color || 'inherit' }">Go Back</p>
  </button>
</template>
