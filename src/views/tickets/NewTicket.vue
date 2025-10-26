<script setup lang="ts">
import { ref } from "vue";
import GoBack from "../../components/ui/GoBack.vue";
import type { Ticket, TicketStatus } from "../../composables/useTicket";
import Button from "../../components/ui/Button.vue";
import useTicket from "../../composables/useTicket";

const { createTicket } = useTicket();
const name = ref("");
const description = ref("");
const status = ref<TicketStatus>("open");

const submitForm = (e: SubmitEvent) => {
  e.preventDefault();
  const newTicket: Omit<Ticket, "dateCreated" | "id"> = {
    name: name.value,
    description: description.value,
    status: status.value,
  };
  console.log(newTicket);
  createTicket(newTicket);
};
</script>

<template>
  <div
    class="flex flex-col font-grotesk gap-y-4 md:gap-y-6 justify-center items-center w-full h-full"
  >
    <h2 class="text-xl md:text-2xl font-grotesk">Create new ticket</h2>
    <form v-on:submit="submitForm" class="flex flex-col gap-y-4 md:gap-y-6">
      <GoBack />
      <div class="flex flex-col gap-y-2">
        <label htmlFor="name">Name</label>
        <input
          v-model="name"
          type="text"
          class="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md focus:border-dark focus:outline-none"
          name="name"
          required
        />
      </div>

      <div class="flex flex-col gap-y-2">
        <label htmlFor="description">
          Description{{ " " }}
          <span class="text-lighter text-xs italic">(optional)</span>
        </label>
        <input
          v-model="description"
          type="text"
          class="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md focus:border-dark focus:outline-none"
          name="description"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <label htmlFor="status">Ticket status </label>
        <select
          v-model="status"
          name="status"
          required
          class="focus:outline-dark border-none bg-cream px-4 py-2 rounded-lg"
        >
          <option
            v-for="option in ['in_progress', 'open', 'closed']"
            :value="option"
            :id="option"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <Button title="Submit" type="submit" />
    </form>
  </div>
</template>
