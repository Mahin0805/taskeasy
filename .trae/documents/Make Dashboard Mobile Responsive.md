I will make the entire dashboard mobile-responsive by implementing a collapsible sidebar, stacking layouts, and ensuring all tables and forms adapt to smaller screens.

### **Plan of Action**

1.  **Create `js/layout.js`**
    *   Implement the logic to toggle the sidebar on mobile (slide-in/out).
    *   Manage the background overlay for the mobile menu.

2.  **Update Common Layout Elements (All Pages)**
    *   **Sidebar**: Update CSS classes to be hidden on mobile (`-translate-x-full`) and fixed position (`fixed z-40`).
    *   **Header**: Add a "Hamburger" menu button visible only on mobile (`md:hidden`) to trigger the sidebar.
    *   **Scripts**: Include `js/layout.js` in every HTML file.

3.  **Page-Specific Responsive Fixes**
    *   **Dashboard (`index.html`)**:
        *   Stack KPI cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
        *   Stack Charts and Tables (`grid-cols-1 lg:grid-cols-3`).
        *   Make the Date Range picker stack vertically on mobile.
    *   **Invoices (`invoices.html`)**:
        *   Stack the top filters (Search, Status, Date) vertically.
        *   Ensure the Invoice Table is horizontally scrollable (`overflow-x-auto`).
    *   **Create Invoice (`create-invoice.html`)**:
        *   Switch the main grid from `grid-cols-12` to `grid-cols-1 lg:grid-cols-12`.
        *   Stack the Patient Form (left) and Invoice Summary (right) vertically on mobile.
    *   **Masters (`investigations.html`, `patients.html`, `referrers.html`)**:
        *   Stack filter inputs.
        *   Make tables scrollable.
        *   Ensure Modals have margins and fit within mobile screens.
    *   **Reports (`sales-report.html`, `commissions.html`)**:
        *   Stack summary cards and filter rows.
        *   Enable table scrolling.
    *   **Settings (`settings.html`)**:
        *   Change form grids to single column on mobile (`grid-cols-1 md:grid-cols-2`).
        *   Stack the Logo Upload section.

### **Verification**
*   I will verify the changes by checking the code structure for responsive classes (`md:`, `lg:`, `overflow-x-auto`).
*   (Self-Correction) Since I cannot visually test on a real phone, I will rely on standard Tailwind breakpoints which are proven to work.
