import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";
// import ProductData from "./ProductData.mjs"
// import {getParams} from "./utils.mjs"
// import ProductDetails from "./productList.mjs"

loadHeaderFooter();

let cartItem = getLocalStorage("so-cart") || [];
// let totalCart = getLocalStorage("total-cart") || [];

export default class ShoppingCart{
    constructor(key, parentElement){
        this.key = key;
        this.parentElement = parentElement
    }

    renderCartContents() {
        const cartItems = getLocalStorage(this.key);
        const htmlItems = cartItems.map((item) => cartItemTemplate(item));
        document.querySelector(this.parentElement).innerHTML = htmlItems.join("");
        
      
        document.querySelector(".increase").addEventListener("click", increment);
        // document.querySelector(".decrease").addEventListener("click", decrement);
      
        if (cartItems) {
          let hide = document.querySelector(".quantity");
          let cartTotal = cartItems.map((item)=> item.quantity).reduce((first, sec)=> first + sec);
          hide.style.display = "inline";
          hide.innerHTML = cartTotal;
        }
      }

      // increment() {
      //   
      //   let doc = document.querySelector("#quantity").target.value;
      //  let cartTotal = cartItem.map((item)=> item.Quantity)
      //  let totalItems = cartTotal.reduce((first, sec)=> first + sec)
      //   if(cartTotal){
      //     cartTotal += 1
      //   doc.innerHTML = cartTotal
      //   cartIndicator.innerHTML = totalItems;
      //   console.log(cartTotal);
      //   setLocalStorage("so-cart", cartItem)
      //  }
       
        
      // }
}

function increment() {
  let cartItems = getLocalStorage("so-cart") || []
  let cartIndicator = document.querySelector(".cart-indicator");
  console.log("increment")
  let inputValue = document.querySelector("#value");
  inputValue.innerHTML = inputValue.value++
  // cartIndicator.innerHTML = inputValue
  let quantity = cartItems.filter((item) => item.Quantity);
  console.log(quantity)
  
}


function decrement() {
  console.log("decrement")
}

function cartItemTemplate(obj) {
  // let toFix = obj.TotalCost.toFixed(2)
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
  <p class="cart-card__price"><span class="color-span_red bold">Price:</span> ${obj.FinalPrice} </p>
  <p class="cart-card__quantity"><span class="color-span_red bold"> qty:</span> ${obj.Quantity} </p>
  <p class="cart-card__totalCost"><span class="color-span_red bold">Total:</span> $${obj.TotalCost}</p>
  
  <div class="increase-decrease">
    <button   class="decrease"  >-</button>
    <input  type="tex" id="value" value="${obj.Quantity}"  >
    <button   class="increase" > + </button>
  </div>
   <button type="submit" class="remove">Remove</button>
  

</li> `;

  return template;
}

// renderCartContents();
