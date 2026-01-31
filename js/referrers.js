// Referrers Data Model
const referrers = [
    {
        id: '0001',
        name: 'Khaled',
        phone: '6543456789098',
        commission: 10,
        notes: null,
        initials: 'K',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: '0002',
        name: 'Dr. Sarah Smith',
        phone: '01711223344',
        commission: 15,
        notes: 'Cardiologist',
        initials: 'S',
        color: 'bg-purple-100 text-purple-600'
    }
];

// Render Function
function renderReferrers() {
    const tableBody = document.getElementById('referrer-list');
    const resultCount = document.getElementById('result-count');
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Update count
    if (resultCount) {
        resultCount.textContent = `Showing ${referrers.length} results`;
    }

    // Generate rows
    referrers.forEach(referrer => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-50 transition-colors group border-b border-slate-50 last:border-0';
        
        row.innerHTML = `
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full ${referrer.color} flex items-center justify-center text-sm font-bold uppercase">
                        ${referrer.initials}
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm font-bold text-slate-700">${referrer.name}</span>
                        <span class="text-xs text-slate-400">ID: #${referrer.id}</span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                    <i data-lucide="phone" class="w-3.5 h-3.5 text-slate-400"></i>
                    ${referrer.phone}
                </div>
            </td>
            <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-600 text-xs font-bold">
                    ${referrer.commission}%
                </span>
            </td>
            <td class="px-6 py-4">
                <span class="text-sm text-slate-500 italic">
                    ${referrer.notes || '—'}
                </span>
            </td>
            <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                    <button onclick="openReferrerModal('edit', '${referrer.id}')" class="p-1.5 border border-slate-200 rounded-lg text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors" title="Edit">
                        <i data-lucide="pencil" class="w-4 h-4"></i>
                    </button>
                    <button onclick="deleteReferrer('${referrer.id}')" class="p-1.5 border border-red-200 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors" title="Delete">
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
let currentReferrerEditId = null;

function openReferrerModal(mode, id = null) {
    const modal = document.getElementById('modal-referrer');
    const title = document.getElementById('modal-title');
    const form = document.getElementById('form-referrer');

    if (mode === 'add') {
        title.textContent = 'Add New Referrer';
        form.reset();
        currentReferrerEditId = null;
        document.getElementById('input-id').value = '';
    } else if (mode === 'edit' && id) {
        title.textContent = 'Edit Referrer';
        currentReferrerEditId = id;
        
        const referrer = referrers.find(r => r.id === id);
        if (referrer) {
            document.getElementById('input-name').value = referrer.name;
            document.getElementById('input-phone').value = referrer.phone;
            document.getElementById('input-commission').value = referrer.commission;
            document.getElementById('input-notes').value = referrer.notes || '';
            document.getElementById('input-id').value = referrer.id;
        }
    }

    modal.classList.remove('hidden');
}

function closeReferrerModal() {
    const modal = document.getElementById('modal-referrer');
    modal.classList.add('hidden');
    document.getElementById('form-referrer').reset();
    currentReferrerEditId = null;
}

function saveReferrer() {
    const name = document.getElementById('input-name').value.trim();
    const phone = document.getElementById('input-phone').value.trim();
    const commission = parseFloat(document.getElementById('input-commission').value) || 0;
    const notes = document.getElementById('input-notes').value.trim() || null;

    if (!name || !phone) {
        alert('Please fill in Name and Phone Number.');
        return;
    }

    if (currentReferrerEditId) {
        // Edit Mode
        const index = referrers.findIndex(r => r.id === currentReferrerEditId);
        if (index !== -1) {
            referrers[index] = {
                ...referrers[index],
                name,
                phone,
                commission,
                notes
            };
        }
    } else {
        // Add Mode
        // Generate new ID (formatted as 000X)
        const maxId = referrers.reduce((max, r) => Math.max(max, parseInt(r.id)), 0);
        const newId = (maxId + 1).toString().padStart(4, '0');
        
        // Random color assignment
        const colors = [
            'bg-purple-100 text-purple-600',
            'bg-blue-100 text-blue-600',
            'bg-emerald-100 text-emerald-600',
            'bg-amber-100 text-amber-600',
            'bg-rose-100 text-rose-600'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        referrers.unshift({
            id: newId,
            name,
            phone,
            commission,
            notes,
            initials: name.charAt(0).toUpperCase(),
            color: randomColor
        });
    }

    renderReferrers();
    closeReferrerModal();
}

function deleteReferrer(id) {
    if (confirm('Are you sure you want to delete this referrer?')) {
        const index = referrers.findIndex(r => r.id === id);
        if (index !== -1) {
            referrers.splice(index, 1);
            renderReferrers();
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderReferrers();
});
