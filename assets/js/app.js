(function () {
  ("use strict");

  AOS.init({
    duration: 1250, 
    easing: 'ease-in-out',
    once: true 
  });
  // HTML Root Element
  const rootHtml = document.firstElementChild;
  let windowWidth = window.innerWidth;

  const header = document.querySelector(".header");
  if (header) {
    const checkScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", checkScroll);

    window.addEventListener("load", checkScroll);
  }


  $('.sidebar-btn').on("click", function () {
    $('.main-nav').addClass('show-menu');
});

$('.menu-close-btn').on("click", function () {
    $('.main-nav').removeClass('show-menu');
});

// mobile-drop-down

$(".main-nav .bi").on('click', function (event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
    if ($fl.hasClass('bi-chevron-down')) {
        $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
    } else {
        $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
    }
    $fl.next(".sub-menu").slideToggle();
});

$('.main-nav a').on("click", function () {
  $('.main-nav').removeClass('show-menu');
});

  // Review slider
  const reviewSlider = document.querySelector(".testimonial-slider");
  if (reviewSlider) {
    new Swiper(".testimonial-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".review-next",
        prevEl: ".review-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

   // testimonial-slider
   const testimonialSlider = document.querySelector(".testimonial-slider");
   if (testimonialSlider) {
     new Swiper(testimonialSlider, {
       slidesPerView: 3,
       spaceBetween: 30,
       loop: false,
       // autoplay: {
       //   delay: 3500,
       //   disableOnInteraction: false,
       // },
       navigation: {
         nextEl: ".button-next",
         prevEl: ".button-prev",
       },
       breakpoints: {
         320: {
           slidesPerView: 1,
         },
         768: {
           slidesPerView: 1,
           spaceBetween: 20,
         },
         991: {
           slidesPerView: 2,
         },
         1200: {
           slidesPerView: 3,
           spaceBetween: 30,
         },
       },
     });
   }

  // Blog slider

  const blogSlider = document.querySelector(".blog-slider");
  if (blogSlider) {
    new Swiper(blogSlider, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  const blogTwoSlider = document.querySelector(".blog-two-slider");
  if (blogTwoSlider) {
    new Swiper(blogTwoSlider, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tagsContainer = document.querySelector('.tags-container');
    const tags = document.querySelectorAll('.tag');
    
    const getRandomDelay = () => Math.random() * 0.5;

    let animated = false;

    const animateTags = () => {
        if (animated) return;
        animated = true;

        tags.forEach((tag) => {
            gsap.to(tag, {
                y: 0,
                opacity: 1,
                duration: 1.5,
                delay: getRandomDelay(),
                ease: "bounce.out",
                onComplete: () => {
                    tag.style.transition = "transform 0.3s ease";
                    tag.addEventListener('mouseover', () => {
                        tag.style.transform = "translateY(-5px)";
                    });
                    tag.addEventListener('mouseout', () => {
                        tag.style.transform = "translateY(0)";
                    });
                }
            });
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTags();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(tagsContainer);
});

  // Marquee Slider
  function marqueeSlider(selector, speed) {
    const parentSelectors = document.querySelectorAll(selector);
  
    parentSelectors.forEach((parentSelector) => {
      const clone = parentSelector.innerHTML;
      const firstElement = parentSelector.children[0];
      let i = 0;
  
      parentSelector.insertAdjacentHTML("beforeend", clone);
      parentSelector.insertAdjacentHTML("beforeend", clone);
  
      function animateMarquee() {
        i += speed;
        if (i > firstElement.clientWidth) {
          i = 0;
        }
        firstElement.style.marginLeft = `-${i}px`;
        requestAnimationFrame(animateMarquee);
      }
  
      animateMarquee(); // Start animation
    });
  }
  
  window.addEventListener("load", () => marqueeSlider(".marquee-items", 0.4));
  


const elementsWorks = document.querySelectorAll(".item-work");
const slidePicWorks = document.querySelector("#gallery-work");
const slidePicsWorks = document.querySelector("#work-images");

gsap.set(slidePicWorks, { autoAlpha: 0 });

elementsWorks.forEach((element, index) => {
  element.addEventListener("mouseenter", function () {
    gsap.to(slidePicsWorks, {
      marginTop: `-${280 * index}px`,
      duration: 0.2,
      ease: "power1",
    });
  });

  element.addEventListener("mouseleave", function () {
    gsap.to(element, { color: "initial", duration: 0.2, ease: "power1" });
  });
});

window.addEventListener("mousemove", function (e) {
  gsap.to(slidePicWorks, {
    top: `${e.clientY}px`,
    left: `${e.clientX}px`,
    xPercent: -20,
    yPercent: -45,
    duration: 0.2,
    ease: "power1",
  });
});

const itemsWork = document.querySelector(".items-works");

if(itemsWork) {
  itemsWork.addEventListener("mouseenter", function () {
      gsap.to(slidePicWorks, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "power1",
      });
    });
}


if(itemsWork) {
  itemsWork.addEventListener("mouseleave", function () {
    gsap.to(slidePicWorks, {
      autoAlpha: 0,
      duration: 0.2,
      ease: "power1",
    });
  });
}


  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.scroll-video', {
    scale: 1, 
    scrollTrigger: {
      trigger: '.video-container', 
      start: 'top 80%',
      end: 'top 20%', 
      scrub: true,
      markers: false, 
    }
  });

  gsap.to('.scroll-video2', {
    scale: 1, 
    scrollTrigger: {
      trigger: '.video-container2', 
      start: 'top 80%',
      end: 'top 20%', 
      scrub: true,
      markers: false, 
    }
  });


const colorButtons = document.querySelectorAll('.color-btn');


colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const newPrimaryColor = button.getAttribute('data-color');
    document.documentElement.style.setProperty('--color-primary', newPrimaryColor);
    const rgbaColor = newPrimaryColor.replace('rgb', 'rgba').replace(')', ', 0.3)');
    document.documentElement.style.setProperty('--color-primary-soft', rgbaColor);
  });
});

// hover tab
document.addEventListener('DOMContentLoaded', function() {
  const awardItems = document.querySelectorAll('.award-item');
  const avatarContents = document.querySelectorAll('.avatar-content');
  const defaultContent = document.getElementById('default-content');

  function resetItems() {
      awardItems.forEach(item => {
          item.classList.remove('active');
      });
      
      avatarContents.forEach(content => {
          content.classList.remove('active');
      });
      
      defaultContent.classList.add('active');
  }

  awardItems.forEach(item => {
      item.addEventListener('mouseenter', function() {

          awardItems.forEach(i => i.classList.remove('active'));
          avatarContents.forEach(content => content.classList.remove('active'));
          this.classList.add('active');
          
          const contentId = this.getAttribute('data-content');
          const content = document.getElementById(contentId);
          defaultContent.classList.remove('active');
          content.classList.add('active');
      });
  });
  
  const awardsContainer = document.querySelector('.awards-container');
  if(awardsContainer){
    awardsContainer.addEventListener('mouseleave', resetItems);
    awardItems[0].classList.add('active');
    document.getElementById('content-1').classList.add('active');
    defaultContent.classList.remove('active');
  }
});

// Circle button hover

const buttons = document.querySelectorAll('.circle-button');

if (buttons) {
  buttons.forEach(button => {
    const overlay = button.querySelector('.fill-overlay');
    const content = button.querySelector('.content');
    const heading = button.querySelector('h3');
    const isDark = button.classList.contains('dark');

    button.addEventListener('mouseenter', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = Math.round((x / rect.width) * 100);
      const yPercent = Math.round((y / rect.height) * 100);

      gsap.set(overlay, {
        transformOrigin: `${xPercent}% ${yPercent}%`
      });

      gsap.to(overlay, {
        scale: 2.5,
        duration: 0.62,
        ease: "none"
      });

      if (isDark) {
        gsap.to(heading, {
          color: '#222',
          duration: 0.5,
          ease: "none"
        });
      }
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(overlay, {
        scale: 0,
        duration: 0.5,
        ease: "none"
      });

      if (isDark) {
        gsap.to(heading, {
          color: '#fff',
          duration: 0.5,
          ease: "none"
        });
      }
    });
  });
}


})();
