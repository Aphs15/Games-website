// Scroll Reveal Functionality
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}
showSlide(currentSlide);
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Lightbox for Image Gallery
function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightboxImg').src = img.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
