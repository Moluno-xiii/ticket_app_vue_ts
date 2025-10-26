<script setup lang="ts">
import { computed } from "vue";
import type { Ticket } from "../composables/useTicket";
import DeleteTicketModal from "./DeleteTicketModal.vue";

type Props = {
  ticket: Ticket;
  currentlyActiveTicket: string;
  handleModal: (id: string) => void;
};
const props = defineProps<Props>();
// const emit = defineEmits(["delete"]);

const truncatedName = computed(() =>
  props.ticket.name.length > 30
    ? props.ticket.name.slice(0, 30) + "..."
    : props.ticket.name
);

const truncatedDescription = computed(() =>
  props.ticket.description && props.ticket.description.length > 60
    ? props.ticket.description.slice(0, 60) + "..."
    : props.ticket.description
);

const statusClass = computed(() => {
  switch (props.ticket.status) {
    case "in_progress":
      return "border-amber-400 text-amber-400";
    case "open":
      return "border-green-400 text-green-400";
    default:
      return "border-gray-400 text-gray-400";
  }
});
</script>

<template>
  <li
    v-if="ticket.id !== currentlyActiveTicket"
    class="drop-shadow-md p-2 flex flex-col font-poppins bg-cream rounded-md"
  >
    <header class="flex flex-row justify-between items-center">
      <p class="text-xl md:text-2xl text-dark font-grotesk">
        {{ truncatedName }}
      </p>
      <span
        :class="[
          statusClass,
          'border rounded-md px-4 py-1 cursor-pointer hover:scale-x-110 transition-all duration-200 hover:scale-y-110',
        ]"
      >
        {{ ticket.status }}
      </span>
    </header>

    <div class="flex flex-1 flex-col gap-y-2">
      <p v-if="ticket.description" class="flex-1">
        {{ truncatedDescription }}
      </p>
      <p v-else class="text-gray-400 italic">No description</p>

      <p>Date Created : {{ ticket.dateCreated }}</p>

      <div class="flex flex-row justify-between items-center">
        <Button
          aria-label="Delete ticket button"
          title="Delete"
          variant="error"
          @click="currentlyActiveTicket = ticket.id"
        />

        <section
          aria-labelledby="ticket-cta-links"
          class="flex flex-row gap-x-3 items-center"
        >
          <RouterLink
            :to="`/tickets/${ticket.id}`"
            class="px-4 py-2 hover:bg-primary hover:border-primary border border-primary hover:text-white self-end rounded-md font-grotesk bg-cream text-primary transition-all max-sm:text-sm duration-300"
          >
            View
          </RouterLink>

          <RouterLink
            class="px-4 py-2 hover:bg-cream hover:border-primary border border-primary text-white hover:text-primary self-end rounded-md font-grotesk bg-primary transition-all max-sm:text-sm duration-300"
            :to="`/tickets/edit/${ticket.id}`"
          >
            Edit
          </RouterLink>
        </section>
      </div>
    </div>
  </li>
  <DeleteTicketModal
    v-else
    :ticket="ticket"
    :handle-modal="() => handleModal('')"
  />
</template>
