# UI/UX Design System: love.arts

## 1. Design Philosophy & Keywords
- **Core Principles:** Minimalist, Artistic, Intuitive, Fast.
- **Keywords:** Clean, Inspiring, Uncluttered, Modern, Creative Flow.

## 2. Brand Identity & Color Palette
- **Logo:** A stylized heart (`<3`) merging with a code bracket (`</>`).
- **Colors:**
  - **Primary:** `slate-blue` (#6A5ACD) - Used for primary actions, headers.
  - **Accent:** `hot-pink` (#FF69B4) - Used for highlights, active states, and important CTAs.
  - **Background:** `white-smoke` (#F5F5F5) - Main page background.
  - **Surface:** `white` (#FFFFFF) - For cards and modals.
  - **Text:** `dark-gray` (#333333) - Primary text.
  - **Subtle-Text:** `medium-gray` (#888888) - For placeholders and secondary info.
  - **Borders:** `light-gray` (#DDDDDD) - For dividers and input borders.
  - **Success:** `success-green` (#4CAF50) - For success notifications.
  - **Error:** `error-red` (#F44336) - For error messages.

## 3. Typography
- **Font Family:** 'Poppins' for headings, 'Inter' for body.
- **Scale:** h1 (3rem, bold), h2 (2.25rem, bold), h3 (1.5rem, semibold), body (1rem, regular), small (0.875rem, regular).

## 4. Component System (with States)

| Component | Default State | Hover State | Active/Focus State | Disabled State |
| :--- | :--- | :--- | :--- | :--- |
| **Button** | `bg-slate-blue`, `text-white`, rounded-lg, `transition-all` | `bg-opacity-90`, `box-shadow-md` | `transform: scale(0.98)` | `bg-gray-300`, `cursor-not-allowed` |
| **Input** | `border-b-2`, `border-light-gray` | - | `border-slate-blue`, `outline-none` | `bg-gray-100` |
| **Project Card**| `bg-white`, `border`, `rounded-xl`, `transition-all` | `box-shadow-lg`, `transform: translateY(-4px)` | - | - |

## 5. Layout & Spacing
- **Grid System:** 12-column grid.
- **Spacing Unit:** 1 unit = 0.25rem (4px). Use multiples (4, 8, 12, 16, 24, 32px).
- **Z-Index:** Modals (z-50), Dropdowns (z-40), Navbar (z-30).