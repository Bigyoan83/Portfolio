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

// Carrousel
  
  document.addEventListener("keydown", (e) => {
    const radio1 = document.getElementById("slide1");
    const radio2 = document.getElementById("slide2");
  
    if (e.key === "ArrowRight") {
      if (radio1.checked) radio2.checked = true;
      else radio1.checked = true;
    }
  
    if (e.key === "ArrowLeft") {
      if (radio2.checked) radio1.checked = true;
      else radio2.checked = true;
    }
  });
  
    
    
    

  
  