I will implement the complete Commissions Report page in one turn.

**1. File Creation: `commissions.html`**
- Duplicate `sales-report.html` layout.
- **Update Sidebar**: Mark "Commissions" as active.
- **Update Header**: Title "Referrer Commission Report".

**2. Content Area Implementation**
- **Filter Section**:
  - Start Date & End Date inputs.
  - "Referrer" Select Dropdown (Optional feature shown in screenshot, though not explicitly asked in prompt summary cards, it's good for filtering).
  - "Update" button.
- **Summary Section** (Table-based layout as per screenshot):
  - Instead of separate cards, the screenshot shows a "Commission Summary" table.
  - However, the prompt text asks for "Summary cards: Total Commission, Total Invoices, Referrers count".
  - *Decision*: I will implement the **Summary Cards** above the table as requested in the text prompt, and then the **Commission Table** below it. This provides better dashboard-style visibility.
- **Commission Table**:
  - Header with "Print Report" button.
  - Columns: Referrer (Avatar + Name + Phone), Total Commission, Paid, Pending, Action.

**3. JavaScript Logic (`js/commissions.js`)**
- **Data Model**:
  - Mock `invoices` array (with `referrerId`).
  - Mock `referrers` array (id, name, commissionRate).
- **Calculation Logic**:
  - Join Invoices with Referrers.
  - Calculate commission per invoice (e.g., `invoice.total * referrer.commissionRate / 100`).
  - Group by Referrer.
- **Render Function**: `renderCommissions(data)`.
  - Calculate Grand Totals (Commission, Invoices Count, Active Referrers).
  - Render Summary Cards.
  - Render Table Rows (one row per referrer).
- **Filter Logic**:
  - Filter invoices by date.
  - Re-calculate and re-render.
- **Print Logic**:
  - `window.print()` with CSS print styles.

**4. Navigation Updates**
- Update sidebar links in all pages to point to `commissions.html`.

**5. Execution Steps**
1.  Create `commissions.html`.
2.  Create `js/commissions.js`.
3.  Add print styles.
4.  Update sidebar links.
5.  Verify filtering and rendering.