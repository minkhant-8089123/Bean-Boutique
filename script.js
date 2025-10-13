// Cart Count
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach((el) => {
    el.textContent = cart.length;
  });
}
updateCartCount();

// --- Navbar Menu ---
const openMenuButton = document.querySelector("#menu-open-button");
const closeMenuButton = document.querySelector("#menu-close-button");

openMenuButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

closeMenuButton.addEventListener("click", () => openMenuButton.click());

// Discount Modal Popup
const modal = document.getElementById("discountModal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("discount-form");

// show discount modal only for first time visitors
if (!localStorage.getItem("visited")) {
  this.setTimeout(() => {
    modal.style.display = "flex";
  }, 1500);
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("discount-email").value.trim();

  if (email) {
    alert(
      `Thank you for signing up! Your 10% discount code has been sent to ${email}`
    );
    modal.style.display = "none";
    localStorage.setItem("visited", "true");
  } else {
    alert("Please enter a vaild email");
  }
});

// slide show
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
  }
  // change slide every 3 seconds
  setInterval(showNextSlide, 3000);
});
