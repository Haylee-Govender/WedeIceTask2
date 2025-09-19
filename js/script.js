// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close mobile menu when a nav link is clicked
const navLinksAll = document.querySelectorAll("nav ul li a");
navLinksAll.forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Fade-in elements on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Simple contact form handler (demo only)
const form = document.querySelector(".contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
  form.reset();
});

// Dark mode toggle
const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon depending on mode
  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Load theme preference from localStorage
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkToggle.textContent = "☀️";
  }
});
// Category filter system with Back button
const categoryCards = document.querySelectorAll(".category");
const productLists = document.querySelectorAll(".product-list");
const categoriesContainer = document.querySelector(".categories");
const backButtons = document.querySelectorAll(".back-btn");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    const category = card.getAttribute("data-category");

    // Hide categories, show chosen product list
    categoriesContainer.style.display = "none";
    productLists.forEach(list => list.classList.remove("active"));
    document.getElementById(category).classList.add("active");

    // Smooth scroll
    document.getElementById(category).scrollIntoView({ behavior: "smooth" });
  });
});

// Back to categories
backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    productLists.forEach(list => list.classList.remove("active"));
    categoriesContainer.style.display = "grid";
    categoriesContainer.scrollIntoView({ behavior: "smooth" });
  });
});
// Toast Notification Function
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";

  // Hide after 3 seconds
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

// Add to Cart buttons
const addToCartBtns = document.querySelectorAll(".btn");

addToCartBtns.forEach(btn => {
  if (btn.textContent.includes("Add to Cart")) {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent page jump
      const productName = btn.parentElement.querySelector("h3").textContent;
      showToast(`${productName} added to cart 🛒`);
    });
  }
});


