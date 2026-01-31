I will build the base layout and design system for the admin dashboard as requested.

**1. Project Structure Setup**
- Create `index.html` as the entry point.
- Create `/js/main.js` (minimal entry).
- Create `/assets` directory.

**2. Layout Implementation (`index.html`)**
- **Tech Stack**: HTML5 + Tailwind CSS (CDN).
- **Structure**:
  - **Body**: Full screen (`h-screen`), hidden overflow (`overflow-hidden`) to prevent body scroll, light gray background (`bg-slate-50`).
  - **Sidebar**: Fixed width (`w-64`), dark theme (`bg-slate-900`), full height, no scroll.
  - **Main Wrapper**: Flex column to house Header and Content.
  - **Header**: Sticky positioning (`sticky top-0`), white background (`bg-white`), fixed height (`h-16`), with a subtle border (`border-b`).
  - **Main Content**: Scrollable area (`overflow-y-auto`), padding (`p-6`), taking remaining height (`flex-1`).

**3. Design System & Constraints**
- **Typography**: Inter/Sans-serif (Tailwind default).
- **Theme**: Slate (grays) + Blue (primary).
- **Transitions**: Base classes for smooth states.
- **Comments**: Clearly mark `<!-- Sidebar -->`, `<!-- Header -->`, `<!-- Main Content -->`.

**4. Verification**
- Verify the layout responsiveness (Desktop only as requested).
- Ensure scroll behavior meets criteria (Sidebar static, Header sticky, Content scrolls).