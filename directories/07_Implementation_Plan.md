# Implementation Plan: love.arts

## Introduction
This document is the primary execution guide for the "Artisan" AI agent. It is a living document that outlines the technical roadmap for building the love.arts platform. The project is divided into logical stages, and each stage contains a series of sequential tasks. The agent must complete all tasks within a stage, respecting their dependencies, before proceeding to the next stage. Every action must be justified by referencing the relevant documentation as mandated in `/.gemini/Main_Workflow.md`.

---

### **STAGE 1: Foundation & Environment Setup (Duration: 1-2 days)**
**Goal:** Establish a clean, working monorepo with configured client/server TypeScript applications, a live and authenticated database connection, and basic user authentication logic.
**Dependencies:** None.

| Task ID | Task Description | Key Actions & Verification | Doc References |
| :--- | :--- | :--- | :--- |
| **1.1** | Initialize Monorepo Structure | Create root `love-arts` folder, `/client`, `/server`, `/.gemini`, `/docs`. Configure npm workspaces in root `package.json`. **Verification:** Run `ls -R` to confirm all folders exist. | `03_Project_Architecture.md` |
| **1.2** | Setup Client (Vite + React + TS) | Navigate to `/client`. Run `npm create vite@latest . -- --template react-ts`. Install all required dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `react-router-dom`, `@reduxjs/toolkit`, `react-redux`, `axios`. Configure `tailwind.config.js` and `postcss.config.js`. **Verification:** Run `npm run dev` in `/client` and confirm the default Vite page loads. | `02_Tech_Stack_Decisions.md` |
| **1.3** | Setup Server (Node + Express + TS)| Navigate to `/server`. Run `npm init -y`. Install dependencies: `express`, `typescript`, `@types/express`, `ts-node`, `nodemon`, `pg`, `pg-hstore`, `sequelize`, `jsonwebtoken`, `@types/jsonwebtoken`, `bcryptjs`, `@types/bcryptjs`, `cors`, `dotenv`. Configure `tsconfig.json` for compilation output to a `/dist` directory. **Verification:** Create a basic `server.ts` that starts an Express server on `PORT` 8080 and run `npm start`. | `02_Tech_Stack_Decisions.md` |
| **1.4** | Database & ORM Setup | Create the Supabase project. Securely store the PostgreSQL connection string in a new `/server/.env` file. Create `/server/src/config/database.ts` and initialize the Sequelize instance, authenticating with the database. **Verification:** Create a temporary script to call `sequelize.authenticate()` and confirm successful connection. | `06_Database_Schema.md`, `07_Deployment_Strategy.md`|
| **1.5** | Backend User Authentication | Create `User.model.ts` in `/server/src/models` defining the `users` table schema with Sequelize. Create `auth.controller.ts` with `register` & `login` functions using `bcryptjs` and `jsonwebtoken`. Create `/server/src/api/v1/auth.routes.ts`. **Verification:** Test endpoints with a REST client (e.g., cURL, Postman). | `05_API_Specification.md`, `06_Database_Schema.md` |
| **1.6** | Auth Middleware | Create `requireAuth.ts` in `/server/src/middleware`. It should verify the JWT from the `Authorization: Bearer <token>` header. If valid, it will attach the user payload to the request object (`req.user`). **Verification:** Apply this middleware to a test route and ensure it correctly protects the route. | `05_API_Specification.md` |

---

### **STAGE 2: Core Application Features (Duration: 3-5 days)**
**Goal:** Implement the full user authentication flow on the frontend and the core project management dashboard.
**Dependencies:** Stage 1 completion.

