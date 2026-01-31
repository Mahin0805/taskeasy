document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('aside');
    
    // Create Overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-slate-900/50 z-30 hidden transition-opacity opacity-0 md:hidden';
    document.body.appendChild(overlay);

    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        
        if (isClosed) {
            // Open Sidebar
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        } else {
            // Close Sidebar
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('opacity-0');
            // Wait for transition to finish before hiding
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }
    }

    // Event Listeners
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    // Close when clicking overlay
    overlay.addEventListener('click', toggleSidebar);

    // Close when clicking a link in sidebar (on mobile)
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) { // md breakpoint
                toggleSidebar();
            }
        });
    });

    // Handle resize - reset state if moving to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.add('hidden');
            overlay.classList.add('opacity-0');
        } else {
            // If moving to mobile, default to closed
            if (!sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.add('-translate-x-full');
            }
        }
    });
    
    // Initial check
    if (window.innerWidth < 768) {
        sidebar.classList.add('-translate-x-full');
    }
});
