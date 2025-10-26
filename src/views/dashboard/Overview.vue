<script setup lang="ts">
import { ref, computed } from "vue";
import useTicket, { type Ticket } from "../../composables/useTicket";
import TicketDisplay from "../../components/TicketDisplay.vue";
import TicketsStatistics from "../../components/TicketsStatistics.vue";

export type TicketStatus = "in_progress" | "open" | "closed" | "all";

const { tickets } = useTicket();
const currentFilter = ref<TicketStatus>("all");

const getTicketsByStatus = (status: TicketStatus): Ticket[] => {
  if (status === "all") return tickets.value;
  return tickets.value.filter((ticket) => ticket.status === status);
};

const filteredTickets = computed(() => getTicketsByStatus(currentFilter.value));
</script>

<template>
  <div class="flex flex-col gap-y-5 h-full w-full">
    <header class="flex flex-row justify-between items-center">
      <h2 class="text-xl md:text-2xl font-grotesk text-primary">Overview</h2>
      <Link
        class="px-4 max-sm:text-sm py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
        to="/tickets"
      >
        Tickets management
      </Link>
    </header>
    <section aria-labelledby="tickets display section" class="flex-1 h-full">
      <section
        aria-labelledby="ticket details section"
        class="flex flex-col gap-y-4 md:gap-y-6"
        v-if="tickets.length > 0"
      >
        <TicketsStatistics
          :get-tickets-by-status="getTicketsByStatus"
          :tickets="tickets"
        />
        <div class="flex flex-row justify-end gap-x-4 items-center">
          <p>Filter by :</p>
          <select
            name="ticket_filter"
            class="focus:outline-dark border-none capitalize bg-primary/70 px-4 py-2 rounded-lg"
            v-model="currentFilter"
          >
            <option value="all">all</option>
            <option value="open">open</option>
            <option value="in_progress">in progress</option>
            <option value="closed">closed</option>
          </select>
        </div>
        <ul
          v-if="filteredTickets.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          <TicketDisplay
            v-for="ticket in filteredTickets"
            :ticket="ticket"
            :key="ticket.id"
          />
        </ul>
        <p v-else class="text-center text-xl md:text-2xl font-macondo">
          No {{ currentFilter }} tickets yet.
        </p>
      </section>
      <div
        v-else
        class="flex flex-col gap-y-2 items-center justify-center flex-1 h-full"
      >
        <p class="text-xl md:text-3xl text-white">No Tickets Yet</p>
        <Link
          class="px-4 py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
          to="/tickets/new"
        >
          Create new ticket
        </Link>
      </div>
    </section>
  </div>
</template>
