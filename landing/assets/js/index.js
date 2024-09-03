// Add random shapes to the background
function addRandomShapes() {
  const shapes = ["circle", "square", "triangle"];
  const colors = ["#4831D4", "#CCF381", "#FFFFFF"];
  const containers = document.querySelectorAll(".random-shapes");

  containers.forEach((container) => {
    for (let i = 0; i < 20; i++) {
      const shape = document.createElement("div");
      shape.classList.add("shape");
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      shape.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      shape.style.width = `${Math.random() * 30 + 10}px`;
      shape.style.height = shape.style.width;
      shape.style.borderRadius =
        randomShape === "circle"
          ? "50%"
          : randomShape === "square"
          ? "0"
          : "0 50% 50% 50%";
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
      shape.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(shape);
    }
  });
}

// Smooth scroll to sections
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Smooth scroll to next/previous section on mouse wheel
function setupSectionScroll() {
  const sections = document.querySelectorAll(".section");
  let currentSectionIndex = 0;
  let isScrolling = false;

  window.addEventListener("wheel", (e) => {
    if (!isScrolling) {
      isScrolling = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      currentSectionIndex = Math.max(
        0,
        Math.min(sections.length - 1, currentSectionIndex + direction)
      );

      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Adjust this value to control scroll sensitivity
    }
  });
}

// Initialize all functions
function init() {
  addRandomShapes();
  setupSmoothScroll();
  animateOnScroll();
  setupSectionScroll();
}

// Run initialization when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
