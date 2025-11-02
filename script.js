const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Change hamburger icon to cross
    hamburger.innerHTML = navMenu.classList.contains('active') ? '&times;' : '&#9776;';
});


// Toggle dropdowns on mobile

dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) { // Only for mobile/tablet
            e.preventDefault(); // Prevent link default
            const dropdown = link.nextElementSibling;
            dropdown.classList.toggle('active');
        }
    });
});

