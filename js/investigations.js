// Investigations Data Model
const investigations = [
    {
        id: 1,
        name: 'ECG - Digital',
        category: 'Cardiology',
        price: 10000,
        status: 'Active'
    },
    {
        id: 2,
        name: 'Ultrasound - Whole Abdomen',
        category: 'Radiology',
        price: 4000,
        status: 'Active'
    },
    {
        id: 3,
        name: 'X-Ray Chest PA View',
        category: 'Radiology',
        price: 800,
        status: 'Active'
    },
    {
        id: 4,
        name: 'CBC (Complete Blood Count)',
        category: 'Pathology',
        price: 450,
        status: 'Active'
    },
    {
        id: 5,
        name: 'Lipid Profile',
        category: 'Biochemistry',
        price: 1200,
        status: 'Active'
    },
    {
        id: 6,
        name: 'MRI Brain',
        category: 'Radiology',
        price: 8500,
        status: 'Inactive'
    }
];

// Helper to get status badge HTML
function getStatusBadge(status, id) {
    if (status === 'Active') {
        return `
            <span onclick="toggleStatus(${id})" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 cursor-pointer hover:bg-emerald-100 transition-colors" title="Click to Deactivate">
                <div class="w-1.5 h-1.5 rounded-full bg-current"></div>
                Active
            </span>
        `;
    } else {
        return `
            <span onclick="toggleStatus(${id})" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-500 cursor-pointer hover:bg-slate-200 transition-colors" title="Click to Activate">
                <div class="w-1.5 h-1.5 rounded-full bg-current"></div>
                Inactive
            </span>
        `;
    }
}

// Render Function
function renderInvestigations() {
    const tableBody = document.getElementById('investigation-list');
    const resultCount = document.getElementById('result-count');
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Update count
    if (resultCount) {
        resultCount.textContent = `Showing ${investigations.length} results`;
    }

    // Generate rows
    investigations.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-50 transition-colors group border-b border-slate-50 last:border-0';
        
        row.innerHTML = `
            <td class="px-6 py-4">
                <span class="text-sm font-bold text-slate-700">${item.name}</span>
            </td>
            <td class="px-6 py-4">
                <span class="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded">${item.category}</span>
            </td>
            <td class="px-6 py-4">
                <span class="text-sm font-bold text-blue-600">৳ ${item.price.toLocaleString()}</span>
            </td>
            <td class="px-6 py-4">
                ${getStatusBadge(item.status, item.id)}
            </td>
            <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                    <button onclick="openModal('edit', ${item.id})" class="p-1.5 border border-slate-200 rounded-lg text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors" title="Edit">
                        <i data-lucide="pencil" class="w-4 h-4"></i>
                    </button>
                    <button onclick="deleteInvestigation(${item.id})" class="p-1.5 border border-red-200 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors" title="Delete">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </td>
        `;
        
        tableBody.appendChild(row);
    });

    // Initialize icons for new elements
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Modal State & Logic
let currentEditId = null;

function openModal(mode, id = null) {
    const modal = document.getElementById('modal-investigation');
    const title = document.getElementById('modal-title');
    const form = document.getElementById('form-investigation');

    if (mode === 'add') {
        title.textContent = 'Add Investigation';
        form.reset();
        currentEditId = null;
        document.getElementById('input-id').value = '';
    } else if (mode === 'edit' && id) {
        title.textContent = 'Edit Investigation';
        currentEditId = id;
        
        const item = investigations.find(inv => inv.id === id);
        if (item) {
            document.getElementById('input-name').value = item.name;
            document.getElementById('input-category').value = item.category;
            document.getElementById('input-price').value = item.price;
            document.getElementById('input-status').value = item.status;
            document.getElementById('input-id').value = item.id;
        }
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal-investigation');
    modal.classList.add('hidden');
    document.getElementById('form-investigation').reset();
    currentEditId = null;
}

function saveInvestigation() {
    const name = document.getElementById('input-name').value.trim();
    const category = document.getElementById('input-category').value;
    const price = parseFloat(document.getElementById('input-price').value);
    const status = document.getElementById('input-status').value;

    if (!name || isNaN(price)) {
        alert('Please fill in Name and Price.');
        return;
    }

    if (currentEditId) {
        // Edit Mode
        const index = investigations.findIndex(inv => inv.id === currentEditId);
        if (index !== -1) {
            investigations[index] = {
                ...investigations[index],
                name,
                category,
                price,
                status
            };
        }
    } else {
        // Add Mode
        const newId = investigations.length > 0 ? Math.max(...investigations.map(i => i.id)) + 1 : 1;
        investigations.push({
            id: newId,
            name,
            category,
            price,
            status
        });
    }

    renderInvestigations();
    closeModal();
}

function deleteInvestigation(id) {
    if (confirm('Are you sure you want to delete this investigation?')) {
        const index = investigations.findIndex(inv => inv.id === id);
        if (index !== -1) {
            investigations.splice(index, 1);
            renderInvestigations();
        }
    }
}

function toggleStatus(id) {
    const index = investigations.findIndex(inv => inv.id === id);
    if (index !== -1) {
        investigations[index].status = investigations[index].status === 'Active' ? 'Inactive' : 'Active';
        renderInvestigations();
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderInvestigations();
});
