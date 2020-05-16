(function () {
    const slides = document.getElementsByClassName('slide');
    const count = slides.length;
    const delay = 2000;
    const duration = 4000;
    let current = 0;
    let last = null;
    let interval = null;
    let timeout = null;
    /**
     * Should transition to the next slide by updating the `last` and `current` indices
     * and setting a timeout for the removal of a tranisionary class
     */
    function transition() {
        // Save the previous slide index in `last` and set the next slide index in
        // `current`
        last = current;
        current = current >= (count - 1) ? 0 : current + 1;
        // Set a timeout to fade the previous slide
        // This is done so that there isn't a "pulse" effect when `last` and
        // `current` slides both reach 0.5 opacity as they transition
        timeout = setTimeout(() => {
            slides[last].classList.remove('trans');
        }, delay);
        // Remove the active class from the `last` slide and add the trans class
        slides[last].classList.remove('active');
        slides[last].classList.add('trans');
        // Set the `current` slide to active
        slides[current].classList.add('active');
    }
    /**
     * Should create an interval that transitions the slides of the carosel
     */
    function carosel() {
        interval = setInterval(() => {
            // Transition to the next slide
            transition();
        }, duration);
        // Set a recurring reset function
        // This is required so that the browser doesn't hiccup if the page is left
        // waiting or in the background
        setTimeout(reset, duration * count * 10);
    }
    /**
     * Should reset the carosel timing
     */
    function reset() {
        // Clear out both the `interval` and `timeout` ids
        clearInterval(interval);
        clearTimeout(timeout);
        // Transition to the next slide
        transition();
        // Relaunch the carosel
        carosel();
    }
    // Launch the carosel
    carosel();
}());