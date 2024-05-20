document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items');
    const checkoutButton = document.getElementById('checkout');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        itemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `<span>${item.name}</span> <span>${item.price}</span> <button onclick="removeItem(${index})">Remove</button>`;
            itemsContainer.appendChild(itemDiv);
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addItem(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    window.removeItem = (index) => {
        cart.splice(index, 1);
        updateCart();
    }

    checkoutButton.addEventListener('click', () => {
        alert('Checkout - Total: ' + cart.reduce((sum, item) => sum + item.price, 0));
    });

    // Example items to add to cart
    addItem('Item 1', 10);
    addItem('Item 2', 20);

    updateCart();
});
