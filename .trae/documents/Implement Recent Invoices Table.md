I will implement the Recent Invoices table section as requested in Task 7.

**1. HTML Layout (`index.html`)**
- Create a new 2-column grid container below the charts section.
- **Left Column (Table)**: Takes up 2/3 width (`lg:col-span-2`).
  - Container: White card (`bg-white`), rounded, shadow.
  - **Header**:
    - Title: "Recent Invoices".
    - Subtext: "Latest transactions from your center".
    - Action: "View All" button (Gray ghost button).
  - **Table Wrapper**: `overflow-x-auto` for responsiveness.
  - **Table Element**:
    - `thead`: Light gray background (`bg-slate-50`), uppercase labels.
    - `tbody`: ID `invoice-table-body` for JS injection.

**2. JavaScript Implementation (`js/main.js`)**
- Create `InvoiceManager` class.
- **Data**: Array of invoice objects matching screenshot:
  - `invoiceNo` (e.g., #INV-20260130-448811), `date`, `patient` (Name + ID), `amount` (৳ 1,800), `status` (Partial/Due).
- **Rendering Logic**:
  - Map data to `tr` elements.
  - **Patient Cell**: Flex container with circular initial avatar (random bg color) and name/ID details.
  - **Status Badge**:
    - Partial: Amber bg/text.
    - Due: Rose bg/text.
  - **Action Cell**: Eye icon (Blue) and Print icon (Gray).
  - Initialize icons after render.

**3. Styling Details**
- **Rows**: `border-b border-slate-50 hover:bg-slate-50 transition-colors`.
- **Text**: Slate-600 for body, Slate-400 for metadata (dates, IDs).
- **Spacing**: Comfortable padding (`px-6 py-4`).

**4. Verification**
- Verify visually against screenshot (Columns, Colors, Badges).
- Check scrolling behavior (vertical scroll if content overflows card height, though screenshot suggests full list). I will implement a fixed height container with `overflow-y-auto` to match the "Table body scrolls vertically" requirement.