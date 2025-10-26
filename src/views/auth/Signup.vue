<script setup lang="ts">
import { toast } from "vue-sonner";
import Button from "../../components/ui/Button.vue";
import { ref } from "vue";
import useAuth from "../../composables/useAuth";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const { signup } = useAuth();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (!emailRegex.test(email.value)) {
    toast.error("Invalid email");
    return;
  }
  if (password.value !== confirmPassword.value) {
    toast.error("Both passwords fields do not match, try again.");
    return;
  }
  signup({ email: email.value, password: password.value });
};
</script>

<template>
  <form
    class="flex w-full justify-center items-center flex-col gap-y-5"
    v-on:submit="handleSubmit"
  >
    <h2 class="text-xl md:text-3xl">Sign up</h2>
    <div class="flex flex-col gap-y-2">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        class="border border-dark bg-white text-dark rounded-md px-3 py-2 max-sm:max-w-2xs md:min-w-md active:border-primary focus:outline-none"
        name="email"
        required
        v-model="email"
      />
    </div>
    <div class="flex flex-col gap-y-2">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        class="border border-dark bg-white text-dark rounded-md px-3 py-2 max-sm:max-w-2xs md:min-w-md active:border-primary focus:outline-none"
        name="password"
        required
        v-model="password"
        minlength="8"
      />
    </div>
    <div class="flex flex-col gap-y-2">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        v-model="confirmPassword"
        type="password"
        class="border border-dark bg-white text-dark rounded-md px-3 py-2 max-sm:max-w-2xs md:min-w-md active:border-primary focus:outline-none"
        name="confirmPassword"
        required
        minLength="8"
      />
    </div>
    <Button title="Sign up" type="submit" />
    <p class="">
      Already have an account?{{ " " }}
      <RouterLink
        class="hover:underline italic hover:text-primary"
        to="/auth/login"
      >
        Login
      </RouterLink>
    </p>
  </form>
</template>
