// fade animation
const faders = document.querySelectorAll('.fade-in');

// slide-left and slide-right animaton
const sliders_left = document.querySelectorAll('.slide-left');
const sliders_right = document.querySelectorAll('.slide-right');

// fade animation
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

// slide animaton
const slideOptions = {
    threshold: 1,
}

// fade animation
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

// slide animation
const slideOnScroll = new IntersectionObserver(function(
    entries,
    slideOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            slideOnScroll.unobserve(entry.target);
        }
    });
}, slideOptions);

// fade animation
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// slide animation
sliders_left.forEach(slider_left => {
    slideOnScroll.observe(slider_left);
})
sliders_right.forEach(slider_right => {
    slideOnScroll.observe(slider_right);
})

