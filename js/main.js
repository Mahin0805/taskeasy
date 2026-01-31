// Main JavaScript file
console.log('Admin Dashboard initialized');

// Initialize Lucide Icons
lucide.createIcons();

// Date Range Picker Handling
const dateFromInput = document.getElementById('dateFrom');
const dateToInput = document.getElementById('dateTo');

// Log date changes (for demonstration)
function handleDateChange() {
    console.log(`Date Range: ${dateFromInput.value} to ${dateToInput.value}`);
}

dateFromInput.addEventListener('change', handleDateChange);
dateToInput.addEventListener('change', handleDateChange);

// KPI Manager Class
class KPIManager {
    constructor() {
        this.container = document.getElementById('kpi-grid');
        this.data = [
            {
                id: 1,
                title: 'Total Sales',
                value: '৳ 95,858',
                icon: 'wallet',
                colorTheme: 'blue',
                status: {
                    icon: 'trending-up',
                    label: '+100.0%',
                    subtext: 'vs previous period',
                    type: 'success'
                }
            },
            {
                id: 2,
                title: 'Total Invoices',
                value: '15',
                icon: 'file-text',
                colorTheme: 'emerald',
                status: {
                    icon: 'check-circle-2',
                    label: 'Active',
                    subtext: '15 generated in period',
                    type: 'success'
                }
            },
            {
                id: 3,
                title: 'Outstanding Due',
                value: '৳ 71,698',
                icon: 'history',
                colorTheme: 'rose',
                status: {
                    icon: 'alert-circle',
                    label: 'Pending',
                    subtext: 'Requires attention',
                    type: 'danger'
                }
            },
            {
                id: 4,
                title: 'Total Patients',
                value: '8',
                icon: 'users',
                colorTheme: 'amber',
                status: {
                    icon: 'user-check',
                    label: 'Registered',
                    subtext: 'Total lifetime patients',
                    type: 'warning'
                }
            }
        ];
        this.init();
    }

    init() {
        if (this.container) {
            this.render();
            // Re-initialize icons for the new content
            lucide.createIcons();
        }
    }

    getThemeClasses(theme) {
        const themes = {
            blue: {
                bg: 'bg-blue-50',
                text: 'text-blue-600',
                badgeBg: 'bg-blue-50',
                badgeText: 'text-blue-600'
            },
            emerald: {
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
                badgeBg: 'bg-emerald-50',
                badgeText: 'text-emerald-600'
            },
            rose: {
                bg: 'bg-rose-50',
                text: 'text-rose-600',
                badgeBg: 'bg-rose-50',
                badgeText: 'text-rose-600'
            },
            amber: {
                bg: 'bg-amber-50',
                text: 'text-amber-600',
                badgeBg: 'bg-amber-50',
                badgeText: 'text-amber-600'
            }
        };
        return themes[theme] || themes.blue;
    }

    getStatusColor(type) {
        const colors = {
            success: 'text-emerald-600',
            danger: 'text-rose-600',
            warning: 'text-amber-600',
            neutral: 'text-slate-600'
        };
        return colors[type] || colors.neutral;
    }

