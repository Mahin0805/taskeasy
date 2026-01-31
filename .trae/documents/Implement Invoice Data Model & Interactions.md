I will implement Phase 4 (Data Model & Basic Interactions) for the Invoice page.

**1. File Strategy**
- Create a new file `js/invoices.js` to handle the invoice-specific logic.
- Update `invoices.html` to link this new script file instead of or alongside `js/main.js` (I will check if `main.js` is needed, but typically specific page logic should be separated or modularized). Since `main.js` initializes icons, I'll keep it but add `invoices.js` for the table logic.

**2. JavaScript Implementation (`js/invoices.js`)**
- **Data Model**: Create an `invoices` array with the 6-8 mock objects matching the current static HTML.
- **Initialization**:
  - `document.addEventListener('DOMContentLoaded')`.
  - Call `renderInvoices()`.
- **Render Function (`renderInvoices`)**:
  - Target the `tbody` element (I need to add an ID to it in `invoices.html`).
  - Clear `innerHTML`.
  - Loop through `invoices` array.
  - Generate HTML string for each row using template literals (copying the exact Tailwind classes from the static HTML).
  - Add event listeners to the action buttons after rendering (or use event delegation on the table).
  - Update a "Showing X invoices" counter (I need to add this element to `invoices.html`).
- **Action Handlers**:
  - **Delete**: Filter the array to remove the item, then re-render.
  - **Print**: `window.print()`.
  - **View/Edit**: `console.log`.

**3. HTML Updates (`invoices.html`)**
- Add `id="invoice-list"` to the `tbody`.
- Add a container for the invoice count (e.g., inside the filters row or above the table).
- Link `<script src="js/invoices.js"></script>` at the bottom.

**4. Verification**
- Page loads with data rendered from JS.
- "Delete" button removes a row and updates the count.
- Console logs appear for View/Edit.
- Layout remains identical to the static version.