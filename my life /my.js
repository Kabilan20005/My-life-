// Optional: Add JavaScript for interactivity or animations
// Example: Carousel for products

const products = document.querySelectorAll('.product');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    products[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % products.length;
    products[currentIndex].classList.add('active');
});

prevBtn.addEventListener('click', () => {
    products[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    products[currentIndex].classList.add('active');
});