    render() {
        this.container.innerHTML = this.data.map(item => {
            const theme = this.getThemeClasses(item.colorTheme);
            const statusColor = this.getStatusColor(item.status.type);
            
            return `
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out cursor-default group">
                    <div class="flex justify-between items-start mb-4">
                        <div class="w-12 h-12 rounded-full ${theme.bg} flex items-center justify-center ${theme.text} transition-colors">
                            <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                        </div>
                        <span class="${theme.badgeBg} ${theme.badgeText} text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            ${item.title}
                        </span>
                    </div>
                    
                    <div class="mb-4">
                        <h3 class="text-3xl font-bold text-slate-800 tracking-tight">${item.value}</h3>
                    </div>

                    <div class="flex items-center gap-2 text-xs">
                        <i data-lucide="${item.status.icon}" class="w-4 h-4 ${statusColor}"></i>
                        <span class="font-bold ${statusColor}">${item.status.label}</span>
                        <span class="text-slate-400 font-medium">${item.status.subtext}</span>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Initialize KPI Manager
new KPIManager();

// Chart Manager Class
class ChartManager {
    constructor() {
        this.initRevenueChart();
        this.initPaymentChart();
    }

    initRevenueChart() {
        const ctx = document.getElementById('revenueChart').getContext('2d');
        
        // Create Gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)'); // Blue-500 with opacity
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');   // Transparent

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 15000, 11000, 18000, 14000, 32000, 38000, 35000, 28000, 22000, 15000, 10000], // Mock curve matching screenshot
                    borderColor: '#3b82f6', // Blue-500
                    backgroundColor: gradient,
                    borderWidth: 3,
                    tension: 0.4, // Smooth curve
                    fill: true,
                    pointRadius: 0, // Hide points by default
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#3b82f6',
                    pointHoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false, // NO ANIMATION
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        padding: 12,
                        titleFont: { size: 13 },
                        bodyFont: { size: 13 },
                        displayColors: false,
                        cornerRadius: 8
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f1f5f9', // Slate-100
                            borderDash: [5, 5]
                        },
                        ticks: {
                            color: '#94a3b8', // Slate-400
                            font: { size: 11 }
                        },
                        border: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: '#94a3b8',
                            font: { size: 11 }
                        },
                        border: { display: false }
                    }
                }
            }
        });
    }

    initPaymentChart() {
        const ctx = document.getElementById('paymentChart').getContext('2d');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Paid', 'Due', 'Partial'],
                datasets: [{
                    data: [45, 25, 30], // Mock proportions
                    backgroundColor: [
                        '#10b981', // Emerald-500 (Paid)
                        '#f43f5e', // Rose-500 (Due)
                        '#f59e0b'  // Amber-500 (Partial)
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%', // Thinner ring
                animation: false, // NO ANIMATION
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false } // Disable tooltips for cleaner look as requested "Center text showing total"
                }
            }
        });
    }
}

// Initialize Charts
document.addEventListener('DOMContentLoaded', () => {
    new ChartManager();
    new InvoiceManager();
    new InvestigationManager();
});

// Investigation Manager Class
class InvestigationManager {
    constructor() {
        this.container = document.getElementById('top-investigations-list');
        this.data = [
            {
                name: 'Ultrasound',
                count: '11 tests performed',
                amount: '৳ 48,600',
                progress: 80,
                icon: 'flask-conical'
            },
            {
                name: 'ECG',
                count: '6 tests performed',
                amount: '৳ 52,400',
                progress: 90,
                icon: 'activity'
            }
        ];
        this.init();
    }

    init() {
        if (this.container) {
            this.render();
            lucide.createIcons();
        }
    }

    render() {
        this.container.innerHTML = this.data.map(item => `
            <div>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                            <i data-lucide="${item.icon}" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-slate-800">${item.name}</h4>
                            <p class="text-xs text-slate-500 font-medium">${item.count}</p>
                        </div>
                    </div>
                    <span class="text-sm font-bold text-blue-600">${item.amount}</span>
                </div>
                <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-600 rounded-full" style="width: ${item.progress}%"></div>
                </div>
            </div>
        `).join('');
    }
}

// Invoice Manager Class
class InvoiceManager {
    constructor() {
        this.container = document.getElementById('invoice-table-body');
        this.data = [
            {
                id: '#INV-20260130-448811',
                date: '2026-01-30 00:00:00',
                patient: { name: 'mahin', id: '01729612471', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 1,800',
                status: 'Partial'
            },
            {
                id: '#INV-20260126-123989',
                date: '2026-01-26 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '01841961993', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 8,900',
                status: 'Partial'
            },
            {
                id: '#INV-20260126-386881',
                date: '2026-01-26 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '01841961993', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 18,900',
                status: 'Due'
            },
            {
                id: '#INV-20260125-558738',
                date: '2026-01-25 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '018419619', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 4,000',
                status: 'Due'
            },
            {
                id: '#INV-20260125-222450',
                date: '2026-01-25 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '0184151993', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 3,800',
                status: 'Due'
            },
            {
                id: '#INV-20260125-346504',
                date: '2026-01-25 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '01841961993', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 4,000',
                status: 'Due'
            },
            {
                id: '#INV-20260125-744287',
                date: '2026-01-25 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '23738', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 4,000',
                status: 'Due'
            },
            {
                id: '#INV-20260125-933071',
                date: '2026-01-25 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '2384784', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 13,998',
                status: 'Due'
            },
            {
                id: '#INV-20260125-314066',
                date: '2026-01-25 00:00:00',
                patient: { name: 'Sabbir Ahmed', id: '01841961993', avatarColor: 'bg-blue-100 text-blue-600' },
                amount: '৳ 4,000',
                status: 'Due'
            }
        ];
        this.init();
    }

    init() {
        if (this.container) {
            this.render();
            lucide.createIcons();
        }
    }

    getStatusClass(status) {
        return status === 'Partial' 
            ? 'bg-amber-50 text-amber-600' 
            : 'bg-rose-50 text-rose-600';
    }

    render() {
        this.container.innerHTML = this.data.map(item => {
            const statusClass = this.getStatusClass(item.status);
            // Get first letter of first name
            const initial = item.patient.name.charAt(0).toUpperCase();
            
            return `
                <tr class="hover:bg-slate-50 transition-colors group">
                    <td class="px-6 py-4">
                        <div class="flex flex-col">
                            <span class="text-xs font-bold text-slate-700">${item.id}</span>
                            <span class="text-[10px] text-slate-400 mt-0.5">${item.date}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full ${item.patient.avatarColor} flex items-center justify-center text-xs font-bold uppercase">
                                ${initial}
                            </div>
                            <div class="flex flex-col">
                                <span class="text-xs font-bold text-slate-700">${item.patient.name}</span>
                                <span class="text-[10px] text-slate-400 mt-0.5">${item.patient.id}</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <span class="text-xs font-bold text-slate-700">${item.amount}</span>
                    </td>
                    <td class="px-6 py-4">
                        <span class="${statusClass} text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
                            <div class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                            ${item.status}
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <button class="p-1.5 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-lg transition-colors">
                                <i data-lucide="eye" class="w-4 h-4"></i>
                            </button>
                            <button class="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
                                <i data-lucide="printer" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }
}
