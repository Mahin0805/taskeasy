I will implement Phase I of the Investigations section.

**1. File Creation: `investigations.html`**
- Duplicate `index.html` structure (Sidebar + Header).
- **Update Sidebar**: Mark "Investigations" as active, "Dashboard" and others as inactive.
- **Update Header**: Title "Investigations". Remove "Create Invoice" button or replace with "Add Investigation" (as per requirements). Actually, the prompt says "Right-aligned button: Add Investigation".

**2. Content Area Implementation**
- **Container**: White card layout similar to other pages.
- **Header**: "Investigation Catalog" title, Search input (UI only), "Add New Test" button.
- **Table**:
  - Columns: Code/ID, Investigation Name, Price, Default Comm. (optional/from screenshot), Status, Actions.
  - *Correction*: The user text prompt asks for: "Investigation Name", "Category", "Price", "Status", "Actions". The screenshot shows "Code", "Investigation Name", "Price", "Default Comm", "Status", "Actions". I will follow the **User Text Prompt** primarily but maybe include "Code" if it fits the data model `id`. I will stick to the text prompt requirements: Name, Category, Price, Status, Actions.

**3. JavaScript Logic (`js/investigations.js`)**
- **Data Model**: `const investigations = [...]`.
  - Mock data: 5-6 items (e.g., ECG, Ultrasound, X-Ray, Blood Test).
- **Render Function**: `renderInvestigations()`.
  - Clear table body.
  - Iterate and append rows.
  - **Status Badge logic**: Green for Active, Gray/Red for Inactive.
  - **Action Buttons**: Edit (Pencil) and Delete (Trash).

**4. Execution Steps**
1.  Create `investigations.html`.
2.  Create `js/investigations.js` with data and render logic.
3.  Link JS to HTML.
4.  Verify layout and data rendering.