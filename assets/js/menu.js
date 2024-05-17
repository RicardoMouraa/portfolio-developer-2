document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.add('open');
        menu.classList.add('slide-in');
    });

    closeIcon.addEventListener('click', function() {
        menu.classList.remove('slide-in');
        setTimeout(() => menu.classList.remove('open'), 300); 
    });
});
