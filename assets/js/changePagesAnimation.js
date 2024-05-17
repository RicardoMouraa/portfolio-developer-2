document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const navLinks = document.querySelectorAll('.lista-navegacao a');
    const loader = document.querySelector('.loader');

    function fadeOut(currentUrl) {
        body.style.transition = 'opacity 2s ease';
        body.style.opacity = 0;  
        loader.style.transform = 'translateX(0%)'; 

        setTimeout(() => {
            window.location.href = currentUrl;  
        }, 500);
    }

    function handleNavLinkActivation(e) {
        const url = this.getAttribute('href'); 
        if (url === 'index.html' || url.includes('viverdefreelancer.com.br')) return;  

        e.preventDefault();  
        fadeOut(url);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkActivation);
        link.addEventListener('touchstart', handleNavLinkActivation);
    });

    
    window.addEventListener('load', () => {
        body.style.opacity = 1;  
    });
});
