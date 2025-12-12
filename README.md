# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend (MySQL + Node/Express)

This project includes a minimal backend API in `server/` that uses MySQL and Express.

Quick steps to get it running locally:

1. Install MySQL (or use Docker). Create a database and user or use the provided `server/schema.sql` to create the database and tables:

```sql
-- run this after you have mysql access
SOURCE server/schema.sql;
```

2. Copy `server/.env.example` to `server/.env` and update values (DB credentials, port).

3. Install server dependencies and start the server:

```bash
cd server
npm install
npm run dev
```

4. The server runs on the port from `.env` (default 4000). Example endpoints:

- GET /api/ping — health check
- GET /api/users — list users
- POST /api/users — create user (JSON body: { name, email })

If you prefer Docker, create a MySQL container and point `server/.env` at it. The `server/schema.sql` file will create the `baigiamasis_db` and `users` table.

Notes:

- The backend is intentionally minimal. For production, add input validation, authentication, prepared migrations, and careful error handling.
