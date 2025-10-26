<script setup lang="ts">
import { ref } from "vue";
import useTicket from "../../composables/useTicket";
import { RouterLink } from "vue-router";
import TicketComponent from "../../components/TicketComponent.vue";

// defineProps<{ msg: string }>();
const currentlyActiveTicket = ref("");
const { tickets } = useTicket();

const handleModal = (id: string) => {
  currentlyActiveTicket.value = id;
};
</script>

<template>
  <div class="flex flex-col gap-y-5 h-full w-full">
    <header className="flex flex-row justify-between items-center">
      <h2 className="text-lg md:text-2xl font-grotesk text-primary">
        Your Tickets ({{ tickets.length }})
      </h2>
      <RouterLink
        className="px-4 py-2  bg-primary text-white self-end rounded-md max-sm:text-sm font-grotesk hover:bg-primary/80 transition-all duration-300"
        to="/tickets/new"
      >
        Create new ticket
      </RouterLink>
    </header>
    <section
      v-if="tickets.length > 0"
      aria-labelledby="tickets display section"
      class="flex-1 h-full w-full"
    >
      <ul class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <TicketComponent
          v-for="ticket in tickets"
          :key="ticket.id"
          :ticket="ticket"
          :currently-active-ticket="currentlyActiveTicket"
          :handle-modal="handleModal"
        />
      </ul>
    </section>
    <div
      v-else
      class="flex flex-col gap-y-2 items-center w-full justify-center flex-1 h-full"
    >
      <p class="text-xl md:text-3xl text-white">No Tickets Yet</p>
      <RouterLink
        class="px-4 py-2 max-sm:text-sm bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
        to="/tickets/new"
      >
        Create new ticket
      </RouterLink>
    </div>
  </div>
</template>
