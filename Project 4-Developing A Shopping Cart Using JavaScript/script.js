//product 
let products = document.querySelectorAll("#product");



// shopping cart related 
let viewshopingCart = document.querySelector("#view-shopping-cart");
let shoppingCart = document.getElementById("shopping-cart");
let shoppingCartItem = document.getElementById("shopping-cart-item");


// Scroll to the shopping cart element
viewshopingCart.addEventListener("click", function () {
  shoppingCart.scrollIntoView();
});

//calling all function 
//Add to cart will add item in Shopping Cart
products.forEach(function (product) {
  product.addEventListener("click", addToShoppingCart);
});

shoppingCartItem.addEventListener("click", removeShoppingItem);
document.addEventListener("DOMContentLoaded", getShoppingCart);





//All  functions is here 
// addToShoppingCart
function addToShoppingCart(e) {

  //creating li element 
  let li = document.createElement("li");
  //getting text from camera sibling h5
  let h5 = e.target.parentElement.childNodes[3].textContent;
  let p1 = e.target.parentElement.childNodes[4].textContent;
  let p2 = e.target.parentElement.childNodes[5].textContent;
  //let text  = h5.textContent;

  li.innerHTML = `Product detail: <i>${h5},${p1}, ${p2} </i> <button class= "badge text-bg-danger"> Remove  </button>`;

  shoppingCartItem.appendChild(li);
  addToLocalStorage(li);


  //preventing default behavior of click event
  e.preventDefault();
}



//removeShoppingItem
function removeShoppingItem(e) {
  if (e.target.classList.contains("badge")) {
    if (confirm("Are you sure ?")) {
      let ele = e.target.parentElement;

      // get the list of all list items
      let items = document.querySelectorAll("#shopping-cart-item li");
      // convert the list to an array
      let itemsArray = Array.from(items);
      // get the index of the removed element in the array
      var order = itemsArray.indexOf(ele); 
      ele.remove();
      removeFromLocalStorage(order);
    }
  }
  e.preventDefault();
}



//addToLocalStorage 
function addToLocalStorage(product) {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  }
  else {
    products = JSON.parse(localStorage.getItem("products"));
  }

  products.push(product.textContent);

  localStorage.setItem("products", JSON.stringify(products));
}

// getproducts // when page reload

function getShoppingCart() {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  }
  else {
    products = JSON.parse(localStorage.getItem("products"));
  }

  shoppingCartItem.innerHTML = "";
  products.forEach(product => {
    let text = product;
    let li = document.createElement("li");
    li.innerHTML = ` <i>${text}</i> <button class= "badge text-bg-danger"> Remove  </button>`;

    shoppingCartItem.appendChild(li);

  });

}



// //removeFromLocalStorage
function removeFromLocalStorage(index) {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  }
  else {
    // get the array of products from the local storage
    products = JSON.parse(localStorage.getItem("products"));
  }
  // check if the array is not empty
  if (products.length > 0) {
    // remove the element at the given index from the array
    products.splice(index, 1);
    // update the local storage with the modified array
    localStorage.setItem("products", JSON.stringify(products));
  }

}