// Patients Data Model
const patients = [
    {
        id: '00008',
        name: 'mahin',
        phone: '01729612471',
        email: null,
        address: 'mirpur',
        invoiceCount: 1,
        initials: 'm',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        id: '00002',
        name: 'Sabbir Ahmed',
        phone: '01841961993',
        email: null,
        address: '...',
        invoiceCount: 7,
        initials: 'S',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: '00003',
        name: 'Sabbir Ahmed',
        phone: '1233',
        email: null,
        address: '473/6/A, West Shewrapara, Mirp...',
        invoiceCount: 1,
        initials: 'S',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: '00004',
        name: 'Sabbir Ahmed',
        phone: '2364784',
        email: null,
        address: '473/6/A, West Shewrapara, Mirp...',
        invoiceCount: 1,
        initials: 'S',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: '00005',
        name: 'Sabbir Ahmed',
        phone: '23738',
        email: null,
        address: '473/6/A, West Shewrapara, Mirp...',
        invoiceCount: 1,
        initials: 'S',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: '00006',
        name: 'Sabbir Ahmed',
        phone: '0184191993',
        email: 'mhkdhdh@gmail.com',
        address: '473/6/A, West Shewrapara, Mirp...',
        invoiceCount: 1,
        initials: 'S',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: '00007',
        name: 'Sabbir Ahmed',
        phone: '018419619',
        email: null,
        address: '473/6/A, West Shewrapara, Mirp...',
        invoiceCount: 1,
        initials: 'S',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: '00001',
        name: 'Sakib Ahmed',
        phone: '01869680796',
        email: null,
        address: 'Dhaka, Bangladesh',
        invoiceCount: 2,
        initials: 'S',
        color: 'bg-blue-100 text-blue-600'
    }
];

// Render Function
function renderPatients() {
    const tableBody = document.getElementById('patient-list');
    const resultCount = document.getElementById('result-count');
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Update count
    if (resultCount) {
        resultCount.textContent = `Showing ${patients.length} results`;
    }

    // Generate rows
    patients.forEach(patient => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-50 transition-colors group border-b border-slate-50 last:border-0';
        
        row.innerHTML = `
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full ${patient.color} flex items-center justify-center text-sm font-bold uppercase">
                        ${patient.initials}
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm font-bold text-slate-700">${patient.name}</span>
                        <span class="text-xs text-slate-400">ID: #${patient.id}</span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <div class="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                        <i data-lucide="phone" class="w-3.5 h-3.5 text-slate-400"></i>
                        ${patient.phone}
                    </div>
                    <span class="text-xs text-slate-400 mt-0.5 pl-5">${patient.email || 'No email provided'}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <span class="text-sm text-slate-600 truncate max-w-[200px] block" title="${patient.address}">
                    ${patient.address}
                </span>
            </td>
            <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-blue-600 text-xs font-bold">
                    <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                    ${patient.invoiceCount} Invoices
                </span>
            </td>
            <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                    <button onclick="openPatientModal('edit', '${patient.id}')" class="p-1.5 border border-slate-200 rounded-lg text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors" title="Edit">
                        <i data-lucide="pencil" class="w-4 h-4"></i>
                    </button>
                    <button onclick="deletePatient('${patient.id}')" class="p-1.5 border border-red-200 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors" title="Delete">
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
let currentPatientEditId = null;

function openPatientModal(mode, id = null) {
    const modal = document.getElementById('modal-patient');
    const title = document.getElementById('modal-title');
    const form = document.getElementById('form-patient');

    if (mode === 'add') {
        title.textContent = 'Add New Patient';
        form.reset();
        currentPatientEditId = null;
        document.getElementById('input-id').value = '';
    } else if (mode === 'edit' && id) {
        title.textContent = 'Edit Patient';
        currentPatientEditId = id;
        
        const patient = patients.find(p => p.id === id);
        if (patient) {
            document.getElementById('input-name').value = patient.name;
            document.getElementById('input-phone').value = patient.phone;
            document.getElementById('input-email').value = patient.email || '';
            document.getElementById('input-address').value = patient.address || '';
            document.getElementById('input-id').value = patient.id;
        }
    }

    modal.classList.remove('hidden');
}

function closePatientModal() {
    const modal = document.getElementById('modal-patient');
    modal.classList.add('hidden');
    document.getElementById('form-patient').reset();
    currentPatientEditId = null;
}

function savePatient() {
    const name = document.getElementById('input-name').value.trim();
    const phone = document.getElementById('input-phone').value.trim();
    const email = document.getElementById('input-email').value.trim() || null;
    const address = document.getElementById('input-address').value.trim() || null;

    if (!name || !phone) {
        alert('Please fill in Name and Phone Number.');
        return;
    }

    if (currentPatientEditId) {
        // Edit Mode
        const index = patients.findIndex(p => p.id === currentPatientEditId);
        if (index !== -1) {
            patients[index] = {
                ...patients[index],
                name,
                phone,
                email,
                address
            };
        }
    } else {
        // Add Mode
        // Generate new ID (formatted as 0000X)
        const maxId = patients.reduce((max, p) => Math.max(max, parseInt(p.id)), 0);
        const newId = (maxId + 1).toString().padStart(5, '0');
        
        // Random color assignment
        const colors = [
            'bg-purple-100 text-purple-600',
            'bg-blue-100 text-blue-600',
            'bg-emerald-100 text-emerald-600',
            'bg-amber-100 text-amber-600',
            'bg-rose-100 text-rose-600'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        patients.unshift({
            id: newId,
            name,
            phone,
            email,
            address,
            invoiceCount: 0,
            initials: name.charAt(0).toUpperCase(),
            color: randomColor
        });
    }

    renderPatients();
    closePatientModal();
}

function deletePatient(id) {
    if (confirm('Are you sure you want to delete this patient record?')) {
        const index = patients.findIndex(p => p.id === id);
        if (index !== -1) {
            patients.splice(index, 1);
            renderPatients();
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderPatients();
});
