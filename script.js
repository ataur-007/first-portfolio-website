let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides - 2) {
        currentIndex = totalSlides - 3;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * (100 / 3);
    slider.style.transform = `translateX(${translateValue}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Initial load
showSlide(currentIndex);
