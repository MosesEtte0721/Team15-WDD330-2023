import { getLocalStorage, setLocalStorage } from "./utils.mjs";
// import ProductData from "./ProductData.mjs"
// import {getParams} from "./utils.mjs"
// import ProductDetails from "./productList.mjs"

let cartItems = getLocalStorage("so-cart") || [];

let totalCart = getLocalStorage("total-cart") || [];

function renderCartContents() {
  // const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  

  document.querySelector(".increase").addEventListener("click", increment);
  document.querySelector(".decrease").addEventListener("click", decrement);

  if (cartItems) {
    let hide = document.querySelector(".quantity");
    let cartTotal = cartItems.map((item)=> item.quantity).reduce((first, sec)=> first + sec);
    hide.style.display = "inline";
    hide.innerHTML = cartTotal;
  }
}

function increment() {}

function decrement() {}

function cartItemTemplate(obj) {
  let template = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${obj.Image}"
      alt="${obj.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${obj.Name}</h2>
  </a>
  <p class="cart-card__color"><span class="color-span_red bold"> Color:</span> ${obj.Colors[0].ColorName}</p>
  <p class="cart-card__quantity"><span class="color-span_red bold"> qty:</span>${obj.quantity} </p>
  <p class="cart-card__price"><span class="color-span_red bold">Price:</span> $${obj.FinalPrice}</p>
  <div class="cart-div_wrapper">
  <div class="increase-decrease">
    <button id="value" class="decrease"  >-</button>
    <input type="number" id="quantity"  value="${obj.quantity}">
    <button id="value" class="increase" > + </button>
  </div>
   <button type="submit" class="remove">Remove</button>
  

</li> `;

  return template;
}

renderCartContents();
