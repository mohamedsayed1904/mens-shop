let cart = [];

function toggleCart() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.classList.toggle('active');
  updateCart();
}

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById('cart-count').textContent = cart.length;
  updateCart();
}

function updateCart() {
  const itemsContainer = document.getElementById('cart-items');
  const emptyText = document.getElementById('empty-cart');
  itemsContainer.innerHTML = '';

  if (cart.length === 0) {
    emptyText.style.display = 'block';
  } else {
    emptyText.style.display = 'none';
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.textContent = `${item.name} - ${item.price}`;
      itemsContainer.appendChild(div);
    });
  }
}
