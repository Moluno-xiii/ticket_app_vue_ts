import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tickets from "../views/tickets/Tickets.vue";
import TicketDetails from "../views/tickets/TicketDetails.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import Dashboard from "../views/dashboard/Dashboard.vue";
import Overview from "../views/dashboard/Overview.vue";
import Settings from "../views/dashboard/Settings.vue";
import Auth from "../views/auth/Auth.vue";
import NewTicket from "../views/tickets/NewTicket.vue";
import EditTicket from "../views/tickets/EditTicket.vue";

const routes = [
  {
    path: "/",
    name: "Ticketier",
    component: Home,
  },
  {
    path: "/tickets",
    name: "Ticketier | Tickets page",
    component: Tickets,
  },
  {
    path: "/tickets/:ticketId",
    name: "Ticketier | Ticket Details",
    component: TicketDetails,
  },
  {
    path: "/tickets/new",
    name: "Ticketier | Create new Ticket",
    component: NewTicket,
  },
  {
    path: "/tickets/edit",
    name: "Ticketier | Edit ticket",
    component: EditTicket,
  },
  {
    path: "/dashboard",
    name: "Ticketier | Dashboard",
    component: Dashboard,
    children: [
      {
        path: "overview",
        name: "Dashboard Overview",
        component: Overview,
      },
      {
        path: "settings",
        name: "Dashboard Settings",
        component: Settings,
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    children: [
      {
        path: "login",
        name: "Ticketier | Login",
        component: Login,
      },
      {
        path: "signup",
        name: "Ticketier | Signup",
        component: Signup,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "font-bold",
});

export default router;
