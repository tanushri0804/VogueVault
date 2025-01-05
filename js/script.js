// Show Wishlist
function showWishlist() {
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("wishlist-section").classList.remove("hidden");
    document.getElementById("bag-section").classList.add("hidden");
}

// Show Bag
function showBag() {
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("wishlist-section").classList.add("hidden");
    document.getElementById("bag-section").classList.remove("hidden");
}

// Add to Wishlist
function addToWishlist(button) {
    const productCard = button.closest(".product-card");
    const wishlistItems = document.getElementById("wishlist-items");
    wishlistItems.appendChild(productCard.cloneNode(true));
    alert("Added to Wishlist!");
}

// Add to Bag
function addToBag(button) {
    const productCard = button.closest(".product-card");
    const bagItems = document.getElementById("bag-items");
    bagItems.appendChild(productCard.cloneNode(true));
    alert("Added to Bag!");
}
