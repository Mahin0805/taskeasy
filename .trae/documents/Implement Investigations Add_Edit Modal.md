I will implement Phase II (Add & Edit functionality) for the Investigations page.

**1. Modal Implementation (`investigations.html`)**
- Add a modal structure at the bottom of the body (similar to the one used in `invoices.html` or `create-invoice` logic).
- **Modal Content**:
  - Header: Title (dynamic) + Close button.
  - Form:
    - Name (Input Text).
    - Category (Select or Input - I'll use a Select with common options + "Other" logic or just a text input for simplicity as per "Category (text or select)" requirement. I'll use a Select for consistency).
    - Price (Input Number).
    - Status (Select: Active/Inactive).
  - Footer: Cancel and Save buttons.

**2. JavaScript Logic (`js/investigations.js`)**
- **State Management**: Add `let currentEditId = null;`.
- **Modal Functions**:
  - `openModal(mode, id = null)`:
    - If mode is 'add': Clear form, set title "Add Investigation", `currentEditId = null`.
    - If mode is 'edit': Find investigation by ID, fill form, set title "Edit Investigation", `currentEditId = id`.
    - Show modal (remove `hidden` class).
  - `closeModal()`: Hide modal, reset form.
- **Form Handling**:
  - `saveInvestigation(e)`:
    - Prevent default.
    - Get values.
    - Validate (Name & Price required).
    - If `currentEditId` is null (Add): Create new object with new ID, push to array.
    - If `currentEditId` exists (Edit): Find index, update object.
    - Call `renderInvestigations()`.
    - Call `closeModal()`.
- **Event Listeners**:
  - Bind "Add Investigation" button to `openModal('add')`.
  - Bind Edit buttons (dynamically in render function) to `openModal('edit', id)`.
  - Bind Form Submit to `saveInvestigation`.

**3. Execution Steps**
1.  **HTML**: Add the Modal HTML to `investigations.html`.
2.  **JS**: Update `js/investigations.js` to include state, modal logic, and form handling.
3.  **JS**: Update `renderInvestigations` to attach `onclick` handlers for Edit buttons.
4.  **Verification**: Test Add and Edit flows.