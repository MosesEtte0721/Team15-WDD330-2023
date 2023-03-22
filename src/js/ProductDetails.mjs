import {setLocalStorage, getLocalStorage} from "./utils.mjs";

// const setStorage = 
let cartItems = getLocalStorage("so-cart") || []
let totalCart = getLocalStorage("total-cart") || []

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId
        this.product = {}
        this.dataSource = dataSource
        this.array = []
        
    }

    async init() {
        // Return product found in the array with corresponding Id
        this.product = await this.dataSource.findProductById(this.productId)
        // console.log(this.product)

        // get the products array
        this.array = await this.dataSource.getData();
       

        // Displays a generic page for the details of a product
        this.renderProductDetails(".product-details")
        document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));
       

    }
    
   

    addToCart() {
        
       let items = this.array.find((item) => item.Id === this.product.Id);
        // let double = cartItems.find((item) => item.Id === this.product.Id);
        //  insert the item to the cart if not already in the cart
        // if(double){
        //     double.quantity += 1;
        // } else {
            
        //         // push the item to the cart if not already in the cart
                
        //         //create the property to track the quantity of items added
        //         // items.quantity = 1;
        //     }       
            cartItems.push(items); 
            setLocalStorage("so-cart", cartItems);

            // this.calculate()
      
            
    }
   
            
      
    
    renderProductDetails(selector) {
        let element = document.querySelector(selector);
        element.insertAdjacentHTML("afterbegin", productDetailsTemplate(this.product))
    }

     decreament() {
        let val = document.querySelector(".value");
        let items = this.array.find((item) => item.Id === this.product.Id);
       let double = cartItems.find((item) => item.Id === this.product.Id);
       if(double) {
        double.quantity -= 1;
        val.value -= 1
       } else if(double === 0) return;
    }
     

    increment() {
        let val = document.querySelector(".value");
        let items = this.array.find((item) => item.Id === this.product.Id);
        let double = cartItems.find((item) => item.Id === this.product.Id);
        if(double) {
            double.quantity += 1;
            val.value += 1
        } else {
            cartItems.push(items)
           }

    }

    calculate(){
        let cartTotal = cartItems.map((item)=> item.quantity).reduce((first, sec)=> first + sec);
        // console.log(cartTotal)
        let cartIndicator = document.querySelector(".cart-indicator");
        cartIndicator.innerHTML = cartTotal;

        setLocalStorage("total-cart", totalCart)
    }
    
}




function productDetailsTemplate(product) {
    let discount = (product.FinalPrice / product.SuggestedRetailPrice) * 100
    
    const template = `<h3>${product.Brand["Name"]}</h3>

    <h2 class="divider">${product.NameWithoutBrand}</h2>

    <img class="divider" src="${product.Images.PrimaryLarge}"  alt="${product.Name}"/>

    <p class="product-card__discount">Discount: (${discount.toFixed()}% off sales)</p>

    <p class="product-card__price">Price: $${product.FinalPrice}</p>

    <p class="product__color">Color: ${product.Colors[0].ColorName}</p>

    <p class="product__description"> Description:${product.DescriptionHtmlSimple}</p>

    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>`

    return template;                                                                                                                                                                                                            
}



// let items = this.array.find((item) => item.Id === this.product.Id);
// let double = cartItems.find((item) => item.Id === this.product.Id);
// //  insert the item to the cart if not already in the cart
// if(double){
//  double.quantity += 1;
//  items.FinalPrice * items.quantity;
 
// } else {
//      //create the property to track the quantity of items added
//  items.quantity = 1;
//  items["FinalPrice"] * items.quantity;
//  // push the item to the cart if not already in the cart
 
//  cartItems.push(items);
 
// }    