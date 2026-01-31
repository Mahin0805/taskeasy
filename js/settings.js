// Mock Data Store for Settings
let settings = {
    appName: "TaskEasy Diagnostics",
    phone: "+1 (555) 123-4567",
    address: "123 Healthcare Ave, Suite 100\nMetropolis, NY 10012",
    currency: {
        code: "USD",
        symbol: "$",
        name: "US Dollar"
    },
    logo: null // DataURL string
};

// Common Currencies List
const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar" },
    { code: "AED", symbol: "dh", name: "UAE Dirham" },
];

// DOM Elements
const elements = {
    appName: document.getElementById('appName'),
    phone: document.getElementById('contactPhone'),
    address: document.getElementById('address'),
    logoInput: document.getElementById('logoInput'),
    logoPreview: document.getElementById('logoPreview'),
    logoPlaceholder: document.getElementById('logoPlaceholder'),
    removeLogoBtn: document.getElementById('removeLogoBtn'),
    currencyCodeDisplay: document.getElementById('currencyCodeDisplay'),
    currencySymbolPreview: document.getElementById('currencySymbolPreview'),
    currencyModal: document.getElementById('currencyModal'),
    currencyModalContent: document.getElementById('currencyModalContent'),
    currencyList: document.getElementById('currencyList'),
    toast: document.getElementById('toast')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    renderCurrencyList();
    setupEventListeners();
});

function setupEventListeners() {
    // Logo Upload
    elements.logoInput.addEventListener('change', handleLogoUpload);
    
    // Remove Logo
    elements.removeLogoBtn.addEventListener('click', () => {
        settings.logo = null;
        updateLogoView();
        elements.logoInput.value = ''; // Reset input
    });

    // Close Modal on Outside Click
    elements.currencyModal.addEventListener('click', (e) => {
        if (e.target === elements.currencyModal) {
            closeCurrencyModal();
        }
    });
}

function loadSettings() {
    // Text Fields
    elements.appName.value = settings.appName;
    elements.phone.value = settings.phone;
    elements.address.value = settings.address;

    // Currency
    updateCurrencyView();

    // Logo
    updateLogoView();
}

function updateLogoView() {
    if (settings.logo) {
        elements.logoPreview.src = settings.logo;
        elements.logoPreview.classList.remove('hidden');
        elements.logoPlaceholder.classList.add('hidden');
        elements.removeLogoBtn.classList.remove('hidden');
    } else {
        elements.logoPreview.src = '';
        elements.logoPreview.classList.add('hidden');
        elements.logoPlaceholder.classList.remove('hidden');
        elements.removeLogoBtn.classList.add('hidden');
    }
}

function handleLogoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            settings.logo = e.target.result; // Save DataURL
            updateLogoView();
        };
        reader.readAsDataURL(file);
    }
}

function updateCurrencyView() {
    elements.currencyCodeDisplay.value = `${settings.currency.code} - ${settings.currency.name}`;
    elements.currencySymbolPreview.textContent = settings.currency.symbol;
}

// Currency Modal Functions
function openCurrencyModal() {
    elements.currencyModal.classList.remove('hidden');
    // Small timeout to allow display:block to apply before opacity transition
    setTimeout(() => {
        elements.currencyModal.classList.remove('opacity-0');
        elements.currencyModalContent.classList.remove('scale-95');
        elements.currencyModalContent.classList.add('scale-100');
    }, 10);
}

function closeCurrencyModal() {
    elements.currencyModal.classList.add('opacity-0');
    elements.currencyModalContent.classList.remove('scale-100');
    elements.currencyModalContent.classList.add('scale-95');
    
    setTimeout(() => {
        elements.currencyModal.classList.add('hidden');
    }, 200);
}

function renderCurrencyList() {
    elements.currencyList.innerHTML = currencies.map(curr => `
        <button onclick="selectCurrency('${curr.code}')" class="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between group ${settings.currency.code === curr.code ? 'bg-blue-50/50' : ''}">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-serif font-bold group-hover:bg-white group-hover:shadow-sm transition-all">
                    ${curr.symbol}
                </div>
                <div>
                    <div class="font-bold text-slate-700">${curr.code}</div>
                    <div class="text-xs text-slate-500">${curr.name}</div>
                </div>
            </div>
            ${settings.currency.code === curr.code ? '<i data-lucide="check" class="w-4 h-4 text-blue-600"></i>' : ''}
        </button>
    `).join('');
    
    // Re-initialize icons for the new content
    if (window.lucide) lucide.createIcons();
}

function selectCurrency(code) {
    const selected = currencies.find(c => c.code === code);
    if (selected) {
        settings.currency = selected;
        updateCurrencyView();
        renderCurrencyList(); // Re-render to update checkmark
        closeCurrencyModal();
    }
}

// Save Function
function saveSettings() {
    // Update data from inputs
    settings.appName = elements.appName.value;
    settings.phone = elements.phone.value;
    settings.address = elements.address.value;
    
    console.log('Settings Saved:', settings);
    showToast();
}

function showToast() {
    elements.toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        elements.toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}
