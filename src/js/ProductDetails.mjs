import ProductData from "./ProductData"
import {setLocalStorage, getLocalStorage} from "./utils.mjs"


export default class ProductDetails{
    constructor(productId, dataSource){
        this.productId = productId
        this.product = {}
        this.dataSource = dataSource
        
    }

    async init() {
        // Return product found in the array with corresponding Id
        this.product = await this.dataSource.findProductById(this.productId)

        this.array = await this.dataSource.getData();

        
        this.renderProductDetails(".product-details")
        document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));
    }

    addToCart() {
        setLocalStorage("so-cart", this.product)
    }

    renderProductDetails(selector) {
        let element = document.querySelector(selector);
        element.insertAdjacentHTML("afterbegin", productDetailsTemplate(this.product))
    }
}

function productDetailsTemplate(product) {
    const template = ` <h3>${product.Brand["Name"]}</h3>

    <h2 class="divider">${product.NameWithoutBrand}</h2>

    <img class="divider" src="${product.Image}"  alt="${product.Name}"/>

    <p class="product-card__price">Price:$${product.FinalPrice}</p>

    <p class="product__color">Color: ${product.Colors[0].ColorName}</p>

    <p class="product__description"> Description:${product.DescriptionHtmlSimple}</p>

    <div class="product-detail__add">
      <button id="addToCart" data-id=${product.Id}">Add to Cart</button>
    </div>`

    return template;
}