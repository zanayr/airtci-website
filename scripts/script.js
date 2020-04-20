(function () {
    const slides = document.getElementsByClassName('slide');
    const count = slides.length;
    const delay = 1000;
    let current = 0;
    let last;
    
    document.getElementById('nav-open').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('nav').classList.add('active');
    });

    document.getElementById('nav-close').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('nav').classList.remove('active');
    });

    document.getElementById('contact-close').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('contact').classList.remove('active');
    });

    for (element of document.getElementsByClassName('button')) {
        if (element.attributes['data-action']) {
            element.addEventListener('click', e => {
                e.preventDefault();
                document.getElementById('contact').classList.add('active');
            });
        }
    }
    for (element of document.getElementsByClassName('nav-button')) {
        element.addEventListener('click', e => {
            document.getElementById('nav').classList.remove('active');
        })
    }

    function carosel() {
        setInterval(() => {
            last = current;
            current = current >= count - 1 ? 0 : current + 1;

            setTimeout(() => {
                slides[last].classList.remove('active');
            }, delay);
            slides[last].style.zIndex = -1;

            slides[current].classList.add('active');
            slides[current].style.zIndex = 1;
        }, 3000);
    }
    carosel();
}());