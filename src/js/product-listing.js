import ProductListing from "./productList.mjs";
import ProductData from "./ProductData.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";


loadHeaderFooter();

let params =  getParams("category");


let productData = new ProductData();

let element = document.querySelector(".product-list");

let productList = new ProductListing(params, productData, element);

productList.init();
