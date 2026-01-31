I will build Phase 2 (Filters Row) and Phase 3 (Invoice Table) of the invoice page as requested.

**1. Phase 2: Filters Row (UI Only)**
- **Location**: Insert into `invoices.html` below the "Invoice History" header.
- **Layout**: Flex container with gap.
- **Components**:
  - **Search**: Input with left search icon (`w-full max-w-xs`).
  - **Status Dropdown**: Select input (`All Statuses`).
  - **Referrer Dropdown**: Select input (`Filter by Referrer`).
  - **Date Range**: Two date inputs (`From` and `To`).
  - **Clear Button**: Square button with 'X' icon (`bg-slate-50`).
- **Style**: Standard Tailwind inputs (`border-slate-200 rounded-lg text-sm`).

**2. Phase 3: Invoice Table (Static UI)**
- **Location**: Below the filters row.
- **Structure**: Semantic `<table>` with `thead` and `tbody`.
- **Columns**:
  - **Invoice #**: Blue text, hover underline.
  - **Patient Details**: Bold name, muted phone.
  - **Date**: Date line, smaller time line.
  - **Total Amount**: Bold amount, red discount line below.
  - **Payment**: Green paid amount, red due amount.
  - **Status**: Pill badges (Partial/Due/Paid).
  - **Actions**: 4 icon buttons (View, Print, Edit, Delete).
- **Styling**:
  - Header: `bg-slate-50 text-xs font-bold uppercase`.
  - Rows: `border-b hover:bg-slate-50`.
  - **Actions**:
    - View/Print/Edit: Outline/Ghost styles.
    - Delete: Red text/border styling.
- **Data**: 6-8 static rows hardcoded in HTML (No JS rendering as per instructions).

**3. Verification**
- Verify against screenshot.
- Ensure "Desktop only" layout holds up.
- Check all visual cues (red discounts, green payments, badges).