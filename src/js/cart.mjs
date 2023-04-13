import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";


let cartItems = getLocalStorage("so-cart") || [];

export default class ShoppingCart{
    constructor(key, parentElement){
        this.key = key;
        this.parentElement = parentElement
    }

    renderCartContents() {
     
        const htmlItems = cartItems.map((item) => this.cartItemTemplate(item));
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
        // this.removeProducts();
        
      }
      
      increment() {
        let cart = getLocalStorage("so-cart") || [];
        // selects all the buttons on the page
        let increaseBtn = document.querySelectorAll(".increase");
        // selects the values of the input fields on the page
        let qty = document.querySelectorAll(".value")
        let totalCost = document.querySelectorAll(".cart-card__totalCost");
        let quantity  = document.querySelectorAll(".cart-card__quantity");
       
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
            if(e.target.dataset.id === items.dataset.id && ids) {
              
             // loops through the quantity of each product
              for(let qtys of quantity) {
                if(qtys.dataset.id == e.target.dataset.id){
                     // increasez the value of the targeted product
                  items.value++
                  // assigns the product Quantity to the value of the targeted input value
                  qtys.innerHTML = ids.Quantity = items.value;
                 setLocalStorage("so-cart", cart)
                }
              }

               // loops through the total cost of each product
               for(let cost of totalCost) {
                if(cost.dataset.id === e.target.dataset.id) {

                  // calculate the total cost of the targeted product by multiplying the 
                  // Quantity by the FianlPrice
                  let costt = ids.TotalCost = ids.Quantity * ids.FinalPrice;
                  cost.innerHTML = costt;
                }
                
              }
              // set to local storage
         setLocalStorage("so-cart", cart)
            }
           })
          })
         }
         
      }
      
      decrement() {
        let cart = getLocalStorage("so-cart") || [];
        // selects all the list or product-list on the page
        let li = document.querySelectorAll(".divider");

        let totalCost = document.querySelectorAll(".cart-card__totalCost");

        let quantity  = document.querySelectorAll(".cart-card__quantity ");
        // selects all the buttons on the page
        let increaseBtn = document.querySelectorAll(".decrease");
        // selects value of the input fields on the page
        let qty = document.querySelectorAll(".value")
        let cartIndicator = document.querySelector(".cart-indicator");
        
        // loop through each button on the page
        for(let button of increaseBtn) {
          // adds click event to each button of the page
          button.addEventListener("click", (e)=> {
            // loops through value input fields for every button
           qty.forEach((items)=>{
            // returns all "Id" from object in the cart
            let ids = cart.find((item) => item.Id === items.dataset.id);
            
            // decreases the quantity if the conditions are met
            if(e.target.dataset.id === items.dataset.id && ids) {
             // loops through the quantity of each product
              for(let qtys of quantity) {
                if(qtys.dataset.id === e.target.dataset.id){
                    // decreases the value of the input value for each product
                    items.value--
                    // assigns the quantity of the product to the input value
                    qtys.innerHTML = ids.Quantity = items.value;
                     // removes targeted product from the page when quantity is 0 (zero)
                    if(ids.Quantity == 0) {
                      for(let divi of li){
                        if(divi.id === ids.Id){
                          // remove products from the cart 
                          this.removeProducts(cart, ids);
                          // removes the product from the page
                          divi.remove()
                        }
                      }
                      setLocalStorage("so-cart", cart);
                    }       
                }
              }

              // // loops through the total cost of each product
              for(let cost of totalCost) {
                if(cost.dataset.id === e.target.dataset.id && ids) {
                  let costt = ids.Quantity * ids.FinalPrice;
                     //  update the total cost of the each products
                  cost.innerHTML = ids.TotalCost = costt;
                // set to local Storage
                  setLocalStorage("so-cart", cart);
               
                }
              }
             
            }

           })

          })

         }
       
      }

      cartItemTemplate(obj) {
        let template = `<li class="cart-card divider" id="${obj.Id}">
        <a href="#" class="cart-card__image">
          <img
            src="${obj.Image}"
            alt="${obj.Name}"
          />
        </a>
        <a href="#">
          <h2 class="card__name">${obj.Name}</h2>
        </a>
        <p class="cart-card__color"><span class="color-span_red bold"> Color:</span> ${obj.Colors[0]["ColorName"]}</p>
        <p class="cart-card__price"><span class="color-span_red bold">Price:</span class="finalPrice"> ${obj.FinalPrice} </p>
        <p class="cart-card__quantity " data-id="${obj.Id}" ><span class="color-span_red bold "> qty:</span> ${obj.Quantity} </p>
        <p class="cart-card__totalCost" data-id="${obj.Id}"><span class="color-span_red bold">Total:</span class="totalCost"> $${obj.TotalCost.toFixed(2)}</p>
        
        <div class="increase-decrease" >
          <button   class="decrease" data-id="${obj.Id}" >-</button>
          <input  type="text" class="value" value="${obj.Quantity}"  data-id="${obj.Id}"  >
          <button   class="increase" data-id='${obj.Id}' > + </button>
        </div>
         <button type="text" class="remove">Remove</button>
        
      </li> `;
     
        return template;
        
      }


  }



 



// renderCartContents();
