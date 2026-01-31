document.getElementById('form-create-invoice').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const patientName = document.getElementById('input-patient-name').value;
    const phone = document.getElementById('input-phone').value;
    const dateInput = document.getElementById('input-date').value;
    // Total is hardcoded to 1200 for now based on the UI selection, but we should read it
    const total = parseFloat(document.getElementById('input-total').value) || 0;
    const discount = parseFloat(document.getElementById('input-discount').value) || 0;
    const paid = parseFloat(document.getElementById('input-paid').value) || 0;

    // Calculations
    const due = Math.max(0, total - discount - paid);
    let status = 'Due';
    if (due === 0 && total > 0) status = 'Paid';
    else if (paid > 0 && due > 0) status = 'Partial';

    // Format Date (YYYY-MM-DD -> DD Mon YYYY)
    const dateObj = new Date(dateInput);
    const dateStr = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    
    // Create new invoice object
    const newInvoice = {
        id: Date.now(), // Use timestamp for unique ID
        invoiceNumber: `#INV-${new Date().getFullYear()}${Math.floor(Math.random() * 1000000)}`,
        patientName: patientName,
        phone: phone,
        date: dateStr,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        total: `৳ ${total.toLocaleString()}`,
        discount: discount > 0 ? `Disc: - ৳ ${discount.toLocaleString()}` : null,
        paid: `৳ ${paid.toLocaleString()}`,
        due: `৳ ${due.toLocaleString()}`,
        status: status
    };

    // Serialize and redirect
    const params = new URLSearchParams();
    params.set('newInvoice', JSON.stringify(newInvoice));
    
    window.location.href = `invoices.html?${params.toString()}`;
});