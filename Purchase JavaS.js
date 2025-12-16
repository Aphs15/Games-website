let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(item, price) {
        cart.push({ item, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(item + ' added to cart.');
        // Redirect to cart page
        window.location.href = 'Checkout.html';
    }


  

