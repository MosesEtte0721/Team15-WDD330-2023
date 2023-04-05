import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";


loadHeaderFooter();

let cartItems = getLocalStorage("so-cart") || [];
let loopCart  = cartItems.map((items) => items);
// let totalCart = getLocalStorage("total-cart") || [];

export default class ShoppingCart{
    constructor(key, parentElement){
        this.key = key;
        this.parentElement = parentElement
    }

    renderCartContents() {
        const htmlItems = cartItems.map((item) => cartItemTemplate(item));
        if(htmlItems.length === 0) {
          let cartFooter = document.querySelector(".cart-footer");
          let cartTotal = document.querySelector(".cart-total");
          let totalPrice = document.querySelector(".quantity");
          // let cartButton = document.querySelector(".button");
          // cartButton.style.display = "none";
          cartTotal.style.display = "none";
          totalPrice.style.display = "none";
          let text = "<h5>Your Cart is Empty</h5>";
          cartFooter.innerHTML = text;
          return;
        }
 
          document.querySelector(this.parentElement).innerHTML = htmlItems.join("");
        // document.querySelector(".increase").addEventListener("click", increment);
        // document.querySelector(".decrease").addEventListener("click", decrement);
       
        if (Array.isArray(cartItems)) {
          let hide = document.querySelector(".quantity");
          let cartTotal = cartItems.map((item)=> item.TotalCost).reduce((first, sec)=> first + sec);
          hide.style.display = "inline";
          hide.style.color = "green";
          hide.innerHTML = cartTotal.toFixed(2);
        } 
         
      }

      
       
        
     
}

function increment() {
 
  // let cartItems = getLocalStorage("so-cart") || []
  let increaseBtn = document.querySelectorAll(".increase");
  let qty = document.querySelectorAll(".value").value;
  let check = document.querySelectorAll(".increase-decrease")
  
  // let decreaseBtn = document.querySelectorAll(".decrease");
  // let value = document.querySelector(".value").value; increase-decrease

  for(let button of increaseBtn) {
    button.addEventListener("click", (e)=> {
      qty.forEach((element) => {
        console.log(element)
        // if(e.target.dataset.id == element.dataset.id) {
        //   qty += 1
        // }
      })
    })
  }
 
  
  setLocalStorage("so-cart", cartItems);
}

function increaseNum() {
  
  const quantityInput = document.querySelector(".value")
  let itemId  = this.Id;
  console.log(itemId);
  let loopArr = cartItems.map((items) => items.Id == itemId.Id);
   if(loopArr !== 0 && !isNaN(loopArr.Quantity)) {
    const met = cartItems[loopArr].Quantity = quantityInput.value;
    quantityInput.innerHTML = met;
   }
   
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
  
  <div class="increase-decrease" >
    <button   class="decrease"  >-</button>
    <input  type="text" id="value" value="${obj.Quantity}" data-id="${obj.Id}"  >
    <button   class="increase" data-id='${obj.Id}' > + </button>
  </div>
   <button type="text" class="remove">Remove</button>
  

</li> `;

  return template;
}

// renderCartContents();
