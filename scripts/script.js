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
    // Submit function
    // Should submit the contact form after running the reCaptcha API
    function submit(e) {
        e.preventDefault();
        grecaptcha.ready(() => {
            grecaptcha.execute('6LcHvaUZAAAAAMUFMcYoyZJ1I9Tmx5RITPfRgDNb', {action: 'submit'})
                .then(token => {
                    let data;
                    document.getElementById('captcha').value = token;
                    // serialize the data
                    data = new URLSearchParams(new FormData(document.getElementById('form')));
                    fetch('./scripts/mail.php', {method: 'POST', body: data})
                        .then(response => {
                            document.getElementById('form').reset();
                            close(document.getElementById('contact'));
                            alert("Your information has been sent to AirTCI.");
                        })
                        .catch(error => {
                            document.getElementById('form').reset();
                            alert("There was an error, please try again.");
                        });
                });
        });
    }
    // Event delegation
    document.addEventListener('click', event => {
        if (event.target.classList.contains('nav-link')) return;
        event.preventDefault();
        if (event.target.id == 'open-nav') return open(document.getElementById('nav'));
        if (event.target.id == 'close-nav') return close(document.getElementById('nav'));
        if (event.target.classList.contains('contact-link')) return open(document.getElementById('contact'));
        if (event.target.id == 'close-contact') return close(document.getElementById('contact'));
        return;
    });
    window.addEventListener('load', () => {
        document.getElementById('year').innerHTML = new Date(Date.now()).getFullYear().toString();
        setTimeout(() => {
            // Unobscure the email links to protect against website scrapers
            const emailLinks = document.getElementsByClassName('email-link');
            for (link of emailLinks) {
                link.innerHTML = `${(1757772843832).toString(36)}@airtci.com`;
                link.href = `mailto:${(1757772843832).toString(36)}@airtci.com`;
            }
        }, 250);
    });
    document.getElementById('submit').addEventListener('click', submit);
}());