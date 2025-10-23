const bgImages = [
  'images/haiphong1.jpg',
  'images/haiphongport.jpg',
  'images/cuisine.jpg'
];

bgImages.forEach(src => {
  const img = new Image();
  img.src = src;
});


const updateBackground = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      document.querySelector('.bg').style.backgroundImage = section.dataset.bg;
    }
  });
};

// Run on scroll
window.addEventListener('scroll', updateBackground);

// Run once on page load
window.addEventListener('load', updateBackground);
