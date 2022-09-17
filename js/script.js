// MENU SHOW / HIDDEN
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// REMOVE MENU
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// =============== GSAP ANIMATION ===============
TweenMax.from(".home__img", 1, {
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".profile__img", 1, {
  delay: 0.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__title", 1, {
  delay: 0.9,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__kuliah", 1, {
  delay: 1.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__social", 1, {
  delay: 1.9,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__button", 1, {
  delay: 2.3,
  opacity: 1,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".section-subtitle", 1, {
  delay: 2.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".section-title", 1, {
  delay: 2.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".project__bar", 1, {
  delay: 2.9,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".project__bar-title", 1, {
  delay: 3.1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".projects__img", 1, {
  delay: 3.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".footer__title", 1, {
  delay: 3.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".footer__description", 1, {
  delay: 3.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".footer__social", 1, {
  delay: 4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".footer__copy", 1, {
  delay: 4.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
