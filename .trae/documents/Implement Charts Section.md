I will implement the Charts section as requested in Task 6.

**1. HTML Setup (`index.html`)**
- Add **Chart.js CDN** in the `<head>`.
- Add a new grid container (`grid-cols-1 lg:grid-cols-3`) for the charts section.
- **Revenue Overview Card** (Left, `col-span-2`):
  - Heading: "Revenue Overview".
  - Subtext: "Monthly sales performance trend".
  - Canvas: `<canvas id="revenueChart">`.
- **Payment Distribution Card** (Right, `col-span-1`):
  - Heading: "Payment Distribution".
  - Subtext: "Invoice status breakdown".
  - Container for Donut Chart with **Center Text Overlay**:
    - `div.relative` wrapper.
    - Absolute centered text showing "15 TOTAL".
    - Canvas: `<canvas id="paymentChart">`.

**2. JavaScript Implementation (`js/main.js`)**
- Create `ChartManager` class.
- **Revenue Chart (Line)**:
  - Data: Mock 12-month data points matching the curve shape.
  - Styling:
    - `tension: 0.4` for smooth bezier curves.
    - `fill: true` with a Canvas Gradient (Blue fading to transparent).
    - `pointRadius: 0` (clean line, no dots except on hover).
    - `animation: false` (Strict requirement).
    - Grid lines: Dashed, subtle.
- **Payment Chart (Doughnut)**:
  - Data: [Paid, Due, Partial] (Mock values).
  - Colors: Emerald-500, Rose-500, Amber-500.
  - Styling:
    - `cutout: '75%'` for thin ring.
    - `borderWidth: 0` for clean look.
    - `animation: false`.
    - Hide default legend.

**3. Verification**
- Verify charts render without animation.
- Confirm colors match the design (Blue gradient line, Traffic light donut).
- Ensure layout proportions (2:1 split).