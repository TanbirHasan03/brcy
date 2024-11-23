let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
});

document.querySelector('.next-btn').addEventListener('click', () => {
    showSlides();
});

setInterval(showSlides, 5000);
