I will implement Phase I of the Patients (Customer Directory) page.

**1. File Creation: `patients.html`**
- Duplicate `investigations.html` layout (Sidebar + Header).
- **Update Sidebar**: Mark "Customers" as active.
- **Update Header**: Title "Patients".

**2. Content Area Implementation**
- **Container**: White card layout.
- **Header**: "Patient Directory" title, Search input, "Add Patient" button.
- **Table**:
  - Columns: Patient Name (Avatar + Name + ID), Contact Information (Phone + Email), Address, History (Invoice count badge), Actions.

**3. JavaScript Logic (`js/patients.js`)**
- **Data Model**: `const patients = [...]`.
  - Mock data: 6-7 items matching the screenshot (e.g., Mahin, Sabbir Ahmed).
  - Structure: `{ id, name, phone, email, address, invoiceCount, initials }`.
- **Render Function**: `renderPatients()`.
  - Clear table body.
  - Iterate and append rows.
  - **Avatar Logic**: Circle with background color and initials.
  - **History Badge**: Blue badge showing "X Invoices".
  - **Action Buttons**: Edit (Pencil) and Delete (Trash).

**4. Navigation Updates**
- Update sidebar links in `index.html`, `invoices.html`, `investigations.html`, `create-invoice.html` to point to `patients.html`.

**5. Execution Steps**
1.  Create `patients.html`.
2.  Create `js/patients.js` with mock data and render logic.
3.  Update sidebar links in all pages.
4.  Verify layout and data rendering.