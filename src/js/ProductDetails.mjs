
import {setLocalStorage, getLocalStorage} from "./utils.mjs"

// const setStorage = 
let cartItems = getLocalStorage("so-cart") || []
let totalCart = getLocalStorage("total") || []

export default class ProductDetails{
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
       let double = cartItems.find((item) => item.Id === this.product.Id);

      
    //  insert the item to the cart if not already in the cart
       if(double){
        double.quantity += 1;
        items.FinalPrice * items.quantity;
        setLocalStorage("so-cart", cartItems);
       } else {
        
            //create the property to track the quantity of items added
        items.quantity = 1;

        items["FinalPrice"] * items.quantity;
        // push the item to the cart if not already in the cart
        setLocalStorage("so-cart", cartItems);
        cartItems.push(items);
        
       }     
       let cartTotal = cartItems.map((item)=> item.quantity).reduce((first, sec)=> first + sec);
 
       let cartIndicator = document.querySelector(".cart-indicator");
       cartIndicator.innerHTML = cartTotal;
     
       setLocalStorage("total", cartTotal)
      
       
       if(items.TotalCost){
        console.log("this is price for one item", items.TotalCost)
       }
        // sets the cart
        setLocalStorage("so-cart", cartItems);
    }

    renderProductDetails(selector) {
        let element = document.querySelector(selector);
        element.insertAdjacentHTML("afterbegin", productDetailsTemplate(this.product))
    }
}

function productDetailsTemplate(product) {
    let discount = (product.FinalPrice / product.SuggestedRetailPrice) * 100
    
    const template = `<h3>${product.Brand["Name"]}</h3>

    <h2 class="divider">${product.NameWithoutBrand}</h2>

    <img class="divider" src="${product.Image}"  alt="${product.Name}"/>

    <p class="product-card__discount">Discount: (${discount.toFixed()}% off sales)</p>

    <p class="product-card__price">Price: $${product.FinalPrice}</p>

    <p class="product__color">Color: ${product.Colors[0].ColorName}</p>

    <p class="product__description"> Description:${product.DescriptionHtmlSimple}</p>

    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>`

    return template;                                                                                                                                                                                                            
}