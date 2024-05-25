function toggleNavbar() {
    const navbarLinks = document.getElementById('navbar-links');
    const band = document.getElementById('brand')
    if (navbarLinks.style.display === 'flex') {
        navbarLinks.style.display = 'none';
        band.style.display = 'block';
        
    } else {
        navbarLinks.style.display = 'flex';
        band.style.display = 'none';
    }
}
