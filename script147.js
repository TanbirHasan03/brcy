const counters = document.querySelectorAll('.number147');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200; // Adjust speed by changing 100

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 20); // Speed of animation
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
