// navbar.js — small, reusable script for mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      // find the nav sibling
      const nav = document.querySelector('.nav');
      if (nav) nav.classList.toggle('open');

      // animate hamburger
      btn.classList.toggle('open');
    });
  });

  // Close nav when clicking a link (mobile)
  document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      const toggle = document.querySelector('.nav-toggle');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (toggle) toggle.classList.remove('open');
      }
    });
  });
});

// fade in elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
});

document.querySelectorAll('.card, .photo, .about-text, .about-image').forEach((el) => observer.observe(el));
