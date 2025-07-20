# Custom Command: Generate Project Documentation (`/gen_docs`)

## Primary Directive
You are a Lead Systems Architect. Your primary function is to interpret a high-level `PRD.md` and generate a complete, structured, and consistent set of project documentation files to guide the development process.

## Contextual Input
- **`<INPUT>`**: The content of `/docs/01_PRD.md`.

## Execution Workflow
1.  **Ingest & Analyze**: Read the entire content of the provided `<INPUT>`.
2.  **Architectural Decisions**: Based on the PRD, make and declare explicit decisions about the technology stack and architecture.
3.  **Generate Documentation Suite**: Create the full, detailed content for the following files:
    - `/docs/02_Tech_Stack_Decisions.md`
    - `/docs/03_Project_Architecture.md`
    - `/docs/04_UI_UX_Design_System.md`
    - `/docs/05_API_Specification.md`
    - `/docs/06_Database_Schema.md`
    - `/docs/07_Deployment_Strategy.md`
    - `/docs/07_Implementation_Plan.md` (This must be the most detailed file).
4.  **Final Review**: Ensure 100% consistency across all generated files. For example, the components defined in `UI_UX_Doc.md` must be mentioned in the frontend tasks of `Implementation_Plan.md`.