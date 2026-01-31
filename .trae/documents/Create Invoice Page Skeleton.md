I will build the Invoice page layout skeleton (Phase 1) as requested.

**1. File Strategy**
- Create a new file `invoices.html` to keep the logic clean and separate from the dashboard `index.html`.
- Copy the base layout (Sidebar, Header structure) from `index.html` to ensure consistency.
- **Update Sidebar**: Mark "Invoices" as active and "Dashboard" as inactive in `invoices.html`.

**2. Main Content Implementation (`invoices.html`)**
- **Page Header**:
  - Update the top header text (left side) from "Dashboard Overview" to "Billing & Invoices".
- **Main Section Container**:
  - Add a white card container inside the main content area (`bg-white rounded-xl shadow-sm border border-slate-100`).
- **Section Header Row**:
  - Flex container with `justify-between` and `items-center`.
  - **Left**:
    - Title: "Invoice History" (`text-xl font-bold text-slate-800`).
    - Subtitle: "List of all generated patient bills and payment statuses" (`text-sm text-slate-500`).
  - **Right**:
    - "Create Invoice" button (`bg-blue-600 hover:bg-blue-700 text-white`, rounded, with `plus` icon).

**3. Verification**
- Verify the layout matches the screenshot structure.
- Ensure no extra components (filters, tables) are added yet.
- Check sidebar active state.