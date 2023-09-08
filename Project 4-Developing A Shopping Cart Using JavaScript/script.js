let viewshopingCart = document.querySelector("#view-shopping-cart");
var cart = document.getElementById("shopping-cart");
let camera = document.querySelector("#camera");
let earphones = document.querySelector("#earphone");
let laptop = document.querySelector("#laptop");
let computer = document.querySelector("#computer");

// Add a click event listener to the button
viewshopingCart.addEventListener("click", function() {
  // Scroll to the shopping cart element
  cart.scrollIntoView();
});

