// composables/useTicket.ts
import { ref, watch, type Ref } from "vue";
import { toast } from "vue-sonner";
import router from "../router";

export type TicketStatus = "open" | "in_progress" | "closed";

export type Ticket = {
  id: string;
  name: string;
  description?: string;
  status: TicketStatus;
  dateCreated: string;
};

type UseTicketReturn = {
  tickets: Ref<Ticket[]>;
  createTicket: (input: Omit<Ticket, "id" | "dateCreated">) => void;
  deleteTicket: (ticketId: string) => void;
  updateTicket: (ticketId: string, updatedData: Partial<Ticket>) => void;
  getTicket: (ticketId: string) => Ticket | undefined;
};

const storedTickets = localStorage.getItem("tickets");
const tickets = ref<Ticket[]>(storedTickets ? JSON.parse(storedTickets) : []);

watch(
  tickets,
  (newTickets) => {
    localStorage.setItem("tickets", JSON.stringify(newTickets));
  },
  { deep: true }
);

export default function useTicket(): UseTicketReturn {
  const createTicket: UseTicketReturn["createTicket"] = (input) => {
    tickets.value.push({
      ...input,
      id: crypto.randomUUID(),
      dateCreated: new Date().toLocaleString(),
    });
    toast.success("Ticket created successfully");
    router.push("/tickets");
  };

  const deleteTicket: UseTicketReturn["deleteTicket"] = (ticketId) => {
    tickets.value = tickets.value.filter((t) => t.id !== ticketId);
    toast.success("Ticket deleted successfully");
  };

  const updateTicket: UseTicketReturn["updateTicket"] = (
    ticketId,
    updatedData
  ) => {
    tickets.value = tickets.value.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, ...updatedData } : ticket
    );
    toast.success("Ticket updated successfully");
    router.push("/tickets");
  };

  const getTicket: UseTicketReturn["getTicket"] = (ticketId) =>
    tickets.value.find((t) => t.id === ticketId);

  return { tickets, createTicket, deleteTicket, updateTicket, getTicket };
}
