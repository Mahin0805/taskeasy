I will implement the sticky top header bar as requested in Task 3.

**1. Header Implementation (`index.html`)**
- Locate the `<header>` element inside the `Main Wrapper`.
- **Left Side**:
  - Add "Dashboard Overview" text.
  - Style: `text-sm font-semibold text-slate-700`.
- **Right Side**:
  - Container: Flexbox, `items-center`, `gap-6`.
  - **Button**:
    - "Create Invoice" with a plus icon.
    - Style: `bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-blue-200 transition-colors`.
  - **User Info**:
    - Text: "Welcome, Admin" (`text-sm text-slate-500`).
    - Avatar: Circular placeholder (`w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center`).
    - Icon: User icon inside avatar.

**2. Layout & Behavior**
- Ensure `<header>` retains `sticky top-0 z-30`.
- Ensure proper padding (`px-6`) and height (`h-16`) are maintained from Task 1.
- Verify vertical centering of all elements.

**3. Verification**
- Check against screenshot:
  - "Dashboard Overview" on left.
  - Blue "Create Invoice" button on right.
  - "Welcome, Admin" and Avatar on far right.
- Confirm sticky behavior on scroll.