import ProductListing from "./productList.mjs";
import ProductData from "./ProductData.mjs";
import { loadHeaderFooter } from "./utils.mjs";


loadHeaderFooter();


let productData = new ProductData("tents");

let element = document.querySelector(".product-list");
let productList = new ProductListing("Tents", productData, element);

productList.init();
