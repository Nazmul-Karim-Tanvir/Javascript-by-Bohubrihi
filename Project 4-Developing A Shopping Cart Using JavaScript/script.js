//product 
let products = document.querySelectorAll("#product");


// shopping cart related 
let viewshopingCart = document.querySelector("#view-shopping-cart");
let shoppingCart = document.getElementById("shopping-cart");
let shoppingCartItem = document.getElementById("shopping-cart-item");


// Scroll to the shopping cart element
viewshopingCart.addEventListener("click", function() {
  shoppingCart.scrollIntoView();
});

//Add to cart will add item in Shopping Cart
products.forEach(function(product){
  product.addEventListener("click", addToShoppingCart);
});


function addToShoppingCart(e) {

  //creating li element 
  let li = document.createElement("li");
  //getting text from camera sibling h5
  let h5 = e.target.parentElement.childNodes[3].textContent;
  let p1 = e.target.parentElement.childNodes[4].textContent;
  let p2 = e.target.parentElement.childNodes[5].textContent;
  //let text  = h5.textContent;

  li.innerHTML = `Product detail: <i>${h5},${p1}, ${p2} </i> <button class= "badge text-bg-danger"> Remove  </button>`;
  console.log(li);

  shoppingCartItem.appendChild(li);


  //preventing default behavior of click event
  e.preventDefault();
}
