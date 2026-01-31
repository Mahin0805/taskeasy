I will implement Phase III (Delete & Status Toggle) for the Investigations page.

**1. Delete Functionality (`js/investigations.js`)**
- Implement `deleteInvestigation(id)`:
  - `confirm()` dialog.
  - Filter `investigations` array to remove the item.
  - Call `renderInvestigations()`.
- Update `renderInvestigations` to attach `deleteInvestigation(id)` to the Trash button (already has a placeholder, will update the `onclick`).

**2. Status Toggle Functionality (`js/investigations.js`)**
- Implement `toggleStatus(id)`:
  - Find investigation by ID.
  - Toggle `status` property ('Active' <-> 'Inactive').
  - Call `renderInvestigations()`.
- Update `getStatusBadge` or `renderInvestigations` to make the badge clickable (add `onclick="toggleStatus(${item.id})"` and `cursor-pointer` class).
- Update visual styles in `getStatusBadge` to ensure they reflect the state correctly (already done in Phase I, just need to ensure clickability).

**3. Execution Steps**
1.  **Update JS**: Add `deleteInvestigation` and `toggleStatus` functions.
2.  **Update JS**: Modify `renderInvestigations` HTML generation to include the new onclick handlers.
3.  **Verification**: Test deleting a row and toggling status.