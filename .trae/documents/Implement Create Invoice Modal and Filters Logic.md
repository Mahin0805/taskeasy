I will implement Phase 5A (Create Invoice Modal) and Phase 5B (Filters Logic) for the invoices page.

**1. Phase 5A: Create Invoice Modal**
- **HTML (`invoices.html`)**:
  - Add a Modal structure at the bottom of the body (hidden by default).
  - Modal content:
    - Overlay (`fixed inset-0 bg-black/50`).
    - Card (`bg-white rounded-lg p-6 max-w-md w-full`).
    - Header: Title "New Invoice" + Close button.
    - Form: Fields for Patient Name, Phone, Date, Total, Discount, Paid.
    - Footer: Cancel and Save buttons.
- **JavaScript (`js/invoices.js`)**:
  - Add functions `openModal()` and `closeModal()` to toggle visibility.
  - Bind the "Create Invoice" button in the header to `openModal()`.
  - Implement `saveInvoice()` function:
    - Gather values from inputs.
    - Calculate Due Amount (`total - discount - paid`).
    - Determine Status (Paid/Partial/Due).
    - Generate Invoice # (Simple random or incrementing logic) and Date strings.
    - Push to `invoices` array.
    - Call `renderInvoices()` (or `applyFilters()` which calls render).
    - Reset form and close modal.

**2. Phase 5B: Filters Logic**
- **JavaScript (`js/invoices.js`)**:
  - Add event listeners to filter inputs:
    - Search input (`input` event).
    - Status dropdown (`change` event).
    - Date inputs (`change` event).
  - Create `applyFilters()` function:
    - Start with `filteredInvoices = [...invoices]`.
    - Filter by **Search** (check `patientName` and `invoiceNumber` case-insensitive).
    - Filter by **Status** (exact match unless "All Statuses").
    - Filter by **Date Range** (parse dates and compare).
    - Call `renderInvoices(filteredInvoices)` (Need to update render function to accept an array argument, defaulting to global if not provided, or just use the filtered result).
  - Update `renderInvoices` to use the passed array instead of the global `invoices`.

**3. Execution Steps**
1.  **Update HTML**: Add the modal structure and IDs to filter inputs.
2.  **Update JS**: Refactor `renderInvoices` to accept data.
3.  **Update JS**: Implement `applyFilters` and attach listeners.
4.  **Update JS**: Implement Modal logic and Form handling.
5.  **Verify**: Test creating an invoice and filtering the list.