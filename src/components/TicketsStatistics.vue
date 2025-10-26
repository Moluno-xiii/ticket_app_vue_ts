<script setup lang="ts">
import type { Ticket } from "../composables/useTicket";
import type { TicketStatus } from "../views/dashboard/Overview.vue";

type Props = {
  getTicketsByStatus: (status: TicketStatus) => Ticket[];
  tickets: Ticket[];
};
defineProps<Props>();
</script>

<template>
  <ul
    aria-labelledby="Ticket statistics"
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3"
  >
    <li className="text-dark">Total Tickets ({{ tickets.length }})</li>
    <li className="text-dark">
      Open Tickets ({{ getTicketsByStatus("open").length }})
    </li>
    <li className="text-dark">
      In progress Tickets ({{ getTicketsByStatus("in_progress").length }})
    </li>
    <li className="text-dark">
      Closed Tickets ({{ getTicketsByStatus("closed").length }})
    </li>
  </ul>
</template>
