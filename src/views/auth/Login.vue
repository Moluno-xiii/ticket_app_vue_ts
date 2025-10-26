<script setup lang="ts">
import { toast } from "vue-sonner";
import Button from "../../components/ui/Button.vue";
import { ref } from "vue";
import useAuth from "../../composables/useAuth";
import { RouterLink } from "vue-router";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const { login } = useAuth();
const email = ref("");
const password = ref("");

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (!emailRegex.test(email.value)) {
    toast.error("Invalid email");
    return;
  }
  console.log("signup data", {
    password: password.value,
    email: email.value,
  });
  login({ email: email.value, password: password.value });
};
</script>

<template>
  <form
    class="flex w-full text-white justify-center items-center flex-col gap-y-5"
    v-on:submit="handleSubmit"
  >
    <h2 class="text-xl md:text-3xl">Login</h2>
    <div class="flex flex-col gap-y-2">
      <label htmlFor="email">Email</label>
      <input
        v-model="email"
        type="text"
        class="border border-white bg-white text-black rounded-md px-3 py-2 max-sm:max-w-2xs md:min-w-md focus:border-dark focus:outline-none"
        name="email"
        required
      />
    </div>
    <div class="flex flex-col gap-y-2">
      <label htmlFor="password">Password</label>
      <input
        v-model="password"
        type="password"
        class="border border-white bg-white text-black rounded-md px-3 py-2 max-sm:max-w-2xs md:min-w-md focus:border-dark focus:outline-none"
        name="password"
        required
        minLength="8"
      />
    </div>
    <Button title="Login" type="submit" />
    <p class="">
      Don't have an account?{{ " " }}
      <RouterLink
        class="hover:underline italic hover:text-primary"
        to="/auth/signup"
      >
        Signup
      </RouterLink>
    </p>
  </form>
</template>
