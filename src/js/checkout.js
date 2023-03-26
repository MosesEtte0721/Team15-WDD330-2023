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
        let subTotal = document.querySelector("#subTotal");
        let TotalCosts = cartItems.map((items) => items.TotalCost);
        let addTotalCosts = TotalCosts.reduce((x, y) => x + y)
        subTotal.innerHTML = addTotalCosts.toFixed(2)
        return  addTotalCosts
    }

    calculateOrderTotal() {

    }

    calculateItemSummary() {

    }

    
}
// function calculateTotalItemCost() {
//     // let loopItems = cartItems.map((items) => items.)
//     let loopPrice = cartItems.map((item) => item.Quantity)
//     console.log(loopPrice)
//     let loopQuantity = cartItems.r((item) => item.Quantity)

//     let total = loopPrice * loopQuantity;
//     // console.log(total)

// }

function calulateTax() {
    let taxDoc = document.querySelector("#tax");
    let taxRate = 0.06;
    let loopPrice = cartItems.map((item) => item.TotalCost);
    let addTotalCost = loopPrice.reduce((x, y) => x + y);
    taxDoc.innerHTML = addTotalCost * taxRate;
    return addTotalCost * taxRate;
}



function calculateSubTotal() {
    let subTotal = document.querySelector("#subTotal");
    let TotalCosts = cartItems.map((items) => items.TotalCost);
    let addTotalCosts = TotalCosts.reduce((x, y) => x + y)
    subTotal.innerHTML = addTotalCosts.toFixed(2)
    return (addTotalCosts)
}

function totalItemsOrdered() {
    let quantity = cartItems.map((items) => items.Quantity);
    let addTotalCosts = quantity.reduce((x, y) => x + y);
    return addTotalCosts;
}

function shippingEst() {
    let quantity = cartItems.map((items) => items);
    let quantities = cartItems.map((items) => items.Quantity).reduce((x, y) => x + y);
    if(quantities === 1) {
        quantity.TotalCost + 10;
    } else if(quantities >= 2) {
        quantity.TotalCost += 2
    }
}

console.log("this is a subtotal", calculateSubTotal())
console.log("total tax", calulateTax());
console.log("this is total Items ordered", totalItemsOrdered())


// calculateTotalItemCost()