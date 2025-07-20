# API Specification (OpenAPI v3.1 inspired): love.arts

## Base URL
`/api/v1`

## Authentication
- **Type:** Bearer Token (JWT)
- **Header:** `Authorization: Bearer <token>`
- All endpoints, except `/auth/register` and `/auth/login`, require authentication.

## Endpoints

### Auth: `/auth`
---
- **POST `/auth/register`**
  - **Description:** Registers a new user.
  - **Request Body:** `{ "email": "user@example.com", "password": "securepassword" }`
  - **Success Response (201):** `{ "userId": "uuid", "email": "user@example.com" }`
  - **Error Response (409):** `{ "error": "User with this email already exists." }`

- **POST `/auth/login`**
  - **Description:** Logs in an existing user and returns a JWT.
  - **Request Body:** `{ "email": "user@example.com", "password": "securepassword" }`
  - **Success Response (200):** `{ "token": "jwt_token_string" }`
  - **Error Response (401):** `{ "error": "Invalid credentials." }`

### Projects: `/projects`
---
- **GET `/projects`**
  - **Description:** Retrieves all projects for the authenticated user.
  - **Success Response (200):** `[{ "id": "uuid", "name": "My First App", "createdAt": "timestamp" }]`

- **POST `/projects`**
  - **Description:** Creates a new project.
  - **Request Body:** `{ "name": "My New Awesome App" }`
  - **Success Response (201):** `{ "id": "uuid", "name": "My New Awesome App", "createdAt": "timestamp" }`

- **DELETE `/projects/:id`**
  - **Description:** Deletes a specific project.
  - **Success Response (204):** No content.
  - **Error Response (404):** `{ "error": "Project not found." }`