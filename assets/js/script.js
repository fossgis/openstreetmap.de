// Toggles the Menu in the navigation bar for mobile devices.
document.getElementById('menu-toggle').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementsByTagName('nav')[0].classList.toggle('responsive');
});

