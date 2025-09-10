document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('expand-toggle-btn');
    const mainContent = document.querySelector('.main-content');
    const app = document.querySelector('.app');

    if (toggleBtn && mainContent && app) {
        toggleBtn.addEventListener('click', function () {
            app.classList.toggle('content-expanded');
            const icon = toggleBtn.querySelector('img');
            if (app.classList.contains('content-expanded')) {
                icon.src = 'assets/images/arrow-down.png'; // Change to down arrow when expanded
            } else {
                icon.src = 'assets/images/arrow-up.png'; // Change to up arrow when collapsed
            }
        });
    }
});
