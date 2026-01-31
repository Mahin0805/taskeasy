// Mock Data - Invoices with Referrer ID
const invoices = [
    { id: 1, date: '2026-01-30', total: 1800, paid: 700, referrerId: '0001' },
    { id: 2, date: '2026-01-26', total: 18900, paid: 0, referrerId: '0002' },
    { id: 3, date: '2026-01-26', total: 8900, paid: 1000, referrerId: '0001' },
    { id: 4, date: '2026-01-25', total: 4000, paid: 0, referrerId: '0002' },
    { id: 5, date: '2026-01-24', total: 5000, paid: 5000, referrerId: '0001' },
    { id: 6, date: '2026-01-20', total: 1200, paid: 1200, referrerId: null }, // No referrer
];

// Mock Data - Referrers
const referrers = [
    { id: '0001', name: 'Khaled', phone: '6543456789098', commission: 10, initials: 'K', color: 'bg-blue-100 text-blue-600' },
    { id: '0002', name: 'Dr. Sarah Smith', phone: '01711223344', commission: 15, initials: 'S', color: 'bg-purple-100 text-purple-600' }
];

// Render Function
function renderCommissions(invoiceData) {
    const tableBody = document.getElementById('report-list');
    tableBody.innerHTML = '';

    // Group Data by Referrer
    const reportData = referrers.map(referrer => {
        const referrerInvoices = invoiceData.filter(inv => inv.referrerId === referrer.id);
        
        let totalCommission = 0;
        let totalPaid = 0;
        let invoiceCount = referrerInvoices.length;

        referrerInvoices.forEach(inv => {
            // Commission calculated on TOTAL amount (standard practice) or PAID amount?
            // Assuming Commission on Total Bill Amount as per generic business logic unless specified.
            // Requirement says "Calculate commission dynamically".
            // Let's assume Commission = Invoice Total * Rate / 100
            const commAmount = (inv.total * referrer.commission) / 100;
            totalCommission += commAmount;
            
            // For Paid/Pending split:
            // Often agents are paid when invoice is paid. 
            // Let's assume:
            // Paid Commission = (Invoice Paid Amount * Rate / 100)
            // Pending Commission = Total Commission - Paid Commission
            const paidComm = (inv.paid * referrer.commission) / 100;
            totalPaid += paidComm;
        });

        return {
            ...referrer,
            totalCommission,
            paidCommission: totalPaid,
            pendingCommission: totalCommission - totalPaid,
            invoiceCount
        };
    }).filter(r => r.invoiceCount > 0); // Only show active referrers in period

    // Calculate Grand Totals
    const grandTotal = reportData.reduce((acc, curr) => acc + curr.totalCommission, 0);
    const grandPaid = reportData.reduce((acc, curr) => acc + curr.paidCommission, 0);
    const grandPending = reportData.reduce((acc, curr) => acc + curr.pendingCommission, 0);
    const totalInvoices = reportData.reduce((acc, curr) => acc + curr.invoiceCount, 0);

    // Update Summary Cards
    document.getElementById('summary-commission').textContent = `৳ ${grandTotal.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
    document.getElementById('summary-invoices').textContent = totalInvoices;
    document.getElementById('summary-referrers').textContent = reportData.length;

    // Render Rows
    reportData.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-50 transition-colors group border-b border-slate-50 last:border-0';
        
        row.innerHTML = `
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-sm font-bold uppercase">
                        ${item.initials}
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm font-bold text-slate-700">${item.name}</span>
                        <span class="text-xs text-slate-400">${item.phone}</span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 text-right">
                <span class="text-sm font-bold text-slate-800">৳ ${item.totalCommission.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
            </td>
            <td class="px-6 py-4 text-right">
                <span class="text-sm font-bold text-emerald-600">৳ ${item.paidCommission.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
            </td>
            <td class="px-6 py-4 text-right">
                <span class="text-sm font-bold text-red-500">৳ ${item.pendingCommission.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
            </td>
            <td class="px-6 py-4 text-right">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${item.pendingCommission <= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}">
                    <div class="w-1.5 h-1.5 rounded-full bg-current"></div>
                    ${item.pendingCommission <= 0 ? 'Settled' : 'Pending'}
                </span>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Update Footer
    document.getElementById('footer-commission').textContent = `৳ ${grandTotal.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
    document.getElementById('footer-paid').textContent = `৳ ${grandPaid.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
    document.getElementById('footer-pending').textContent = `৳ ${grandPending.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;

    // Initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Filter Function
function updateReport() {
    const dateFrom = document.getElementById('dateFrom').value;
    const dateTo = document.getElementById('dateTo').value;
    const referrerId = document.getElementById('referrerFilter').value;

    let filteredInvoices = invoices.filter(item => {
        const itemDate = new Date(item.date);
        let matches = true;

        if (dateFrom) matches = matches && itemDate >= new Date(dateFrom);
        if (dateTo) matches = matches && itemDate <= new Date(dateTo);
        if (referrerId) matches = matches && item.referrerId === referrerId;

        return matches;
    });

    renderCommissions(filteredInvoices);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Populate Referrer Dropdown
    const select = document.getElementById('referrerFilter');
    referrers.forEach(ref => {
        const option = document.createElement('option');
        option.value = ref.id;
        option.textContent = ref.name;
        select.appendChild(option);
    });

    // Set default date range (Current Month)
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const formatDate = (d) => d.toISOString().split('T')[0];
    
    document.getElementById('dateFrom').value = formatDate(firstDay);
    document.getElementById('dateTo').value = formatDate(today);

    // Initial Render
    updateReport();
});