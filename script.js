document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 100,
            duration: 800,
        });
    }

    const mobileBtn = document.getElementById('mobile-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            mobileMenu.classList.toggle('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }

    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Ticket popup
    
    const modal = document.getElementById('ticket-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const okBtn = document.getElementById('modal-ok-btn');
    const ticketTriggers = document.querySelectorAll('.ticket-trigger');

    function openModal(e) {
        if(e) e.preventDefault(); 
        if(modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
    }

    function closeModal() {
        if(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    ticketTriggers.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(okBtn) okBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
});