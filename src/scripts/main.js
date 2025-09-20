
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

// Clique nas bolinhas
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showTestimonial(i));
});

// Autoplay: muda testimonial a cada 5 segundos
setInterval(() => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(nextIndex);
}, 5000);
