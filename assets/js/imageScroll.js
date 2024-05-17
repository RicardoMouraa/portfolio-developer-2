document.addEventListener('DOMContentLoaded', function () {
    const chevron = document.querySelector('.chevron-down');

    setTimeout(() => {
        chevron.style.opacity = '1';
        chevron.style.animation = 'bounce 1.5s infinite';
    }, 1000);

    window.addEventListener('scroll', function () {

        if (window.scrollY > window.innerHeight * 0.1) {
            chevron.style.opacity = '0';
            chevron.style.animation = 'none';
        } else {
            chevron.style.opacity = '1';
            chevron.style.animation = 'bounce 2s infinite';
        }
    });
});