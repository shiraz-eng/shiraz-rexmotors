// Initialize cart
let cart = [];
let

// Update cart count in the UI
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Toggle Cart Window
function toggleCart() {
    const cartWindow = document.getElementById('cart-window');
    cartWindow.style.display = cartWindow.style.display === 'block' ? 'none' : 'block';
    renderCartItems();
}

// Close the cart window
function closeCart() {
    const cartWindow = document.getElementById('cart-window');
    cartWindow.style.display = 'none';
}
