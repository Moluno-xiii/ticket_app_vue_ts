<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import GoBack from "../../components/ui/GoBack.vue";
import useTicket from "../../composables/useTicket";

const { getTicket } = useTicket();
const route = useRoute();

const paramId = route.params.ticketId;
const ticket = getTicket(paramId as string);
</script>

<template>
  <div
    aria-labelledby="Ticket details page"
    class="flex flex-col gap-y-3 md:gap-y-6"
    v-if="ticket"
  >
    <header class="flex flex-col gap-y-2 md:gap-y-4">
      <GoBack />
      <h2 class="text-xl md:text-2xl">{{ ticket.name }}</h2>
    </header>

    <section aria-labelledby="Ticket details" class="flex flex-col gap-y-2">
      <p>Date created : {{ ticket.dateCreated }}</p>
      <p>Description : {{ ticket.description }}</p>
      <p>Status : {{ ticket.status }}</p>
    </section>
  </div>
  <div
    class="flex font-grotesk w-full flex-col gap-y-3 justify-center items-center h-full"
    v-else
  >
    <p class="text-xl md:text-2xl text-white">Invalid ticket id, try again</p>
    <RouterLink
      class="px-4 py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
      to="/tickets"
    >
      Go back to tickets page
    </RouterLink>
  </div>
</template>
