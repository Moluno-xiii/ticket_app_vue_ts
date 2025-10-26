import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { Toaster } from "vue-sonner";

// createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(router);
app.component("Toaster", Toaster);
app.mount("#app");
