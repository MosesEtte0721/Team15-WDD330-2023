import ProductListing from "./productList.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";


loadHeaderFooter();

let params =  getParams("category");


let productData = new ExternalServices();

let element = document.querySelector(".product-list");

let productList = new ProductListing(params, productData, element);

productList.init();
