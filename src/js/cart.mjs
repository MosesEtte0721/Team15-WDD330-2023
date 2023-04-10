import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";


loadHeaderFooter();

let cartItems = getLocalStorage("so-cart") || [];
let loopCart  = cartItems.map((items) => items);
 console.log(loopCart)
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
          // select the quantity from DOM
          let hide = document.querySelector(".quantity");
          //  Adds all TotalCost in the object and returns the sum of all all the TotalCost
          let cartTotal = cartItems.map((item)=> item.TotalCost).reduce((first, sec)=> first + sec);
          hide.style.display = "inline";
          hide.style.color = "green";
          hide.innerHTML = cartTotal.toFixed(2);
        } 
        this.increment();
        this.decrement();
        
      }
     
      
      increment() {
        let cart = getLocalStorage("so-cart") || [];
        // selects all the buttons on the page
        let increaseBtn = document.querySelectorAll(".increase");
        // selects the values of the input fields on the page
        let qty = document.querySelectorAll(".value")
        // loops through the buttons
        for(let button of increaseBtn) {
          // adds click event to each button on the page
          button.addEventListener("click", (e)=> {
            // for each button, loops the values of the input fields 
           qty.forEach((items)=>{
            // returns the products whose Id matches the Id of the targeted product
            let ids = cart.find((item) => item.Id === items.dataset.id);
            /* checks if the button id matches that of the input fields 
            and Id of any product in the cart */
            if(e.target.dataset.id == items.dataset.id && ids) {
              // increase the value of the targeted product
              items.value++
              // assigns the product Quantity to the value of the targeted input value
              ids.Quantity = items.value;  
              // calculate the total cost of the targeted product
              ids.TotalCost = ids.Quantity * ids.FinalPrice;
              // set to local storage
              setLocalStorage("so-cart", cart)
            }
           })
          })
         }
      }
      
      decrement() {
        let cart = getLocalStorage("so-cart") || [];

        // selects all the buttons on the page
        let increaseBtn = document.querySelectorAll(".decrease");
        // selects value of the input fields on the page
        let qty = document.querySelectorAll(".value")
        
        // loop through each button on the page
        for(let button of increaseBtn) {
          // adds click event to each button of the page
          button.addEventListener("click", (e)=> {
            // loops through value input fields for every button
           qty.forEach((items)=>{
            // returns all "Id" from object in the cart
            let ids = cart.find((item) => item.Id === items.dataset.id)
            
            // decreases the quantity if the conditions are met
            if(e.target.dataset.id === items.dataset.id && ids) {
              // stops decreasing if the quantity reaches 0
              if(ids.Quantity == 0) {
                return;
              } else {
                // decreases the value of the input value
              items.value--
              // assigns the quantity of the product to the input value
               ids.Quantity = items.value
              //  update the total cost of the each products
              ids.TotalCost -= ids.FinalPrice;
              // stores to the local storage
              setLocalStorage("so-cart", cart)
              }

            }

           })

          })

         }
      }
  }


// function increaseNum() {
  
//   const quantityInput = document.querySelector(".value")
//   let itemId  = this.Id;
//   console.log(itemId);
//   let loopArr = cartItems.map((items) => items.Id == itemId.Id);
//    if(loopArr !== 0 && !isNaN(loopArr.Quantity)) {
//     const met = cartItems[loopArr].Quantity = quantityInput.value;
//     quantityInput.innerHTML = met;
//    }
   
// }

 

function cartItemTemplate(obj) {
  let toFix = obj.TotalCost.toFixed(2)
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
  <p class="cart-card__totalCost"><span class="color-span_red bold">Total:</span> $${toFix}</p>
  
  <div class="increase-decrease" >
    <button   class="decrease" data-id="${obj.Id}" >-</button>
    <input  type="text" class="value" value="${obj.Quantity}"  data-id="${obj.Id}"  >
    <button   class="increase" data-id='${obj.Id}' > + </button>
  </div>
   <button type="text" class="remove">Remove</button>
  
</li> `;

  return template;
}

// renderCartContents();
