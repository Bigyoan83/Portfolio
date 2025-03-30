document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // une seule fois
        }
      });
    }, {
      threshold: 0.1
    });
  
    fadeElements.forEach(el => {
      appearOnScroll.observe(el);
    });
  });

  // Scroll effect on navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-header');
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    fadeElements.forEach(el => {
      appearOnScroll.observe(el);
    });
  });

  let slideIndex = 0;
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      gsap.to(carouselWrapper, {
        x: -slideIndex * 100 + "%",
        duration: 1,
        ease: "power2.inOut"
      });
    }

    setInterval(nextSlide, 3000);

  
  