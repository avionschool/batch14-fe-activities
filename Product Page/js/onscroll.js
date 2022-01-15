const faders = document.querySelectorAll('.fade-in');

const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
};

const slideInOptions = {
    threshold: 0
}

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
}, slideInOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    slideOnScroll.observe(slider);
});

