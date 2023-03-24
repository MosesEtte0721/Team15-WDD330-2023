import {loadHeaderFooter, getLocalStorage} from "./utils.mjs"

loadHeaderFooter();
let cartItems = getLocalStorage("so-cart") || []

class Checkout {
    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector;
        this.list = [];
        this.itemTotal = 0;
        this.shipping = 0;
        this.tax = 6;
        this.orderTotal = 0;
    }

    async init() {
        this.list = getLocalStorage("so-cart") || [];
    }

    calculateSubTotal() {

    }

    calculateOrderTotal() {

    }

    calculateItemSummary() {

    }

    
}
function calculateTotalItemCost() {
    // let loopItems = cartItems.map((items) => items.)
    let loopPrice = cartItems.map((item) => item.FinalPrice)
    let loopQuantity = cartItems.map((item) => item.quantity)

    let total = loopPrice * loopQuantity;
    console.log(total)

}

function calulateTax() {
    let tax = 0.06;
    let loopPrice = cartItems.map((item) => item.FinalPrice);
    for (let i = 0; i < loopPrice.length; i++) {
        return tax * loopPrice[i] 
    }
}

console.log(calulateTax());

calculateTotalItemCost()