<script setup lang="ts">
import useTicket, { type Ticket } from "../composables/useTicket";
import Button from "./ui/Button.vue";

type Props = {
  ticket: Ticket;
  handleModal: () => void;
};
const { deleteTicket } = useTicket();
defineProps<Props>();
</script>

<template>
  <div class="bg-cream text-white rounded-md shadow-xl p-3">
    <p class="text-lg font-semibold mb-4 text-center text-black">
      Are you sure you want to Delete the ticket: <br />
      ({{ ticket.name }})
    </p>
    <div class="flex flex-row gap-x-4 justify-center items-center">
      <Button
        title="Yes"
        variant="error"
        @click="() => deleteTicket(ticket.id)"
      />
      <Button title="No" @click="handleModal" />
    </div>
  </div>
</template>
