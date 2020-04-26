(function() {
    const nav = document.getElementById('nav');
    const contact = document.getElementById('contact');
    const openNav = document.getElementById('nav-open');
    const navLinks = document.getElementsByClassName('nav-link');
    const openContacts = document.getElementsByClassName('contact-open');
    const closeNav = document.getElementById('nav-close');
    const closeContact = document.getElementById('contact-close');

    openNav.addEventListener('click', e => {
        e.preventDefault();
        nav.classList.add('active');
    });
    closeNav.addEventListener('click', e => {
        e.preventDefault();
        nav.classList.remove('active');
    });
    for (link of navLinks)
        link.addEventListener('click', e => {
            nav.classList.remove('active');
        });
    for (button of openContacts)
        button.addEventListener('click', e => {
            e.preventDefault();
            contact.classList.add('active');
        });
    closeContact.addEventListener('click', e => {
        e.preventDefault();
        contact.classList.remove('active');
    });
}());