I will implement the complete Sales Report page in one turn, covering all requested phases.

**1. File Creation: `sales-report.html`**
- Duplicate `index.html` layout.
- **Update Sidebar**: Mark "Sales Report" as active.
- **Update Header**: Title "Sales Report".

**2. Content Area Implementation**
- **Filter Section**:
  - Start Date & End Date inputs.
  - "Update Report" button.
- **Summary Cards (Grid of 4)**:
  - Total Sales (Blue icon/text).
  - Collected (Green icon/text).
  - Total Due (Red icon/text).
  - Invoices (Cyan/Blue icon/text).
- **Sales Table**:
  - Header with "Detailed Sales List" and "Print Report" button.
  - Columns: Date, Invoice #, Customer, Total, Paid, Due, Status.

**3. JavaScript Logic (`js/sales-report.js`)**
- **Data Model**: Mock `salesData` array (reusing structure from `invoices.js` or creating new consistent data).
- **Render Function**: `renderReport(data)`.
  - Calculate totals (Sales, Collected, Due, Count).
  - Update DOM elements for summary cards.
  - Render table rows.
- **Filter Logic**:
  - `filterReport()`: Filter `salesData` based on date range inputs. call `renderReport(filteredData)`.
- **Print Logic**:
  - `window.print()`.
  - CSS `@media print` to hide sidebar/header and style the table for printing.

**4. Navigation Updates**
- Update sidebar links in all pages (`index.html`, `invoices.html`, etc.) to point to `sales-report.html`.

**5. Execution Steps**
1.  Create `sales-report.html`.
2.  Create `js/sales-report.js`.
3.  Add print styles to `sales-report.html` (head section).
4.  Update sidebar links in all files.
5.  Verify filtering and rendering.