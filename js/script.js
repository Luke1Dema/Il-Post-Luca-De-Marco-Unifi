/**
 * Logica per l'header appiccicoso (Sticky Header)
 */
const headerWrapper = document.getElementById('mainHeader');
const body = document.body;

const handleScroll = () => {
    // Ottieni la posizione attuale dello scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Se scendiamo oltre i 300px, attiva l'header ridotto
    if (scrollTop > 300) {
        headerWrapper.classList.add('header-scrolled');
        body.classList.add('sticky-active');
    }
    // Se torniamo verso l'alto (sopra i 100px), resetta tutto
    else if (scrollTop < 100) {
        headerWrapper.classList.remove('header-scrolled');
        body.classList.remove('sticky-active');
    }
};

// Listener per l'evento scroll
window.addEventListener('scroll', handleScroll, { passive: true });