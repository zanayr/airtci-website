(function() {
    const nav = document.getElementById('nav');
    const contact = document.getElementById('contact');
    const openContactIds = ['nav-contact', 'main-contact', 'footer-contact'];

    function close(aside) {
        aside.classList.remove('active');
    }
    function open(aside) {
        aside.classList.add('active');
    }

    window.addEventListener('click', e => {
        const id = e.target.id;
        if (id === 'open-nav') open(nav);
        if (id === 'close-nav') close(nav);
        if (openContactIds.includes(id)) open(contact);
        if (id == 'close-contact') close(contact);
        if (e.target.matches('.nav-link')) close(nav);
    });
    document.getElementById('year').innerHTML = new Date(Date.now()).getFullYear().toString();
}());