import ProductListing from "./productList.mjs";
import ProductData from "./ProductData.mjs";

let productData = new ProductData("tents");

let element = document.querySelector(".product-list");
let productList = new ProductListing("Tents", productData, element);

productList.init();
