<script setup lang="ts">
import type { Ticket } from "../composables/useTicket";

defineProps<{ ticket: Ticket }>();
</script>

<template>
  <li
    :key="ticket.id"
    class="drop-shadow-md p-2 flex flex-col font-poppins bg-cream rounded-md"
  >
    <header class="flex flex-row justify-between items-center">
      <p class="text-xl md:text-2xl text-dark font-grotesk">
        {{
          ticket.name.length > 30
            ? ticket.name.slice(0, 30) + "..."
            : ticket.name
        }}
      </p>

      <span
        :class="[
          'border rounded-md px-4 py-1 cursor-pointer hover:scale-x-110 hover:scale-y-110 transition-all duration-200',
          ticket.status === 'in_progress'
            ? 'border-amber-400 text-amber-400'
            : ticket.status === 'open'
            ? 'border-green-400 text-green-400'
            : 'border-gray-400 text-gray-400',
        ]"
      >
        {{ ticket.status }}
      </span>
    </header>

    <div class="flex flex-1 flex-col gap-y-2">
      <p v-if="ticket.description" class="flex-1">
        {{
          ticket.description.length > 60
            ? ticket.description.slice(0, 60) + "..."
            : ticket.description
        }}
      </p>
      <p v-else class="text-gray-400 italic">No description</p>

      <p>Date Created : {{ ticket.dateCreated }}</p>
    </div>
  </li>
</template>
