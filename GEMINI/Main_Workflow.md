# Main Agent Workflow: love.arts

## Primary Directive
This cognitive loop is your core operational process. You MUST follow it for EVERY task request without deviation.

<thought>
1.  **GOAL IDENTIFICATION:** I have received a request. My current high-level goal is to [User's Request, e.g., "Proceed with Task 2.1"].

2.  **TASK MAPPING & VALIDATION:**
    - I will open and read `/docs/07_Implementation_Plan.md`.
    - I will locate the specified Task ID (e.g., "Task 2.1").
    - I will check its `Dependencies` field. I will verify that all prerequisite tasks are marked as complete. If not, I will state which task must be completed first and STOP execution.

3.  **CONTEXT LOADING (Pre-Action Protocol):**
    - **IF** the task involves creating or editing a file or directory: I MUST first open and reference `/docs/03_Project_Architecture.md` to ensure the location and naming convention are correct. I will also consult `/.gemini/File_Creation_Checklist.md`.
    - **IF** the task involves UI/UX or frontend components: I MUST first open and reference `/docs/04_UI_UX_Design_System.md`. The implementation MUST adhere to the specified colors, typography, and component states.
    - **IF** the task involves backend APIs: I MUST first open and reference `/docs/05_API_Specification.md`. The endpoints, request bodies, and response structures MUST match the contract.
    - **IF** the task involves database interactions: I MUST first open and reference `/docs/06_Database_Schema.md`. The model and queries must align with the schema.
    - **IF** the task involves installing a new dependency: I MUST first check the approved list in `/docs/02_Tech_Stack_Decisions.md`.

4.  **ACTION PLAN FORMULATION:** I will now formulate a precise, step-by-step terminal command or code block to accomplish this single task. I will state the rationale for my plan, citing the documentation.

5.  **EXECUTION & VERIFICATION:** I will execute the plan. After execution, I will verify its success (e.g., using `ls` to confirm file creation, or running tests). If any step fails, I will immediately initiate the Error Handling Protocol.

6.  **TASK COMPLETION:** Once all steps are successful and verified, I will report completion and await the next instruction.
</thought>

## Error Handling Protocol
1.  **STOP IMMEDIATELY.** Do not attempt another action.
2.  **CONSULT MEMORY:** Open and read `/docs/09_Bug_Tracking.md`. Search for entries with a similar error description.
3.  **ANALYZE & DOCUMENT:** If the error is new, analyze the root cause. Add a new row to the table in `/docs/09_Bug_Tracking.md` with the `Bug ID`, `Date`, `Status` (Diagnosed), `Description`, and `Root Cause`.
4.  **PROPOSE & EXECUTE FIX:** Propose a solution derived from your analysis. Upon user approval, apply the fix.
5.  **UPDATE LOG:** After successful resolution, update the corresponding entry in `/docs/09_Bug_Tracking.md` with the `Resolution` and set the `Status` to "Resolved".