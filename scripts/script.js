(function() {
    // Open and close functions to open and close passed HTML aside elements
    function close(aside) {
        if (aside.id === 'contact') document.body.classList.remove('lock');
        aside.classList.remove('active');
    }
    function open(aside) {
        if (aside.id === 'contact') document.body.classList.add('lock');
        aside.classList.add('active');
    }

    // Event delegation
    document.addEventListener('click', event => {
        if (event.target.classList.contains('nav-link')) return;
        event.preventDefault();
        if (event.target.id == 'open-nav') return open(document.getElementById('nav'));
        if (event.target.id == 'close-nav') return close(document.getElementById('nav'));
        if (event.target.classList.contains('contact-link')) return open(document.getElementById('contact'));
        if (event.target.id == 'close-contact') return close(document.getElementById('contact'));
    });
    window.addEventListener('load', () => {
        document.getElementById('year').innerHTML = new Date(Date.now()).getFullYear().toString();
        setTimeout(() => {
            // Unobscure the phone and email links to protect against website scrapers
            const emailLinks = document.getElementsByClassName('email-link');
            const phoneLink = document.getElementById('phone');
            for (link of emailLinks) {
                link.innerHTML = `${(29234652).toString(36)}@airtci.com`;
                link.href = `mailto:${(29234652).toString(36)}@airtci.com`;
            }
            phoneLink.innerHTML = `+1 602 ${parseInt("33a", 16)} 0170`;
            phoneLink.href = `tel:1602${parseInt("33a", 16)}0170`;
        }, 250);
    }) 
}());