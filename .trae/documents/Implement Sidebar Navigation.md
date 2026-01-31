I will implement the fixed sidebar navigation as requested in Task 2.

**1. Icon Setup**
- Add **Lucide Icons** via CDN script in `<head>` of `index.html`.
- Initialize icons in `js/main.js`.

**2. Sidebar Implementation (`index.html`)**
- **Logo Area**:
  - Insert "taskeasy.io" branding with bold text and primary color dot/accent.
- **Navigation Structure**:
  - Implement 4 sections: **MAIN**, **MASTERS**, **REPORTS**, **SYSTEM**.
  - Use `text-xs font-bold text-slate-500 uppercase tracking-wider` for section headers.
- **Navigation Items**:
  - **MAIN**:
    - "Dashboard" (Active state: `bg-slate-800` or similar, white text).
    - "Invoices".
  - **MASTERS**: "Investigations", "Customers", "Referrers".
  - **REPORTS**: "Sales Report", "Commissions".
  - **SYSTEM**: "Settings".
  - **Logout**: "Logout" at the bottom (Footer area), styled with `text-red-500 hover:text-red-400`.
- **Styling Details**:
  - Flex layout for items (`flex items-center gap-3`).
  - Hover effects for non-active items (`hover:bg-slate-800/50 hover:text-white`).
  - Consistent padding and margins.

**3. JavaScript (`js/main.js`)**
- Add `lucide.createIcons()` to render the icons.

**4. Verification**
- Verify visually against the screenshot (Dark theme, specific items, active state, red logout).
- Ensure sidebar remains fixed while main content scrolls.