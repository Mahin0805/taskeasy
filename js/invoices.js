// Invoice Data Model
let invoices = [
    {
        id: 1,
        invoiceNumber: '#INV-20260130-448811',
        patientName: 'mahin',
        phone: '01729612471',
        date: '30 Jan 2026',
        time: '12:00 AM',
        total: '৳ 1,800',
        discount: 'Disc: - ৳ 200',
        paid: '৳ 700',
        due: '৳ 1,100',
        status: 'Partial'
    },
    {
        id: 2,
        invoiceNumber: '#INV-20260126-386881',
        patientName: 'Sabbir Ahmed',
        phone: '01841961993',
        date: '26 Jan 2026',
        time: '12:00 AM',
        total: '৳ 18,900',
        discount: 'Disc: - ৳ 1,100',
        paid: '৳ 0',
        due: '৳ 18,900',
        status: 'Due'
    },
    {
        id: 3,
        invoiceNumber: '#INV-20260126-123989',
        patientName: 'Sabbir Ahmed',
        phone: '01841961993',
        date: '26 Jan 2026',
        time: '12:00 AM',
        total: '৳ 8,900',
        discount: 'Disc: - ৳ 1,100',
        paid: '৳ 1,000',
        due: '৳ 7,900',
        status: 'Partial'
    },
    {
        id: 4,
        invoiceNumber: '#INV-20260125-638064',
        patientName: 'Sabbir Ahmed',
        phone: '1233',
        date: '25 Jan 2026',
        time: '12:00 AM',
        total: '৳ 4,000',
        discount: null,
        paid: '৳ 0',
        due: '৳ 4,000',
        status: 'Due'
    },
    {
        id: 5,
        invoiceNumber: '#INV-20260125-314066',
        patientName: 'Sabbir Ahmed',
        phone: '01841961993',
        date: '25 Jan 2026',
        time: '12:00 AM',
        total: '৳ 4,000',
        discount: null,
        paid: '৳ 0',
        due: '৳ 4,000',
        status: 'Due'
    },
    {
        id: 6,
        invoiceNumber: '#INV-20260125-933071',
        patientName: 'Sabbir Ahmed',
        phone: '2384784',
        date: '25 Jan 2026',
        time: '12:00 AM',
        total: '৳ 13,998',
        discount: 'Disc: - ৳ 2',
        paid: '৳ 0',
        due: '৳ 13,998',
        status: 'Due'
    }
];

// Status badge styling helper
function getStatusBadge(status) {
    if (status === 'Partial') {
        return `
            <span class="bg-amber-50 text-amber-600 text-[10px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                Partial
            </span>`;
    } else if (status === 'Due') {
        return `
            <span class="bg-slate-100 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                Due
            </span>`;
    } else if (status === 'Paid') {
        return `
            <span class="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                Paid
            </span>`;
    }
    return status;
}

// Render function
function renderInvoices(data = invoices) {
    const tableBody = document.getElementById('invoice-list');
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Generate rows
    data.forEach(invoice => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-50 transition-colors group';
        row.innerHTML = `
            <td class="px-6 py-4">
                <a href="#" class="text-sm font-bold text-blue-600 hover:underline">${invoice.invoiceNumber}</a>
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-700">${invoice.patientName}</span>
                    <span class="text-xs text-slate-400 mt-0.5">${invoice.phone}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <span class="text-sm font-medium text-slate-600">${invoice.date}</span>
                    <span class="text-xs text-slate-400 mt-0.5">${invoice.time}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-700">${invoice.total}</span>
                    ${invoice.discount ? `<span class="text-xs text-red-500 mt-0.5">${invoice.discount}</span>` : ''}
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-col text-xs font-medium">
                    <span class="text-emerald-600">Paid: ${invoice.paid}</span>
                    <span class="text-red-500 mt-0.5">Due: ${invoice.due}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                ${getStatusBadge(invoice.status)}
            </td>
            <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                    <button onclick="viewInvoice(${invoice.id})" class="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors" title="View">
                        <i data-lucide="eye" class="w-4 h-4"></i>
                    </button>
                    <button onclick="printInvoice(${invoice.id})" class="p-1.5 border border-slate-200 rounded-lg text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors" title="Print">
                        <i data-lucide="printer" class="w-4 h-4"></i>
                    </button>
                    <button onclick="editInvoice(${invoice.id})" class="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors" title="Edit">
                        <i data-lucide="pencil" class="w-4 h-4"></i>
                    </button>
                    <button onclick="deleteInvoice(${invoice.id})" class="p-1.5 border border-red-200 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors" title="Delete">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Re-initialize icons for new elements
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Filter Functionality
function applyFilters() {
    const searchTerm = document.getElementById('filter-search').value.toLowerCase();
    const statusFilter = document.getElementById('filter-status').value;
    const dateFrom = document.getElementById('filter-date-from').value;
    const dateTo = document.getElementById('filter-date-to').value;

    const filteredInvoices = invoices.filter(invoice => {
        // Search Filter (Patient Name or Invoice #)
        const matchesSearch = invoice.patientName.toLowerCase().includes(searchTerm) || 
                            invoice.invoiceNumber.toLowerCase().includes(searchTerm);
        
        // Status Filter
        const matchesStatus = statusFilter === '' || invoice.status === statusFilter;
        
        // Date Range Filter
        let matchesDate = true;
        if (dateFrom || dateTo) {
            const invoiceDate = new Date(invoice.date);
            if (dateFrom) {
                matchesDate = matchesDate && invoiceDate >= new Date(dateFrom);
            }
            if (dateTo) {
                matchesDate = matchesDate && invoiceDate <= new Date(dateTo);
            }
        }

        return matchesSearch && matchesStatus && matchesDate;
    });

    renderInvoices(filteredInvoices);
}

// Action Functions
function viewInvoice(id) {
    const invoice = invoices.find(inv => inv.id === id);
    console.log('View Invoice:', invoice);
}

function editInvoice(id) {
    console.log('Edit Invoice ID:', id);
}

function printInvoice(id) {
    console.log('Printing Invoice ID:', id);
    window.print();
}

function deleteInvoice(id) {
    if (confirm('Are you sure you want to delete this invoice?')) {
        invoices = invoices.filter(inv => inv.id !== id);
        applyFilters(); // Re-render with filters applied
        console.log('Deleted Invoice ID:', id);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Check for new invoice from URL params (Simulated persistence)
    const urlParams = new URLSearchParams(window.location.search);
    const newInvoiceParam = urlParams.get('newInvoice');
    
    if (newInvoiceParam) {
        try {
            const newInvoice = JSON.parse(newInvoiceParam);
            invoices.unshift(newInvoice);
            // Clean URL without reload
            window.history.replaceState({}, document.title, window.location.pathname);
        } catch (e) {
            console.error('Failed to parse new invoice data', e);
        }
    }

    renderInvoices();

    // Attach Filter Event Listeners
    document.getElementById('filter-search').addEventListener('input', applyFilters);
    document.getElementById('filter-status').addEventListener('change', applyFilters);
    document.getElementById('filter-date-from').addEventListener('change', applyFilters);
    document.getElementById('filter-date-to').addEventListener('change', applyFilters);
    
    // Clear Filters
    document.getElementById('btn-clear-filters').addEventListener('click', () => {
        document.getElementById('filter-search').value = '';
        document.getElementById('filter-status').value = '';
        document.getElementById('filter-date-from').value = '';
        document.getElementById('filter-date-to').value = '';
        applyFilters();
    });
});
