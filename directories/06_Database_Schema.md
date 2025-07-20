# Database Schema: love.arts

## 1. Tables

### `users`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | Primary Key, Not Null | Unique identifier for the user. |
| `email` | `VARCHAR(255)`| Not Null, Unique | User's email address. |
| `password_hash` | `VARCHAR(255)`| Not Null | Hashed password. |
| `created_at` | `TIMESTAMPZ` | Not Null | Timestamp of creation. |

### `projects`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | Primary Key, Not Null | Unique identifier for the project. |
| `user_id` | `UUID` | Foreign Key (users.id) | Owning user. |
| `name` | `VARCHAR(255)`| Not Null | Name of the project. |
| `config` | `JSONB` | - | Stores project-specific settings. |
| `created_at` | `TIMESTAMPZ` | Not Null | Timestamp of creation. |

## 2. Relationships
- A `user` can have many `projects`.
- A `project` belongs to one `user`.