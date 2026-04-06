document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});


// Handle View More button click
const viewMoreBtn = document.querySelector('.ViewMore');
if (viewMoreBtn && !viewMoreBtn.classList.contains('nav-link')) {
    viewMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}