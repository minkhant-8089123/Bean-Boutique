// Handle "Offer" button clicks
document.querySelectorAll(".offer-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Offer applied! Redirecting you to the shop...");
    window.location.href = "coffee.html"; // redirect to coffee products
  });
});

document.querySelectorAll(".subscribe-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Thank you for subscribing! We'll keep your coffee stocked ☕");
  });
});
