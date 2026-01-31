// Mock Data (consistent with invoice structure)
const salesData = [
    {
        id: 1,
        invoiceNumber: '#INV-20260130-445811',
        date: '2026-01-30',
        time: '12:00 AM',
        customer: 'mahin',
        phone: '01729612471',
        total: 1800,
        paid: 700,
        due: 1100,
        status: 'Partial'
    },
    {
        id: 2,
        invoiceNumber: '#INV-20260126-326851',
        date: '2026-01-26',
        time: '12:00 AM',
        customer: 'Sabbir Ahmed',
        phone: '01841961993',
        total: 18900,
        paid: 0,
        due: 18900,
        status: 'Due'
    },
    {
        id: 3,
        invoiceNumber: '#INV-20260126-123989',
        date: '2026-01-26',
        time: '12:00 AM',
        customer: 'Sabbir Ahmed',
        phone: '01841961993',
        total: 8900,
        paid: 1000,
        due: 7900,
        status: 'Partial'
    },
    {
        id: 4,
        invoiceNumber: '#INV-20260125-638084',
        date: '2026-01-25',
        time: '12:00 AM',
        customer: 'Sabbir Ahmed',
        phone: '1233',
        total: 4000,
        paid: 0,
        due: 4000,
        status: 'Due'
    },
    {
        id: 5,
        invoiceNumber: '#INV-20260124-112233',
        date: '2026-01-24',
        time: '10:30 AM',
        customer: 'Rahim Uddin',
        phone: '01711223344',
        total: 5000,
        paid: 5000,
        due: 0,
        status: 'Paid'
    },
    {
        id: 6,
        invoiceNumber: '#INV-20260120-998877',
        date: '2026-01-20',
        time: '02:15 PM',
        customer: 'Karim Ahmed',
        phone: '01998877665',
        total: 1200,
        paid: 1200,
        due: 0,
        status: 'Paid'
    }
];

// Helper: Get Status Badge
function getStatusBadge(status) {
    const styles = {
        'Paid': 'bg-emerald-50 text-emerald-600',
        'Partial': 'bg-amber-50 text-amber-600',
        'Due': 'bg-red-50 text-red-600'
    };
    const style = styles[status] || 'bg-slate-50 text-slate-600';
    
    return `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${style}">
            <div class="w-1.5 h-1.5 rounded-full bg-current"></div>
            ${status}
        </span>
    `;
}

// Render Function
function renderReport(data) {
    const tableBody = document.getElementById('report-list');
    
    // Clear rows
    tableBody.innerHTML = '';

    // Calculate Summaries
    let totalSales = 0;
    let totalCollected = 0;
    let totalDue = 0;

    data.forEach(item => {
        totalSales += item.total;
        totalCollected += item.paid;
        totalDue += item.due;

        // Render Row
        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-50 transition-colors group border-b border-slate-50 last:border-0';
        
        // Format Date (DD Mon YYYY)
        const dateObj = new Date(item.date);
        const dateStr = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

        row.innerHTML = `
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-700">${dateStr}</span>
                    <span class="text-xs text-slate-400 mt-0.5">${item.time}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <span class="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">${item.invoiceNumber}</span>
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-700">${item.customer}</span>
                    <span class="text-xs text-slate-400 mt-0.5">${item.phone}</span>
                </div>
            </td>
            <td class="px-6 py-4 text-right">
                <span class="text-sm font-bold text-slate-800">৳ ${item.total.toLocaleString()}</span>
            </td>
            <td class="px-6 py-4 text-right">
                <span class="text-sm font-bold text-emerald-600">৳ ${item.paid.toLocaleString()}</span>
            </td>
            <td class="px-6 py-4 text-right">
                <span class="text-sm font-bold text-red-500">৳ ${item.due.toLocaleString()}</span>
            </td>
            <td class="px-6 py-4 text-center">
                ${getStatusBadge(item.status)}
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Update Summary Cards
    document.getElementById('summary-total').textContent = `৳ ${totalSales.toLocaleString()}`;
    document.getElementById('summary-collected').textContent = `৳ ${totalCollected.toLocaleString()}`;
    document.getElementById('summary-due').textContent = `৳ ${totalDue.toLocaleString()}`;
    document.getElementById('summary-count').textContent = data.length;

    // Initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Filter Function
function updateReport() {
    const dateFrom = document.getElementById('dateFrom').value;
    const dateTo = document.getElementById('dateTo').value;

    let filteredData = salesData;

    if (dateFrom || dateTo) {
        filteredData = salesData.filter(item => {
            const itemDate = new Date(item.date);
            let matches = true;

            if (dateFrom) {
                matches = matches && itemDate >= new Date(dateFrom);
            }
            if (dateTo) {
                matches = matches && itemDate <= new Date(dateTo);
            }
            return matches;
        });
    }

    renderReport(filteredData);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set default date range (Current Month)
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // Format to YYYY-MM-DD
    const formatDate = (d) => d.toISOString().split('T')[0];
    
    document.getElementById('dateFrom').value = formatDate(firstDay);
    document.getElementById('dateTo').value = formatDate(today);

    // Initial Render (with default filter applied logically, but let's show all or just call updateReport)
    updateReport();
});