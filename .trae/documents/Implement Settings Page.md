I will implement the Application Settings page in one turn.

**1. File Creation: `settings.html`**
- Duplicate `index.html` layout.
- **Update Sidebar**: Mark "Settings" as active.
- **Update Header**: Title "Application Settings".

**2. Content Area Implementation**
- **Container**: Main content area.
- **Section 1: Store Branding**
  - Card layout.
  - Logo placeholder (Image/Div).
  - "Update Logo" button (Triggers file input).
  - Hidden file input.
- **Section 2: Sidebar Configuration**
  - Card layout.
  - "Show Application Name" label.
  - Toggle Switch (Checkbox styled as toggle).
- **Section 3: Default Currency**
  - Card layout.
  - Display current currency (e.g., "BDT (৳)").
  - "Change Currency" button.
- **Save Action**:
  - Sticky or floating "Save Changes" button at the bottom right.

**3. JavaScript Logic (`js/settings.js`)**
- **Logo Logic**: Listen to file input change -> read file -> update image preview src.
- **Currency Logic**:
  - `openCurrencyModal()`: Show a simple modal with currency options (USD, BDT, EUR).
  - `selectCurrency(code, symbol)`: Update the displayed currency text.
- **Save Logic**:
  - `saveSettings()`: Show a toast/alert "Settings Saved Successfully".

**4. Modal Implementation**
- Add hidden Currency Selection Modal to `settings.html`.

**5. Navigation Updates**
- Update sidebar links in all pages to point to `settings.html`.

**6. Execution Steps**
1.  Create `settings.html`.
2.  Create `js/settings.js`.
3.  Update sidebar links in all files.
4.  Verify interactions (Logo preview, Currency modal, Save toast).