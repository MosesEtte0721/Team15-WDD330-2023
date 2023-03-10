import ProductData from "./ProductData.mjs";
import PersonalUtils from "./pers-utils.mjs";
import setLocalStorage from "./pers-utils.mjs";

// instance of ProductData class
let productData = new ProductData("tents");

// instance of PersonalUtils class
// let PersonalUtil = new PersonalUtils(productData);

function addcart(value) {
    setLocalStorage("personal", value);
}

async function final(match) {
    let val = await productData.findProductById(match.target.dataset.id);
    addcart(val);
}
document.getDocumentById("cart-page").addEventListener("click", final)

