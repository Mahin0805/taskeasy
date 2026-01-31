I will implement the complete Referrers module in one phase as requested.

**1. File Creation: `referrers.html`**
- Duplicate `patients.html` layout (Sidebar + Header + Content Area).
- **Update Sidebar**: Mark "Referrers" as active.
- **Update Header**: Title "Medical Referrers".

**2. Content Area Implementation**
- **Container**: White card layout.
- **Header**: "Referrer Directory" title, Search input, "Add Referrer" button.
- **Table**:
  - Columns: Referrer Name (Avatar + Name + ID), Contact (Phone), Commission (%), Notes, Actions.
  - *Note*: Screenshot shows "Total Paid Out" and "Status", but the prompt asks for "Commission (%)" and "Notes". I will follow the **Prompt's Data Model** (Name, Phone, Commission, Notes) as the primary requirement, but maybe style Commission like "Status" or just a text column. I'll stick to the prompt: Name, Phone, Commission, Notes.

**3. JavaScript Logic (`js/referrers.js`)**
- **Data Model**: `const referrers = [...]`.
  - Mock data: 2-3 items (e.g., Dr. Smith, Dr. Johnson).
  - Structure: `{ id, name, phone, commission, notes, initials, color }`.
- **Render Function**: `renderReferrers()`.
  - Clear table body.
  - Iterate and append rows.
  - Avatar logic (similar to Patients).
- **Modal Logic**:
  - `openReferrerModal(mode, id)`: Reset/Pre-fill form.
  - `closeReferrerModal()`: Hide modal.
  - `saveReferrer()`: Add or Update logic.
  - `deleteReferrer(id)`: Confirm and remove.

**4. Modal Implementation**
- Add hidden modal to `referrers.html`.
- Fields: Name (text), Phone (tel), Commission (number), Notes (textarea).

**5. Navigation Updates**
- Update sidebar links in all pages (`index.html`, `invoices.html`, `investigations.html`, `patients.html`, `create-invoice.html`) to point to `referrers.html`.

**6. Execution Steps**
1.  Create `referrers.html`.
2.  Create `js/referrers.js` with full CRUD logic.
3.  Update sidebar links in all HTML files.
4.  Verify functionality (Add, Edit, Delete, Render).