| Task ID | Task Description | Key Actions & Verification | Doc References |
| :--- | :--- | :--- | :--- |
| **2.1** | Frontend Auth UI & State | Create `RegisterPage.jsx` and `LoginPage.jsx`. Implement forms using components (`Button`, `Input`) that adhere to the design system. Create `authSlice.ts` in the Redux store (`/client/src/store`) to manage user state, token, and authentication status. | `04_UI_UX_Design_System.md` |
| **2.2** | Connect Frontend Auth to API | In `authSlice.ts`, create async thunks (`registerUser`, `loginUser`) that use an Axios instance from `/client/src/api/api.ts` to call the `/auth/register` and `/auth/login` endpoints. Handle success (store token in local storage) and error states. **Verification:** A user can successfully register and log in via the UI. | `05_API_Specification.md` |
| **2.3** | Backend Project CRUD API | Create `Project.model.ts` following the schema. Create `project.controller.ts` with `create`, `findAll`, `delete` functions. Create `project.routes.ts` and protect all endpoints with the `requireAuth` middleware. **Verification:** Test all project endpoints with a valid JWT. | `05_API_Specification.md`, `06_Database_Schema.md` |
| **2.4** | Frontend Dashboard UI | Create `DashboardPage.jsx`. Implement the UI showing a grid of `ProjectCard.jsx` components and a "Create New Project" button/modal, following the design system precisely. | `04_UI_UX_Design_System.md` |
| **2.5** | Connect Frontend Dashboard | Create `projectSlice.ts` in the Redux store. Implement async thunks (`fetchProjects`, `createProject`) that call the backend project APIs. The `DashboardPage` should use these to display and create projects. **Verification:** A logged-in user can create a new project via the UI, and it appears on their dashboard. | `03_Project_Architecture.md` |

---

### **STAGE 3: AI Core Generator (Duration: 5-7 days)**
**Goal:** Implement the platform's core value proposition: generating a UI from a natural language prompt.
**Dependencies:** Stage 2 completion.

| Task ID | Task Description | Key Actions & Verification | Doc References |
| :--- | :--- | :--- | :--- |
| **3.1** | AI Service Backend | Create `/server/src/services/gemini.service.ts`. This module will abstract all communication with the external Gemini API. It will have a function that takes a user prompt and returns a structured JSON object representing the UI component tree. | `02_Tech_Stack_Decisions.md` |
| **3.2** | UI Generation API Endpoint | Create a new route and controller for `POST /api/v1/generate/ui`. This endpoint should be protected and will take a text prompt in the request body, pass it to `gemini.service.ts`, and return structured component data (e.g., JSON). | `05_API_Specification.md` |
| **3.3**| Editor Interface UI | Create a new `ProjectPage.jsx`. Implement the main three-panel layout (file tree, editor, preview) as specified in `04_UI_UX_Design_System.md`. The bottom prompt bar should be the central interaction point. | `04_UI_UX_Design_System.md` |
| **3.4** | Real-time Preview Engine | The preview panel must be able to receive a JSON object (from the `/generate/ui` endpoint) and dynamically render a tree of React components from it. Start with basic components like `div`, `p`, `button`. **Verification:** A user can type "create a button with text 'Click Me'" and see it appear in the preview. | `01_PRD.md` (FR-4) |

---

### **STAGE 4: V2 Features & Production Deployment (Duration: 3-4 days)**
**Goal:** Add planned V2 features and make the application production-ready by setting up a professional deployment pipeline.
**Dependencies:** Stage 3 completion.

| Task ID | Task Description | Key Actions & Verification | Doc References |
| :--- | :--- | :--- | :--- |
| **4.1** | GitHub Integration | Implement the OAuth flow for GitHub. Create backend services to use the GitHub API for creating and pushing to repositories. | `01_PRD.md` (FR-5) |
| **4.2** | Containerize Application | Create `Dockerfile` in `/client` (multi-stage build with Nginx). Create `Dockerfile` in `/server`. | `07_Deployment_Strategy.md` |
| **4.3** | CI/CD Pipeline | Create `.github/workflows/deploy.yml`. The pipeline must run tests, build images, push to a container registry, and deploy to GCP Cloud Run. | `07_Deployment_Strategy.md` |
| **4.4** | Final Security & Performance Review | Manually review all middleware, RLS policies, and input sanitization. Ensure all secrets are correctly handled via environment variables and are not exposed on the client. Run a Lighthouse audit on the frontend. **Verification:** Application is secure and performs well. | `01_PRD.md` (NFRs) |