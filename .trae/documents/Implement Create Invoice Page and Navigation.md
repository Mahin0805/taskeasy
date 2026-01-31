I will implement the "Create Invoice" page and navigation logic as requested.

**1. Strategy for Shared Data (Important Note)**
- The prompt explicitly states **"No backend"** and **"No localStorage"** but also asks to **"Add invoice to the shared invoices data (JS mock)"** and **"Table should show new invoice"**.
- Without localStorage or a backend, data persists only in memory. Navigating between pages (full reload) **WILL RESET** the JavaScript state.
- **Critical Assumption/Workaround**: Since I cannot persist data across page reloads without localStorage (which is forbidden), I will implement the navigation and form as requested, but I must inform the user that **data will not actually persist** upon redirect in a pure static file environment without localStorage.
- *However*, to strictly follow the "No localStorage" rule while trying to meet the "Table should show new invoice" requirement, the only way is passing data via URL parameters or simply accepting that the requirement is impossible without some persistence layer.
- **Decision**: I will implement the page and navigation. I will simulate the "Add" action. I will add a comment in the code explaining that data persistence requires a backend or localStorage (which was opted out). *Wait*, usually in these tasks, "No localStorage" might be a soft rule or a challenge. But if I strictly follow it, the new invoice won't appear.
- *Alternative*: Maybe the user means "don't use complex state management". I will use `localStorage` if strictly necessary for the user experience, but the prompt says "Do NOT use localStorage".
- **Strict Compliance Plan**: I will implement the form and the redirect. I will create the `create-invoice.html` page. I will update links. The "Table showing new invoice" requirement will likely fail without persistence, but I will implement the logic *as if* it persists (e.g. pushing to array), knowing it resets on reload.
- *Correction*: I will use URL parameters to pass the new invoice data back to `invoices.html` as a lightweight "persistence" mechanism if the data is small, OR I will just implement the static flow.
- *Better Plan*: I'll stick to the prompt's constraints. I will create `create-invoice.html`, implement the form, and on submit, I'll redirect to `invoices.html`.

**2. File Creation: `create-invoice.html`**
- Duplicate `index.html` layout (Sidebar + Header).
- Replace main content with the Create Invoice form (reusing the form HTML I wrote for the modal in Phase 5A, but expanded to full page).
- Remove dashboard widgets.

**3. Navigation Updates**
- **index.html**: Update "Quick Action -> New Invoice" href to `create-invoice.html`.
- **invoices.html**:
  - Update "Create Invoice" button in header and card to `href="create-invoice.html"` (change `<button>` to `<a>` or add `onclick`).
  - **Remove** the Modal logic from Phase 5A (since we are replacing it with a page).
- **create-invoice.html**:
  - Add "Back to Invoices" button.

**4. JavaScript Logic**
- **js/create-invoice.js**:
  - Handle form calculation (Total - Discount - Paid = Due).
  - Handle Form Submit:
    - Prevent default.
    - Collect data.
    - "Simulate" saving (console log).
    - `window.location.href = 'invoices.html'`.

**5. Execution Steps**
1.  Create `create-invoice.html` from `index.html`.
2.  Implement the Form UI in `create-invoice.html`.
3.  Create `js/create-invoice.js` for form logic.
4.  Update navigation links in `index.html` and `invoices.html`.
5.  Remove Modal code from `invoices.html` and `js/invoices.js`.

**6. Addressing the "Add invoice to shared data" requirement**
- Since I cannot use localStorage, I will pass the new invoice data as URL query parameters to `invoices.html`.
- In `js/invoices.js`, I will check for URL params on load, parse them, and add to the `invoices` array if present. This satisfies the requirement without localStorage/backend.

**Refined Plan**:
1.  **Create `create-invoice.html`**: Copy `index.html`, clean main content, add Form.
2.  **Create `js/create-invoice.js`**: Handle form inputs, auto-calc, and submit. On submit, construct a URL with query params (e.g., `invoices.html?newInvoice={...}`).
3.  **Update `js/invoices.js`**:
    - Remove Modal logic.
    - Add logic to parse `newInvoice` from URL search params.
    - If found, add to `invoices` array and clean URL.
4.  **Update Links**:
    - `index.html`: Quick Action -> `create-invoice.html`.
    - `invoices.html`: Create Buttons -> `create-invoice.html`.
    - Sidebar: Ensure links work.