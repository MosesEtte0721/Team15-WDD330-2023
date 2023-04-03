import { loadHeaderFooter} from "./utils.mjs";
import ShoppingCart from "./cart.mjs"



loadHeaderFooter();
let shopping = new ShoppingCart("so-cart", ".product-list");

shopping.renderCartContents();
