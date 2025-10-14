// --- Cart Logic ---
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(coffee) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(coffee);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${coffee.name} added to cart!`);
  updateCartCount();
}

function renderCart() {
  const cartContainer = document.getElementById("cartContainer");
  if (!cartContainer) return; // safety if cartContainer not found

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align:center; padding:40px;">
        <h3>Your cart is empty ☕</h3>
        <p style="color:#555; margin:10px 0;">
          Looks like you haven’t added anything yet.
        </p>
        <a href="coffee.html" 
           style="display:inline-block; margin-top:15px; background:#3e2723; color:#fff; padding:10px 18px; border-radius:8px; text-decoration:none;">
          Browse Coffee Selection
        </a>
      </div>
    `;
    document.getElementById("totalPrice").textContent = "Total: $0.00";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
      </div>
      <button class="delete-btn" data-index="${index}">Remove</button>
    `;

    cartContainer.appendChild(cartItem);
  });

  document.getElementById("totalPrice").textContent =
    "Total: $" + total.toFixed(2);

  // Delete item
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      updateCartCount();
    });
  });
}

const checkoutButton = document.getElementById("checkoutButton");
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    alert("Checkout process will be available soon.");
    localStorage.removeItem("cart");
    renderCart();
    updateCartCount();
  });
}

// --- Init ---
renderCart();
updateCartCount();

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".coffee-card");

      const name = card.querySelector(".coffee-name").textContent;
      const price = parseFloat(card.querySelector(".price").dataset.price);
      const image = card.querySelector("img").getAttribute("src"); // 👈 add this

      const coffee = { name, price, image };

      // Get cart from localStorage or empty
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(coffee);

      localStorage.setItem("cart", JSON.stringify(cart));

      // Update cart count in nav
      const cartCount = document.getElementById("cart-count");
      if (cartCount) {
        cartCount.textContent = cart.length;
      }

      alert(`${name} added to cart!`);
    });
  });
});
