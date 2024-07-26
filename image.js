document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(changeSlide, 3000);
});
