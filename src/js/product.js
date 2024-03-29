import { getParams, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

// dynamically loads headers and footers
loadHeaderFooter();

const dataSource = new ExternalServices("tents");
// console.log(dataSource);

const productId = getParams("product");
// console.log(productId);

const product = new ProductDetails(productId, dataSource);
product.init();

// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
