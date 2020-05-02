(function() {
    const nav = document.getElementById('nav');
    const contact = document.getElementById('contact');
    const openContactIds = ['nav-contact', 'main-contact', 'footer-contact'];
    const enabled = false; //'scrollBehavior' in document.documentElement.style;
    let step;
    let target;
    let direction;
    
    function close(aside) {
        if (aside.id === 'contact') document.body.classList.remove('lock');
        aside.classList.remove('active');
    }
    function open(aside) {
        if (aside.id === 'contact') document.body.classList.add('lock');
        aside.classList.add('active');
    }
    function scroll() {
        if (direction == 1) {
            if (window.pageYOffset >= target || window.pageYOffset + window.innerHeight >= document.body.clientHeight - 1) {
                window.scrollTo(0, target);
            } else {
                window.scrollTo(0, window.pageYOffset + (step * direction));
                requestAnimationFrame(scroll);
            }
        } else if (direction == -1) {
            if (window.pageYOffset <= target || window.pageYOffset + window.innerHeight >= document.body.clientHeight - 1) {
                window.scrollTo(0, target);
            } else {
                window.scrollTo(0, window.pageYOffset + (step * direction));
                requestAnimationFrame(scroll);
            }
        }
    }
    function polyfill(id) {
        target = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset;
        if (!isFinite(target) || target == 0) return;
        step = target / 30;
        direction = target > window.pageYOffset ? 1 : -1;
        requestAnimationFrame(scroll);
    }
    document.addEventListener('click', (e) => {
        const id = e.target.id;
        if (id === 'open-nav') open(nav);
        if (id === 'close-nav') close(nav);
        if (openContactIds.includes(id)) open(contact);
        if (id == 'close-contact') close(contact);
        // if (enabled && e.target.matches('.nav-link')) close(nav);
        e.preventDefault();
        if (!enabled && e.target.matches('.nav-link')) polyfill(e.target.dataset.target);
    })
    document.getElementById('year').innerHTML = new Date(Date.now()).getFullYear().toString();
}());