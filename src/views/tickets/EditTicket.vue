<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import GoBack from "../../components/ui/GoBack.vue";
import type { Ticket, TicketStatus } from "../../composables/useTicket";
import Button from "../../components/ui/Button.vue";
import useTicket from "../../composables/useTicket";

const { updateTicket, getTicket } = useTicket();
const route = useRoute();

const name = ref("");
const description = ref("");
const status = ref<TicketStatus>("open");
const ticketNotFound = ref(false);

onMounted(() => {
  const ticket = getTicket(route.params.ticketId as string);

  if (!ticket) {
    ticketNotFound.value = true;
    return;
  }

  name.value = ticket.name;
  description.value = ticket.description || "";
  status.value = ticket.status;
});

const submitForm = (e: SubmitEvent) => {
  e.preventDefault();
  const updatedTicket: Partial<Ticket> = {
    name: name.value,
    description: description.value,
    status: status.value,
  };

  updateTicket(route.params.ticketId as string, updatedTicket);
};
</script>

<template>
  <div
    class="flex flex-col font-grotesk gap-y-4 md:gap-y-6 justify-center items-center w-full h-full"
  >
    <div
      v-if="ticketNotFound"
      class="flex font-grotesk w-full flex-col gap-y-3 justify-center items-center"
    >
      <p class="text-xl md:text-2xl text-white">Invalid ticket id, try again</p>
      <RouterLink
        class="px-4 py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
        to="/tickets"
      >
        Go back to tickets
      </RouterLink>
    </div>

    <form v-else @submit="submitForm" class="flex flex-col gap-y-4 md:gap-y-6">
      <GoBack />
      <h2 class="text-xl md:text-2xl font-grotesk text-center">Edit ticket</h2>

      <div class="flex flex-col gap-y-2">
        <label for="name">Name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          class="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md focus:border-dark focus:outline-none"
          required
        />
      </div>

      <div class="flex flex-col gap-y-2">
        <label for="description">
          Description
          <span class="text-lighter text-xs italic">(optional)</span>
        </label>
        <input
          v-model="description"
          type="text"
          id="description"
          class="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md focus:border-dark focus:outline-none"
        />
      </div>

      <div class="flex flex-col gap-y-2">
        <label for="status">Ticket status</label>
        <select
          v-model="status"
          id="status"
          required
          class="focus:outline-dark border-none bg-cream px-4 py-2 rounded-lg"
        >
          <option
            v-for="option in ['open', 'in_progress', 'closed']"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <Button title="Submit" type="submit" />
    </form>
  </div>
</template>
