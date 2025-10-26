# Ticketier

A ticket management platform for my Frontend stage 2 task for HNG 13.

## Task details

- Implement a functional ticket management platform with mock authentication and functional dashboard.
- Implement in 3 technologies (React, Twig, Vue)
- Auth with route protection.

## Other Implementations

- [React Implementation Repository](https://github.com/Moluno-xiii/ticket_app_react_ts)
- [React Implementation Live link](https://ticket-app-react-ts.vercel.app/)

## Features

- Dashboard to display ticket data and summary
- CRUD ticket with status (in_progress, open, closed) with appropriate color tagging.
- Mock Authentication with Local storage

## Pages

- Auth pages (/auth/signup, /auth/login)
- Home page (/)
- Dashboard (/dashboard)
- Dashboard Overview (/dashboard/overview)
- Dashboard settings (/dashboard/settings)
- Tickets (/tickets)
- Ticket details (/tickets/$ticket_id)
- Create new ticket (/tickets/new)
- Edit ticket (/tickets/edit/ticket_id)

## Technologies used

- Vue router
- Vue (with Vite)
- Vue Sonner
- Tailwind css

### Run locally

```bash
git clone https://github.com/Moluno-xiii/ticket_app_vue_ts
cd ticket_app_vue_ts
pnpm install
pnpm dev
```
