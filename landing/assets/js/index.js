document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "A" &&
    e.target.getAttribute("href").startsWith("#")
  ) {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    smoothScroll(target, 1000);
  }
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  var menuIcon = document.getElementById("menu-icon");
  navbar.classList.toggle("expanded");
  menuIcon.classList.toggle("open");

  var isExpanded = menuIcon.getAttribute("aria-expanded") === "true" || false;
  menuIcon.setAttribute("aria-expanded", !isExpanded);
}

// Close navbar when a link is clicked (for better UX on mobile)
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", closeNavbarOnLinkClick);
});

function closeNavbarOnLinkClick() {
  if (navbar.classList.contains("expanded")) {
    navbar.classList.remove("expanded");
    menuIcon.classList.remove("open");
  }
}

// Smooth Scrolling
function smoothScroll(target, duration) {
  if ("scrollBehavior" in document.documentElement.style) {
    // Если браузер поддерживает scroll-behavior, используем его
    window.scrollTo({
      top: document.querySelector(target).offsetTop - 70, // Adjust for header height
      behavior: "smooth",
    });
  } else {
    // Если scroll-behavior не поддерживается, используем JavaScript-анимацию
    const targetElement = document.querySelector(target);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - 70; // Adjust for header height
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }
}

// Apply smooth scrolling to all internal links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target, 1000);
  });
});
