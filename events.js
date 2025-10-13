const registerModal = document.getElementById("registerModal");
const closeModal = document.getElementById("closeModal");
const registerButtons = document.querySelectorAll(".register-btn");
const modalTitle = document.getElementById("modalTitle");

registerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const eventName = btn.getAttribute("data-event");
    modalTitle.textContent = "Register for " + eventName;
    registerModal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  registerModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    registerModal.style.display = "none";
  }
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for registering! We’ll contact you via email.");
  registerModal.style.display = "none";
});
