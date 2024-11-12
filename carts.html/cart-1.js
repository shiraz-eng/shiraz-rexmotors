function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div>
                <span>${item.name} x${item.quantity}</span><br>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background-color: black  color: white; border: none; cursor: pointer;">✕</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    alert("Proceeding to checkout...");
    localStorage.removeItem("cart");
    loadCart();
}

document.addEventListener("DOMContentLoaded", loadCart);
