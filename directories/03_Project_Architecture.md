# Project Architecture: love.arts

## 1. High-Level Diagram
graph TD
    User -->|Browser| A[Client: React/Vite on GCP Bucket]
    A -->|API Calls via HTTPS| B[Server: Node/Express on GCP Cloud Run]
    B -->|User/Project Data| C[Database: PostgreSQL on Supabase]
    B -->|Generate Code| D[AI Service: Gemini API]

## 2. Monorepo Directory Structure
/love-arts
|-- /.gemini/               # AI Agent Directives
|-- /docs/                  # Project Documentation
|-- /client/                # React Frontend
|   |-- /public/
|   |-- /src/
|   |   |-- /api/           # Axios client and API call definitions (e.g., authApi.ts, projectApi.ts)
|   |   |-- /assets/        # Images, fonts, static assets
|   |   |-- /components/    # Reusable UI components (e.g., /Button, /Card, /Input)
|   |   |-- /hooks/         # Custom React hooks (e.g., useAuth.ts)
|   |   |-- /layouts/       # Main app layouts (e.g., DashboardLayout.jsx, AuthLayout.jsx)
|   |   |-- /pages/         # Top-level page components (HomePage.tsx, DashboardPage.tsx)
|   |   |-- /store/         # Redux Toolkit (store.ts, authSlice.ts, projectSlice.ts)
|   |   `-- /utils/         # Helper functions
|   |-- .eslintrc.cjs
|   |-- package.json
|   `-- vite.config.js
`-- /server/                # Express Backend
    |-- /src/
    |   |-- /api/           # Versioned API routes (/v1)
    |   |-- /config/        # database.ts, jwt.config.ts
    |   |-- /controllers/   # auth.controller.ts, project.controller.ts
    |   |-- /middleware/    # requireAuth.ts
    |   |-- /models/        # Sequelize models (User.ts, Project.ts)
    |   `-- /services/      # gemini.service.ts
    |-- .env.example
    |-- package.json
    `-- server.ts