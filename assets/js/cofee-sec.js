// Add to Cart
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".coffee-card, .equipment-card");
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);
    const image = card.querySelector("img").getAttribute("src");

    const product = { name, price, image };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert(`${name} added to cart!`);
  });
});

// search products
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const coffeeCards = document.querySelectorAll(".coffee-card");

  function filterCoffee() {
    const query = searchInput.value.toLowerCase().trim();

    coffeeCards.forEach((card) => {
      const name = card.dataset.name.toLowerCase();
      if (name.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterCoffee);

  searchBtn.addEventListener("click", filterCoffee);
});
